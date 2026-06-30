import { motion } from 'motion/react';
import { Calendar, Users, Trophy, Target } from 'lucide-react';

export default function League() {
  return (
    <section id="liga" className="py-24 bg-brand-dark text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/50 skew-x-[-12deg] translate-x-32 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-brand-accent/5 skew-x-[12deg] translate-x-[-32px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-brand-accent text-brand-dark font-black tracking-widest text-[10px] uppercase mb-6">
                Programa Competitivo (Medio - Avanzado)
              </span>
              <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-tight mb-6">
                De la clase al <br/><span className="text-brand-accent">partido real.</span>
              </h2>
              <p className="text-xl text-blue-100 font-light leading-relaxed mb-8 border-l-4 border-brand-accent pl-4">
                No es solo jugar partidos... es aprender a ganar mejor disfrutando el deporte.
              </p>
              
              <p className="text-blue-100 mb-10 text-lg">
                La Liga Formativa de Tenis combina entrenamiento y competencia. Los jugadores mejoran su nivel técnico, táctico y físico a través de partidos reales y clases estructuradas. Fomentamos la sana competencia sin malas prácticas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  { icon: <Users />, title: "Cupos Limitados", text: "Solo 10 jugadores por liga." },
                  { icon: <Target />, title: "Grupos Rotativos", text: "Entrena y empareja en partidos oficiales paralelos." },
                  { icon: <Calendar />, title: "9 Partidos Asegurados", text: "Formato todos contra todos. 1 set sin ventaja." },
                  { icon: <Trophy />, title: "Grandes Premios", text: "Indumentaria Tilki, copas y tarros de pelotas." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start bg-white/5 p-4 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="text-brand-accent shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-white mb-1 uppercase tracking-wide">{item.title}</h4>
                      <p className="text-blue-200 text-xs font-light leading-snug">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Info Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-brand-blue border-2 border-white/20 p-8 sm:p-10 shadow-2xl relative"
            >
              <h3 className="text-2xl font-black italic uppercase text-white mb-6 border-b border-white/20 pb-4">Detalles de la Liga</h3>
              
              <ul className="space-y-5 mb-8">
                <li className="flex justify-between items-center text-blue-100">
                  <span className="font-light text-xs uppercase tracking-widest">Lugar</span>
                  <span className="font-bold text-brand-accent">Amador Donoso</span>
                </li>
                <li className="flex justify-between items-center text-blue-100">
                  <span className="font-light text-xs uppercase tracking-widest">Próximo Inicio</span>
                  <span className="font-bold text-white">Junio 2026 <span className="font-light text-brand-accent/80">(3 meses)</span></span>
                </li>
                <li className="flex justify-between items-center text-blue-100">
                  <span className="font-light text-xs uppercase tracking-widest">Liga 1</span>
                  <span className="font-bold text-white text-right">Martes<br/><span className="text-xs font-light text-brand-accent">9:00 a 11:00</span></span>
                </li>
                <li className="flex justify-between items-center text-blue-100">
                  <span className="font-light text-xs uppercase tracking-widest">Liga 2</span>
                  <span className="font-bold text-white text-right">Viernes<br/><span className="text-xs font-light text-brand-accent">19:00 a 21:00</span></span>
                </li>
              </ul>

              <div className="bg-brand-dark/50 p-6 mb-8 border border-white/10 text-center">
                <p className="text-xs text-brand-accent font-bold uppercase tracking-widest mb-2">Valor de Lanzamiento</p>
                <div className="text-5xl font-black italic text-white mb-2">$45.000 <span className="text-lg text-blue-200 font-light">/mes</span></div>
                <p className="text-[10px] text-blue-200 uppercase tracking-widest leading-relaxed">Incluye clases de 2 horas semanales + partido por la liga + premios.</p>
              </div>

              <a href="#contacto" className="block w-full bg-brand-accent text-brand-dark text-center py-4 font-black text-sm uppercase tracking-wide hover:scale-105 transition-transform shadow-[0_0_15px_rgba(212,255,0,0.2)]">
                Asegurar Cupo
              </a>
              
              <p className="text-center text-[10px] uppercase tracking-wider text-blue-200/60 mt-6 px-4">
                Inscripción implica compromiso semanal. El pago es mensual y obligatorio.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
