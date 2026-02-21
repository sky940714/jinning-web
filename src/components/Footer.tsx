import { Citrus, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-stone-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-yellow-400 p-2 rounded-lg"><Citrus className="text-white" /></div>
              <span className="text-2xl font-bold tracking-wider">金檸本舖</span>
            </div>
            <p className="text-stone-400">屏東在地鮮鮮，職人手壓溫度。<br />為您的生活與事業注入清新能量。</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-yellow-500">聯絡資訊</h4>
            <ul className="space-y-3 text-stone-400">
              <li>(08) 777-6666</li>
              <li>屏東縣萬丹鄉檸檬路 88 號</li>
              <li>jinning@lemon.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-yellow-500">追蹤我們</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-500 transition"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-500 transition"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="h-64 rounded-3xl overflow-hidden mb-12 bg-stone-800 flex items-center justify-center text-stone-600 border border-white/5">
          <p>📍 此處可內嵌 Google 商家地圖</p>
        </div>
        
        <div className="text-center pt-8 border-t border-white/5 text-stone-600 text-sm">
          © 2026 金檸本舖 Jin Ning Ben Pu. 版權所有.
        </div>
      </div>
    </footer>
  );
};

export default Footer;