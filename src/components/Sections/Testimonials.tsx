import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  // 將資料抽離成陣列，未來要新增或修改評價只要改這裡就好
  const testimonials = [
    {
      quote: "以前每天提早兩小時起床洗檸檬、榨汁，手還會起疹子。現在直接叫金檸本舖的原汁，10瓶就能批發，完全沒有庫存壓力。品質比自己榨的還穩定，省下的時間拿來備其他料，客單價也提高了！",
      name: "阿信老闆",
      title: "人氣胖卡餐車主",
      // 這裡先幫你放一張具有職人感的圖庫假照片，未來有真實客戶可以替換網址
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=150&q=80",
      delay: "reveal-left"
    },
    {
      quote: "遇到夏天檸檬大漲價真的很痛，利潤都被吃掉。跟金檸本舖配合後，成本完全可以精準抓出來。重點是屏東直送的香氣真的不一樣，我們攤位換配方後，西西里咖啡跟檸檬紅的銷量直接翻倍。",
      name: "陳店長",
      title: "獨立市集咖啡攤",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=150&q=80",
      delay: "reveal-right"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-stone-800">餐車與店家的真實回饋</h2>
          <p className="text-stone-500">不再為了榨汁煩惱，聽聽他們如何提升效率與業績</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className={`p-8 md:p-10 bg-stone-50 rounded-[2.5rem] ${item.delay} hover-lift border border-stone-100 relative`}>
              {/* 五星好評視覺 */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <Quote className="text-yellow-200 w-12 h-12 absolute top-8 right-8 opacity-50" />
              
              <p className="text-stone-600 mb-8 font-medium leading-relaxed relative z-10">
                「{item.quote}」
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <p className="font-bold text-stone-800 text-lg">{item.name}</p>
                  <p className="text-sm text-stone-500">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;