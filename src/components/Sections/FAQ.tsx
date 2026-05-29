import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "批發的最低訂購量 (MOQ) 是多少？",
    answer: "我們支持創業初期的小量採購，目前批發最低$2000起訂，全台低溫宅配到府。"
  },
  {
    question: "保存期限與方式為何？",
    answer: "由於不添加防腐劑，需低溫冷凍保存，冷凍可保存30天，解凍後建議2天內使用完畢。"
  },
  {
    question: "可以提供創業攤車的視覺設計嗎？",
    answer: "可以！我們針對加盟或長期批發夥伴提供專屬的品牌 Logo 使用權、海報樣版以及攤車佈置建議。"
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl font-bold mb-4">批發常見問題</h2>
          <p className="text-stone-500">在您聯絡我們之前，也許這裡有答案</p>
        </div>
        <div className="space-y-4 reveal delay-100">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-stone-100">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center py-4 text-left font-bold text-stone-700"
              >
                {item.question}
                <ChevronDown className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 pb-4' : 'max-h-0'}`}>
                <p className="text-stone-500">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;