import { useEffect } from 'react';
// 1. 引入你的 Logo 圖片
import logoPreview from '../../assets/images/logo-preview.png';

const Hero = () => {
  return (
    <section className="relative pt-20 h-screen flex items-center overflow-hidden">
      {/* 背景圖片層 */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1590400541360-39474220275c?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-20 scale-110"
          alt="Lemon Background"
        />
      </div>

      {/* 2. 半透明 Logo 背景裝飾層 */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <img 
          src={logoPreview} 
          alt="" 
          className="w-[120%] max-w-none opacity-[0.1]  rotate-12" 
          /* opacity-[0.05]: 設定極低透明度 (5%)，若想清楚一點可改為 [0.1]
             grayscale: 讓它變成灰色調，避免顏色干擾文字閱讀
             rotate-12: 稍微旋轉增加設計感
          */
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center lg:text-left">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-bold mb-6 reveal">
            屏東產地直送・專業批發供應
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 reveal delay-100">
            讓您的品牌<br />
            充滿<span className="text-yellow-500">鮮檸香氣</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 mb-10 leading-relaxed reveal delay-200">
            金檸本舖不僅提供美味，更提供穩定的創業支持。我們堅持職人手作，為您獻上最純粹的屏東陽光滋味。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start reveal delay-300">
            <a href="#wholesale" className="px-8 py-4 bg-stone-900 text-white font-bold rounded-xl shadow-lg hover:bg-stone-800 transition-all hover:-translate-y-1 text-center">
              批發/創業加盟
            </a>
            <a href="#channels" className="px-8 py-4 bg-yellow-500 text-white font-bold rounded-xl shadow-lg hover:bg-yellow-600 transition-all hover:-translate-y-1 text-center">
              立即購買/入群
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;