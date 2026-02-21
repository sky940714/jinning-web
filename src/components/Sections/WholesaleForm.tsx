import React, { useState } from 'react';
import { Check } from 'lucide-react';

const WholesaleForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    alert('洽詢表單已收到！我們將儘速由專人與您聯繫洽談批發細節。');
  };

  return (
    <section id="wholesale" className="py-24 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <h2 className="text-4xl font-bold mb-6">開始您的<span className="text-yellow-600">鮮檸事業</span></h2>
            <p className="text-stone-600 text-lg mb-8">留下資訊，我們將由專人為您提供完整報價與創業諮詢。</p>
            <ul className="space-y-4">
              {['SGS 檢驗合格鮮原汁', '全台低溫配送系統', '免費配方教學與諮詢'].map(item => (
                <li key={item} className="flex items-center gap-3 font-bold">
                  <Check className="text-yellow-600" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-[3rem] p-10 shadow-2xl reveal-right">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="您的姓名" className="w-full px-4 py-3 rounded-xl border border-stone-100 bg-stone-50 focus:ring-2 focus:ring-yellow-400 outline-none" required />
                <input type="tel" placeholder="聯絡電話" className="w-full px-4 py-3 rounded-xl border border-stone-100 bg-stone-50 focus:ring-2 focus:ring-yellow-400 outline-none" required />
              </div>
              <input type="text" placeholder="店名或欲經營地區" className="w-full px-4 py-3 rounded-xl border border-stone-100 bg-stone-50 focus:ring-2 focus:ring-yellow-400 outline-none" />
              <select className="w-full px-4 py-3 rounded-xl border border-stone-100 bg-stone-50 focus:ring-2 focus:ring-yellow-400 outline-none">
                <option>原汁/食材批發需求</option>
                <option>攤車加盟諮詢</option>
                <option>其它合作建議</option>
              </select>
              <button type="submit" className="w-full py-4 bg-yellow-500 text-white font-bold rounded-xl hover:bg-yellow-600 transition shadow-lg">
                {submitted ? '已提交' : '提交洽詢單'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WholesaleForm;