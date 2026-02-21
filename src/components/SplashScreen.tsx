import { useState, useEffect } from 'react';
// 1. 修改圖片檔名為 logo-preview.png
import logoImg from '../assets/images/logo-preview.png';

const SplashScreen = () => {
  const [stage, setStage] = useState('entering');

  useEffect(() => {
    // 掛載後立即啟動進場動畫
    const timer = setTimeout(() => setStage('visible'), 100);
    return () => clearTimeout(timer);
  }, []);

  // 處理點擊事件：切換至退場動畫
  const handleEnter = () => {
    setStage('leaving');
    // 動畫完成後徹底移除元件 (500ms 為 opacity 轉換時間)
    setTimeout(() => setStage('hidden'), 500);
  };

  if (stage === 'hidden') return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-stone-50 flex items-center justify-center transition-opacity duration-500 
      ${stage === 'leaving' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Logo 浮現與放大動畫 */}
        <div 
          className={`transition-all duration-1000 ease-out transform flex flex-col items-center
          ${stage === 'entering' ? 'opacity-0 scale-75 translate-y-8' : 'opacity-100 scale-100 translate-y-0'}`}
        >
          <img 
            src={logoImg} 
            alt="金檸本舖" 
            className="w-48 md:w-64 drop-shadow-2xl mb-4" 
          />
          
          {/* 2. Logo 下方的品牌文字 */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold tracking-[0.2em] text-yellow-700">金檸本舖</h1>
            <p className="text-stone-500 tracking-[0.1em] text-sm md:text-base font-medium">
              屏東在地鮮選 · 職人手作溫度
            </p>
          </div>
        </div>

        {/* 3. 點擊進入的按鈕 (在 Logo 浮現後出現) */}
        <button
          onClick={handleEnter}
          className={`mt-4 px-10 py-3 border-2 border-yellow-600 text-yellow-700 font-bold rounded-full 
          hover:bg-yellow-600 hover:text-white transition-all duration-500 tracking-widest
          ${stage === 'visible' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '800ms' }} // 延遲出現，讓使用者先看完 Logo
        >
          進入官網
        </button>
      </div>
    </div>
  );
};

export default SplashScreen;