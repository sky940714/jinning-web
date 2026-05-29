import React from 'react';

// 1. 引入放在 assets 資料夾中的圖片
import imgKumquat from '../../assets/images/kumquat-lemon.jpg';
import imgCondensed from '../../assets/images/condensed-lemon.jpg';
import imgBlackTea from '../../assets/images/black-tea.jpg';
import imgWinterMelon from '../../assets/images/winter-melon.jpg';

const products = [
  {
    title: '招牌金桔檸檬',
    desc: '屏東產地直送鮮榨檸檬，搭配新鮮金桔，酸甜交織的黃金比例，解膩首選。',
    tag: '招牌必點',
    img: imgKumquat
  },
  {
    title: '熱銷煉乳檸檬',
    desc: '醇厚煉乳完美中和了鮮檸的酸度，口感滑順濃郁，喝過就愛上的絕妙搭配。',
    tag: '獨家熱銷',
    img: imgCondensed
  },
  {
    title: '風味印尼拉茶',
    desc: '選用印尼高品質茶葉，經過特殊烘焙工藝，茶香濃郁帶有微微焦糖香氣，回甘持久。',
    tag: '經典回甘',
    img: imgBlackTea
  },
  {
    title: '凍頂檸檬烏龍',
    desc: '選用高山茶葉，經過特殊工法處理，茶香清雅，檸檬的酸甜在口中層層展開。',
    tag: '懷舊滋味',
    img: imgWinterMelon
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl font-bold mb-4 text-stone-800">人氣必點</h2>
          <p className="text-stone-500">職人堅持的每日現熬，都是我們的自信之作</p>
        </div>
        
        {/* RWD 網格佈局：手機預設 1 欄、平板 2 欄、桌面 4 欄 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item, idx) => (
            <div 
              key={item.title} 
              className={`bg-white rounded-3xl overflow-hidden shadow-sm hover-lift reveal delay-${(idx + 1) * 100} flex flex-col h-full`}
            >
              {/* 圖片包裹層：加上 p-4 緩衝，維持固定 h-64 高度 */}
              <div className="h-64 w-full bg-stone-100 flex items-center justify-center shrink-0 p-4">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  /* 💡 關鍵修復：
                    1. object-contain 確保整支瓶子完整顯現，絕不裁切
                    2. mix-blend-multiply 讓圖片原本的去背底色與卡片完美融合
                  */
                  className="w-full h-full object-contain mix-blend-multiply" 
                  onError={(e) => {
                    // 萬一圖片載入失敗的質感防禦佔位
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="text-stone-400 text-sm font-medium tracking-wider">金檸本舖 鮮選</div>`;
                    }
                  }}
                />
              </div>

              {/* 文字內容層：使用 flex 排版確保整體高度與標籤對齊 */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-stone-800">{item.title}</h3>
                <p className="text-stone-500 text-sm mb-6 leading-relaxed flex-grow">
                  {item.desc}
                </p>
                <div className="mt-auto">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                    item.tag.includes('招牌') || item.tag.includes('熱銷') 
                      ? 'bg-yellow-100 text-yellow-700' 
                      : 'bg-stone-100 text-stone-600'
                  }`}>
                    {item.tag}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;