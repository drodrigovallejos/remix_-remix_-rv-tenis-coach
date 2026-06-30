import { motion } from 'motion/react';
import { Stethoscope, ExternalLink } from 'lucide-react';

export default function SportsDentist() {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-brand-accent font-bold tracking-[0.2em] uppercase text-[10px] mb-3">CONOCE MÁS</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 leading-[1.1]">
              <span className="text-brand-accent">🎾 Profesor de Tenis</span> <br className="hidden md:block" />
              <span className="text-white">y Odontólogo Deportivo 🦷</span>
            </h3>
            
            <div className="space-y-6 text-lg text-blue-100 font-light mb-8">
              <p>
                Creo en el desarrollo integral del deportista, tanto dentro como fuera de la cancha. Por eso, además de mi trabajo como profesor de tenis, también me desempeño como <strong className="text-white font-bold">odontólogo deportivo</strong>, ayudando a deportistas a optimizar su salud oral y su rendimiento.
              </p>
              <p className="border-l-2 border-brand-accent pl-4 italic">
                Como beneficio exclusivo, los alumnos de mis programas de tenis acceden a valores preferenciales en las atenciones odontológicas.
              </p>
            </div>

            <a 
              href="https://oddep.cl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-accent text-brand-dark px-8 py-4 font-black uppercase tracking-wider hover:bg-white transition-colors duration-300 group"
            >
              🦷 Más información en oddep.cl
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative"
          >
            <div className="aspect-square bg-gradient-to-br from-brand-accent/20 to-transparent p-1 relative z-10">
              <div className="w-full h-full border border-brand-accent/30 relative overflow-hidden group">
                <img 
                  src="/odontologo.jpg"
                  onError={(e) => {
                    // Fallback in case they haven't uploaded it yet
                    e.currentTarget.src = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop";
                    e.currentTarget.className = "w-full h-full object-cover opacity-20 grayscale mix-blend-overlay";
                  }}
                  alt="Profesor y odontólogo" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-brand-blue/30 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute bottom-6 right-6 text-brand-accent/60 font-black italic text-6xl tracking-tighter drop-shadow-lg">ODDEP</div>
              </div>
            </div>
            
            {/* Decorative block */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-brand-accent z-0"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
