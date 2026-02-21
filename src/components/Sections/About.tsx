import imgAboutBrand from '../../assets/images/brand-story-image.jpg';

const About = () => {
  const stats = [
    { label: '合作攤車', value: '50+' },
    { label: '年銷杯數', value: '100k+' },
    { label: '屏東鮮採', value: '100%' },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative reveal-left">
            {/* 這裡把原本的網址換成你 import 的變數 imgAboutBrand，並加上排版限制 */}
            <img 
              src={imgAboutBrand} 
              alt="關於金檸本舖" 
              className="rounded-3xl shadow-2xl relative z-10 object-cover h-[400px] w-full"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-100 rounded-full -z-10"></div>
          </div>
          <div className="reveal-right">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-12 h-1 bg-yellow-500"></span>
              關於金檸本舖
            </h2>
            <p className="text-stone-600 mb-6 leading-relaxed">
              「金檸本舖」創立於 2018 年，源於對家鄉屏東果農的支持。我們發現最好的檸檬不應該只被外銷，更應該在台灣本地以最好的方式呈現給消費者。
            </p>
            <p className="text-stone-600 mb-8 font-medium">我們堅持「三不」原則：不添加人工香精、不使用濃縮原汁、不妥協產品品質。</p>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              {stats.map((stat) => (
                <div key={stat.label} className="p-4 bg-stone-50 rounded-2xl">
                  <div className="text-2xl font-bold text-yellow-600">{stat.value}</div>
                  <div className="text-xs text-stone-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;