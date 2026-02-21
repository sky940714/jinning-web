import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Products from './components/Sections/Products';
import Testimonials from './components/Sections/Testimonials';
import Channels from './components/Sections/Channels';
import FAQ from './components/Sections/FAQ';
import WholesaleForm from './components/Sections/WholesaleForm';
import Footer from './components/Footer';
// 1. 引入啟動畫面元件
import SplashScreen from './components/SplashScreen'; 

function App() {
  useEffect(() => {
    // 捲動顯示邏輯：讓元件進入視窗時觸發 CSS 動畫
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('revealed');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* 2. 放置啟動畫面，它會根據內部的 2.5 秒定時器自動消失 */}
      <SplashScreen /> 
      
      <Navbar />
      
      {/* 主要內容區塊 */}
      <main>
        <Hero />
        <About />
        <Products />
        <Testimonials />
        <Channels />
        <FAQ />
        <WholesaleForm />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;