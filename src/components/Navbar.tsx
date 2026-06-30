import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre Mí', href: '/#sobre-mi' },
    { name: 'Metodología', href: '/#metodologia' },
    { name: 'Programas', href: '/#programas' },
    { name: 'Liga Competitiva', href: '/#liga' },
    { name: 'Beneficios', href: '/#beneficios' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-blue/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-brand-blue font-black text-base italic pr-[2px]">RAV</span>
              </div>
              <div className="leading-none text-left">
                <span className="block text-lg font-bold tracking-tighter text-white">RODRIGO VALLEJOS</span>
                <span className="text-[10px] text-brand-accent font-bold tracking-[0.2em] uppercase">Tenis Coach</span>
              </div>
            </a>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center text-sm font-semibold tracking-wide">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-white hover:text-brand-accent transition-colors uppercase">
                {link.name}
              </a>
            ))}
            <a href="https://wa.me/56981879060" target="_blank" rel="noopener noreferrer" className="text-brand-accent border-b-2 border-brand-accent uppercase hover:text-white hover:border-white transition-colors pb-0.5 flex items-center gap-2">
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white hover:text-brand-accent">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-blue pb-4 px-4 sm:px-6 shadow-xl absolute w-full left-0 top-full">
          <div className="flex flex-col space-y-4 pt-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-brand-accent transition-colors font-medium text-lg"
              >
                {link.name}
              </a>
            ))}
            <a href="https://wa.me/56981879060" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="bg-brand-accent text-brand-dark px-5 py-3 rounded-md font-bold text-center mt-2 flex items-center justify-center gap-2">
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
