import React, { useState, useRef } from 'react';
import { Check } from 'lucide-react';
// 1. 引入 emailjs 套件
import emailjs from '@emailjs/browser';

const WholesaleForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // 2. 建立一個 form 的參照，用來讓 EmailJS 讀取表單內容
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;
    setIsLoading(true);

    // 3. 呼叫 EmailJS 發送信件 (已填入你的金鑰)
    emailjs.sendForm(
      'service_x1knze6',    // 你的 Service ID
      'template_snnjfme',   // 你的 Template ID
      form.current,
      'tAjtIQQ9KZO_9oyiD'   // 注意！這裡需要換成你在 Account 頁面拿到的 Public Key！
    )
    .then((result) => {
        console.log('Success:', result.text);
        setSubmitted(true);
        setIsLoading(false);
        
        // 4. 成功送出後的跳轉邏輯
        alert('洽詢表單已收到！即將為您跳轉至官方 LINE，請點選「加入好友」由專人為您服務。');
        window.location.href = 'https://lin.ee/7YDiEVH'; // 跳轉到你的官方 LINE
    }, (error) => {
        console.log('Failed...', error.text);
        setIsLoading(false);
        
        // 即使發送失敗（例如網路問題），也把客人引導去加 LINE，確保不漏接客戶
        alert('系統稍微繁忙，請直接加入我們的官方 LINE 與我們聯繫！');
        window.location.href = 'https://lin.ee/7YDiEVH';
    });
  };

  return (
    <section id="wholesale" className="py-24 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <h2 className="text-4xl font-bold mb-6">開始您的<span className="text-yellow-600">鮮檸事業</span></h2>
            <p className="text-stone-600 text-lg mb-8">留下資訊，我們將由專人為您提供完整報價與創業諮詢。</p>
            <ul className="space-y-4">
              {['檢驗合格鮮原汁', '全台低溫配送系統', '免費教學與諮詢'].map(item => (
                <li key={item} className="flex items-center gap-3 font-bold">
                  <Check className="text-yellow-600" /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-[3rem] p-10 shadow-2xl reveal-right">
            {/* 加上 ref 屬性 */}
            <form ref={form} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                {/* 加上 name 屬性，EmailJS 才能認得這些欄位 */}
                <input type="text" name="user_name" placeholder="您的姓名" className="w-full px-4 py-3 rounded-xl border border-stone-100 bg-stone-50 focus:ring-2 focus:ring-yellow-400 outline-none" required />
                <input type="tel" name="user_phone" placeholder="聯絡電話" className="w-full px-4 py-3 rounded-xl border border-stone-100 bg-stone-50 focus:ring-2 focus:ring-yellow-400 outline-none" required />
              </div>
              
              <input type="text" name="store_location" placeholder="店名或欲經營地區" className="w-full px-4 py-3 rounded-xl border border-stone-100 bg-stone-50 focus:ring-2 focus:ring-yellow-400 outline-none" />
              
              <select name="inquiry_type" className="w-full px-4 py-3 rounded-xl border border-stone-100 bg-stone-50 focus:ring-2 focus:ring-yellow-400 outline-none">
                <option value="原汁/食材批發需求">原汁/食材批發需求</option>
                <option value="攤車加盟諮詢">攤車加盟諮詢</option>
                <option value="其它合作建議">其它合作建議</option>
              </select>
              
              {/* 加上 loading 狀態防止重複點擊 */}
              <button type="submit" disabled={isLoading || submitted} className="w-full py-4 bg-yellow-500 text-white font-bold rounded-xl hover:bg-yellow-600 transition shadow-lg disabled:bg-stone-300 disabled:cursor-not-allowed">
                {isLoading ? '傳送中...' : submitted ? '已提交，準備跳轉...' : '提交洽詢單'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WholesaleForm;