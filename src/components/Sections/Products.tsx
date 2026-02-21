import React from 'react';

const products = [
  {
    title: '招牌翡翠檸檬',
    desc: '嚴選特級綠茶搭配鮮擠檸檬，黃金比例調製，消暑首選。',
    tag: '批發冠軍',
    img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: '職人手工檸檬塔',
    desc: '酥脆塔殼填入濃郁酸爽的檸檬內餡，每一口都是驚喜。',
    tag: '午茶必備',
    img: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: '蜂蜜檸檬氣泡飲',
    desc: '純天然蜂蜜與微氣泡的完美結合，清新感再升級。',
    tag: '新品推薦',
    img: 'https://images.unsplash.com/photo-1543508282-5c1f427f023f?auto=format&fit=crop&q=80&w=800'
  }
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl font-bold mb-4 text-stone-800">人氣必點</h2>
          <p className="text-stone-500">無論批發或零售，這些都是我們的自信之作</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((item, idx) => (
            <div key={item.title} className={`bg-white rounded-3xl overflow-hidden shadow-sm hover-lift reveal delay-${(idx + 1) * 100}`}>
              <div className="h-64 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-stone-500 text-sm mb-6">{item.desc}</p>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.tag === '批發冠軍' ? 'bg-yellow-100 text-yellow-700' : 'bg-stone-100 text-stone-600'}`}>
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