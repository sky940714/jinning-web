import React from 'react';
import { ShoppingBag, Users } from 'lucide-react';

const Channels = () => {
  return (
    <section id="channels" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-stone-800">零售購買管道</h2>
          <p className="text-stone-500">想直接品嚐？這裡找得到我們</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-[2.5rem] p-10 hover-lift reveal-left border border-stone-100">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mx-auto mb-6">
              <ShoppingBag />
            </div>
            <h3 className="text-xl font-bold mb-4">Uber Eats 外送</h3>
            <a href="#" className="inline-block px-8 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition">立即點餐</a>
          </div>
          <div className="bg-white rounded-[2.5rem] p-10 hover-lift reveal-right border border-stone-100">
            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 mx-auto mb-6">
              <Users />
            </div>
            <h3 className="text-xl font-bold mb-4">LINE 揪團社群</h3>
            <a href="#" className="inline-block px-8 py-3 bg-yellow-500 text-white font-bold rounded-full hover:bg-yellow-600 transition">加入社群</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Channels;