import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Products from './components/Sections/Products';
import Testimonials from './components/Sections/Testimonials';
import Channels from './components/Sections/Channels';
import FAQ from './components/Sections/FAQ';
import WholesaleForm from './components/Sections/WholesaleForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('revealed');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Testimonials />
      <Channels />
      <FAQ />
      <WholesaleForm />
      <Footer />
    </div>
  );
}

export default App;