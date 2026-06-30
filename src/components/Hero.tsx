import { motion } from 'motion/react';
import { ArrowRight, Trophy } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-18 md:pt-18 pb-16 px-4 md:px-12 overflow-hidden bg-brand-blue">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-transparent to-brand-blue z-10 mix-blend-multiply"></div>
        <video 
          ref={(el) => {
            if (el) {
              el.muted = true;
              el.play().catch(() => {});
            }
          }}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="relative z-10 object-cover object-[center_top] w-full h-full grayscale contrast-125 opacity-50 mix-blend-overlay"
          onError={(e) => {
            (e.target as HTMLVideoElement).style.display = 'none';
          }}
        >
          <source src="/hero-rodrigo.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between mt-8 md:mt-10">
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-display font-black italic uppercase leading-[0.85] tracking-tighter text-white mb-6"
          >
            Eleva tu nivel.<br/>
            <span className="text-brand-accent">Domina la cancha.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-100 max-w-lg mb-8 leading-relaxed font-light italic"
          >
            Programa integral incorporando equipo de trabajo con un enfoque técnico, físico y mental. Clases para todos los niveles y edades.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#contacto" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent text-brand-dark font-black uppercase text-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(204,255,0,0.3)]">
              Reserva tu Clase
              <ArrowRight size={16} />
            </a>
            <a href="#programas" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white font-black uppercase text-sm hover:bg-white hover:text-brand-dark transition-all text-white">
              Ver Programas
            </a>
          </motion.div>
        </div>

        {/* Right Side Graphic Elements */}
        <div className="hidden lg:flex relative flex-col gap-6 mr-12 mt-12">
          <div className="w-48 h-48 rounded-full border border-brand-accent p-2 flex items-center justify-center opacity-30">
            <div className="w-full h-full rounded-full border-dashed border-2 border-brand-accent animate-[spin_20s_linear_infinite]"></div>
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col items-center">
             <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-brand-accent to-transparent mb-4"></div>
             <span className="[writing-mode:vertical-rl] text-[10px] tracking-[0.5em] text-brand-accent opacity-60 uppercase">Pro Player Focus</span>
             <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-brand-accent to-transparent mt-4"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs uppercase tracking-widest">Descubre Más</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}
