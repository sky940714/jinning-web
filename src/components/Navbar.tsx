import React, { useState, useEffect } from 'react';
import { Citrus, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '品牌故事', href: '#about' },
    { name: '人氣商品', href: '#products' },
    { name: '購買管道', href: '#channels' },
    { name: '批發/創業', href: '#wholesale', highlight: true },
    { name: '聯絡洽談', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-1' : 'bg-white/80 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="bg-yellow-400 p-2 rounded-lg group-hover:rotate-12 transition-transform">
              <Citrus className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-wider text-yellow-700">金檸本舖</span>
          </div>
          
          <div className="hidden lg:flex space-x-8 font-medium">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`hover:text-yellow-700 transition relative after:content-[''] after:absolute after:width-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-yellow-700 after:transition-all hover:after:w-full ${link.highlight ? 'text-yellow-600 font-bold' : ''}`}>
                {link.name}
              </a>
            ))}
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-6 space-y-4 shadow-lg animate-in slide-in-from-top">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className={`block font-medium py-2 px-4 rounded-lg ${link.highlight ? 'bg-yellow-400 text-white' : 'hover:bg-yellow-50'}`}>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;