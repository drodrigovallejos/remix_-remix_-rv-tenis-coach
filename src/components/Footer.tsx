import { Phone, MapPin, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-brand-dark text-white pt-24 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16">
          
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 group mb-6">
              <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-brand-blue font-black text-xl italic pr-[2px]">RAV</span>
              </div>
              <div className="leading-none text-left">
                <span className="block text-xl font-bold tracking-tighter text-white">RODRIGO VALLEJOS</span>
                <span className="text-[10px] text-brand-accent font-bold tracking-[0.2em] uppercase">Tenis Coach</span>
              </div>
            </a>
            <p className="text-blue-100 max-w-md text-lg leading-relaxed mb-8 font-light italic">
              "Entrenar, competir y crecer: ese es el verdadero triunfo." Un enfoque integral para llevar tu tenis al siguiente nivel.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-black italic uppercase mb-6 tracking-wide">Contacto Directo</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+56981879060" className="flex items-center gap-3 text-blue-100 hover:text-brand-accent transition-colors">
                  <div className="w-10 h-10 border border-white/20 flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <span className="text-lg font-bold">+56 9 8187 9060</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-blue-100 hover:text-brand-accent transition-colors">
                  <div className="w-10 h-10 border border-white/20 flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <span className="font-bold">Amador Donoso<br/><span className="text-xs font-light opacity-70">Puente Alto</span></span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black italic uppercase mb-6 tracking-wide">Accesos Rápidos</h4>
            <ul className="space-y-3 font-medium text-sm">
              <li><a href="/#sobre-mi" className="text-blue-100 uppercase hover:text-brand-accent transition-colors">Sobre el Coach</a></li>
              <li><a href="/#metodologia" className="text-blue-100 uppercase hover:text-brand-accent transition-colors">Metodología</a></li>
              <li><a href="/#programas" className="text-blue-100 uppercase hover:text-brand-accent transition-colors">Todos los Programas</a></li>
              <li><a href="/#liga" className="text-blue-100 uppercase hover:text-brand-accent transition-colors">Liga Competitiva</a></li>
              <li><a href="/#beneficios" className="text-blue-100 uppercase hover:text-brand-accent transition-colors">Beneficios Exclusivos</a></li>
            </ul>
          </div>
        </div>

        {/* Floating Contact CTA Mobile */}
        <div className="fixed bottom-6 right-6 z-50 md:hidden">
          <a href="tel:+56981879060" className="w-14 h-14 bg-brand-accent text-brand-dark flex items-center justify-center shadow-[0_0_20px_rgba(212,255,0,0.4)]">
            <Phone size={24} className="fill-current" />
          </a>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-brand-accent text-brand-dark px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-8 border-t-4 border-brand-dark w-full mt-auto">
        <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12">
          <div className="flex flex-col">
            <span className="text-3xl font-black italic leading-none">15+</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">Años Experiencia</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-black italic leading-none">500+</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">Jugadores</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-black italic leading-none">12</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">Títulos Coach</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="text-center sm:text-right">
            <span className="block text-[10px] font-bold opacity-70 uppercase tracking-widest">Síguenos</span>
            <span className="text-base font-black italic">@rav.tenis</span>
          </div>
          <div className="hidden sm:block h-10 w-[2px] bg-brand-dark/20"></div>
          <span className="text-xs font-black uppercase tracking-tighter italic">#TransformandoElTenis</span>
          <Link to="/admin" className="text-[10px] uppercase font-bold opacity-30 hover:opacity-100 transition-opacity ml-4">
            Gestión
          </Link>
        </div>
      </div>
    </footer>
  );
}
