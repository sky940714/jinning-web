
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl font-bold mb-4">合作夥伴怎麼說</h2>
          <p className="text-stone-500">聽聽加入金檸本舖的創業故事</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-stone-50 rounded-[2rem] reveal-left italic">
            <Quote className="text-yellow-500 mb-4 fill-current" />
            <p className="text-stone-600 mb-6 font-medium">「原本擔心創業門檻很高，但金檸本舖的原汁品質非常穩定，配送也很快。現在我自己的攤車每天平均能賣出 150 杯以上！」</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-200 rounded-full"></div>
              <div>
                <p className="font-bold text-stone-800">王先生</p>
                <p className="text-sm text-stone-400">台北加盟攤車主</p>
              </div>
            </div>
          </div>
          <div className="p-8 bg-stone-50 rounded-[2rem] reveal-right italic">
            <Quote className="text-yellow-500 mb-4 fill-current" />
            <p className="text-stone-600 mb-6 font-medium">「我們餐廳以前都自己榨汁，成本高又耗時。換了金檸本舖的產地直送原汁後，品質更穩定，客人的評價也更好了。」</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-stone-200 rounded-full"></div>
              <div>
                <p className="font-bold text-stone-800">李小姐</p>
                <p className="text-sm text-stone-400">連鎖早午餐店主</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;