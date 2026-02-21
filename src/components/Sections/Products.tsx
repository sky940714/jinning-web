import React from 'react';

// 1. 引入你放在 assets 資料夾中的圖片
// (如果你的副檔名是 .png 或 .webp，請記得更改)
import imgKumquat from '../../assets/images/kumquat-lemon.jpg';
import imgCondensed from '../../assets/images/condensed-lemon.jpg';
import imgBlackTea from '../../assets/images/black-tea.jpg';
import imgWinterMelon from '../../assets/images/winter-melon.jpg';

const products = [
  {
    title: '招牌金桔檸檬',
    desc: '屏東產地直送鮮榨檸檬，搭配新鮮金桔，酸甜交織的黃金比例，解膩首選。',
    tag: '招牌必點',
    img: imgKumquat // 2. 使用上方 import 進來的變數
  },
  {
    title: '熱銷煉乳檸檬',
    desc: '醇厚煉乳完美中和了鮮檸的酸度，口感滑順濃郁，喝過就愛上的絕妙搭配。',
    tag: '獨家熱銷',
    img: imgCondensed
  },
  {
    title: '古早味現熬紅茶',
    desc: '嚴選茶葉每日費時手工熬煮，搭配精心慢熬的糖水，保留最純粹的古早茶香。',
    tag: '經典回甘',
    img: imgBlackTea
  },
  {
    title: '現熬手工冬瓜茶',
    desc: '遵循傳統工法慢火熬製，喝得到冬瓜的天然清甜，清涼退火的最佳良伴。',
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
        
        {/* 注意這裡！我把原本的 md:grid-cols-3 改成了 4 排版，這樣 4 個商品才不會有一個掉到下一行 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item, idx) => (
            <div key={item.title} className={`bg-white rounded-3xl overflow-hidden shadow-sm hover-lift reveal delay-${(idx + 1) * 100}`}>
              <div className="h-64 overflow-hidden bg-stone-100 flex items-center justify-center">
                {/* 圖片標籤，如果圖片還沒放進去，可以先顯示文字備用 */}
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover" 
                  onError={(e) => {
                    // 如果找不到圖片，顯示一個灰底的備用佔位圖
                    e.currentTarget.src = 'https://via.placeholder.com/800x800?text=Jin+Ning';
                  }}
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-stone-500 text-sm mb-6 leading-relaxed">{item.desc}</p>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.tag.includes('招牌') || item.tag.includes('熱銷') ? 'bg-yellow-100 text-yellow-700' : 'bg-stone-100 text-stone-600'}`}>
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;