import { motion } from 'motion/react';
import { ShieldPlus, ShoppingBag, Plus } from 'lucide-react';

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-brand-blue relative overflow-hidden text-white border-y border-white/10">
      <div className="absolute left-0 top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-left mb-16 max-w-3xl">
          <h2 className="text-brand-accent font-bold tracking-[0.2em] uppercase text-[10px] mb-3">PROGRAMA DE BENEFICIOS</h2>
          <h3 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter mb-6">
            SER PARTE DEL EQUIPO TIENE <span className="text-brand-accent">PREMIO</span>
          </h3>
          <p className="text-lg text-blue-100 font-light italic border-l-2 border-brand-accent pl-4">
            Cuidamos tu salud integral y te brindamos acceso al mejor equipamiento deportivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative items-center">
          
          {/* Plus Sign in middle for Desktop */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-brand-accent items-center justify-center shadow-[0_0_20px_rgba(212,255,0,0.4)] z-20 text-brand-dark">
            <Plus size={32} strokeWidth={3} />
          </div>

          {/* Equipamiento Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 lg:p-12 border border-brand-accent relative z-10"
          >
            <div className="bg-brand-accent/10 border border-brand-accent w-16 h-16 flex items-center justify-center mb-8">
              <ShoppingBag className="w-8 h-8 text-brand-accent" />
            </div>
            <h4 className="text-2xl font-black italic uppercase text-white mb-6">Equipamiento Exclusivo</h4>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-4 p-4 border-l-2 border-brand-accent bg-brand-dark/30">
                <span className="text-2xl font-black italic text-brand-accent shrink-0 w-16">-20%</span>
                <p className="text-blue-100 font-light text-sm pt-1">Descuento en productos <strong className="text-white">YONEX</strong> (Raquetas, grip, mochilas, zapatillas, textiles y más).</p>
              </li>
              <li className="flex items-start gap-4 p-4 border-l-2 border-brand-accent bg-brand-dark/30">
                <span className="text-2xl font-black italic text-brand-accent shrink-0 w-16">-15%</span>
                <p className="text-blue-100 font-light text-sm pt-1">En toda la tienda <strong className="text-white">Sporting Brands</strong> (Yonex y Tilki) exclusivamente mientras haya torneos en curso.</p>
              </li>
              <li className="flex items-center gap-3 text-white text-sm font-bold uppercase tracking-wide mt-6 border-t border-white/10 pt-6">
                <div className="w-2 h-2 bg-brand-accent"></div>
                Derecho a participar en torneos Yonex Puente Alto.
              </li>
            </ul>
          </motion.div>

          {/* Salud Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 p-8 lg:p-12 border border-white/20 relative z-10"
          >
            <div className="bg-white/10 border border-white/20 w-16 h-16 flex items-center justify-center mb-8">
              <ShieldPlus className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-black italic uppercase text-white mb-6">Salud y Prevención</h4>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-4 p-4 border-l-2 border-white/30 bg-brand-dark/30">
                <span className="text-sm font-black italic text-brand-accent uppercase tracking-widest pt-1 shrink-0 w-16">Gratis</span>
                <p className="text-blue-100 font-light text-sm">Diagnóstico odontológico con enfoque deportivo gratuito (Incluye consejería de dieta e higiene).</p>
              </li>
              <li className="flex items-start gap-4 p-4 border-l-2 border-white/30 bg-brand-dark/30">
                <span className="text-2xl font-black italic text-brand-accent shrink-0 w-16">-20%</span>
                <p className="text-blue-100 font-light text-sm pt-1">Descuento en tratamientos odontológicos integrales en clínica asociada.</p>
              </li>
              <li className="flex items-center gap-3 text-white text-sm font-bold uppercase tracking-wide mt-6 border-t border-white/10 pt-6">
                <div className="w-2 h-2 bg-white"></div>
                Convenios con nutricionista, psicólogo y kinesiólogo.
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
