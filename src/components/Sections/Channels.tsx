import { ShoppingBag, MessageCircle } from 'lucide-react';

const Channels = () => {
  return (
    <section id="channels" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="reveal mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-stone-800">購買與洽談管道</h2>
          <p className="text-stone-500">無論是一杯解渴，還是批發創業，我們都在這裡</p>
        </div>

        {/* --- 線上與批發區塊 --- */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Uber Eats 零售卡片 */}
          <div className="bg-white rounded-[2.5rem] p-10 hover-lift reveal-left border border-stone-100 flex flex-col h-full">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mx-auto mb-6 shrink-0">
              <ShoppingBag />
            </div>
            <h3 className="text-xl font-bold mb-3">Uber Eats 外送</h3>
            <p className="text-stone-500 mb-8 flex-grow">不出門也能享受新鮮手作的酸甜滋味，周邊區域快速送達。</p>
            {/* 這裡未來可以換成你的 Uber Eats 專屬連結 */}
            <a href="https://www.ubereats.com/tw/store/%E9%87%91%E6%AA%B8%E6%9C%AC%E8%88%96/FyS407c6WiKSigO9YOR_oA?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMiVFNCVCOCU4OSVFNiVCMCU5MSVFOCVCNyVBRjEwJUU4JTk5JTlGNiUyMCVFNiVBOCU5MyUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkVrWTJJT2Fva3l3Z1RtOHVJREV3TENCVFlXNXRhVzRnVW1Rc0lFeDFlbWh2ZFNCRWFYTjBjbWxqZEN3Z1RtVjNJRlJoYVhCbGFTQkRhWFI1TENCVVlXbDNZVzRnTWpRM0lpRWFId29XQ2hRS0Vna25sbUx2enFoQ05CSGhDWTNqZFJkU1p4SUZOaURtcUpNJTIyJTJDJTIycmVmZXJlbmNlVHlwZSUyMiUzQSUyMmdvb2dsZV9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTI1LjA4MjI5ODI5OTk5OTk5OCUyQyUyMmxvbmdpdHVkZSUyMiUzQTEyMS40NzYxMjQzOTk5OTk5OSU3RA%3D%3D" className="inline-block px-8 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition w-full sm:w-auto mx-auto">
              立即點餐
            </a>
          </div>

          {/* 官方 LINE 批發/訂購卡片 */}
          <div className="bg-white rounded-[2.5rem] p-10 hover-lift reveal-right border border-yellow-200 shadow-md relative overflow-hidden flex flex-col h-full">
            {/* 卡片右上角的小裝飾 */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50 rounded-bl-full -z-10"></div>
            
            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 mx-auto mb-6 shrink-0">
              <MessageCircle />
            </div>
            <h3 className="text-xl font-bold mb-3">官方 LINE 訂購與批發</h3>
            
            <div className="text-stone-500 mb-8 flex-grow space-y-1">
              <p className="font-medium text-stone-700">【 5瓶就送 10瓶起批 】</p>
              <p>全台低溫配送 / 專人送到府</p>
              <p className="text-sm text-stone-400 pt-2">零售團購、批發洽談、創業加盟皆可諮詢</p>
            </div>

            {/* LINE 連結 (開新分頁) */}
            <a 
              href="https://lin.ee/7YDiEVH" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block px-8 py-3 bg-yellow-500 text-white font-bold rounded-full hover:bg-yellow-600 transition shadow-md hover:-translate-y-1 w-full sm:w-auto mx-auto"
            >
              加入 LINE 讓你每天來上一杯
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Channels;