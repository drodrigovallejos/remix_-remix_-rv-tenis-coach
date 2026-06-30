import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';
import kidsImage from '../assets/images/kids_tennis_class_1779420462887.png';

export default function Programs() {
  const [activeTab, setActiveTab] = useState<'ninos' | 'personal' | 'grupal'>('ninos');

  return (
    <section id="programas" className="py-24 bg-brand-blue text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-left mb-16 max-w-3xl">
          <h2 className="text-brand-accent font-bold tracking-[0.2em] uppercase text-[10px] mb-3">PLANES DE ENTRENAMIENTO</h2>
          <h3 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter mb-6">
            PROGRAMAS PARA <span className="text-brand-accent">TODOS</span>
          </h3>
          <p className="text-lg text-blue-100 font-light italic border-l-2 border-brand-accent pl-4">
            Escoge la modalidad que mejor se adapte a tus necesidades y objetivos. Todas las edades, todos los niveles.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'ninos', label: 'Clases Niños' },
            { id: 'personal', label: 'Personal & Grupos Pequeños' },
            { id: 'grupal', label: 'Entrenamiento Grupal' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-8 py-4 font-black uppercase text-sm border-2 transition-all ${
                activeTab === tab.id 
                  ? 'bg-brand-accent border-brand-accent text-brand-dark shadow-[0_0_15px_rgba(212,255,0,0.2)]' 
                  : 'bg-transparent border-transparent text-blue-100 hover:border-white/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            
            {/* NIÑOS */}
            {activeTab === 'ninos' && (
              <motion.div
                key="ninos"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h4 className="text-4xl font-black uppercase italic mb-4">Recomendaciones ITF</h4>
                  <p className="text-lg text-brand-dark mb-6 font-bold bg-brand-accent p-4 uppercase tracking-wide">
                    Enseñanza del tenis para niños con pelotas y medidas de la cancha acorde a su edad.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Clases personalizadas para favorecer el aprendizaje.",
                      "Preparación para la competencia futura.",
                      "Categorías marcadas por color según edad (Stage Roja, Naranja, Verde, Amarilla).",
                      "Pelotas y elementos adicionales brindados por el profesor e incluidos en el valor de la clase."
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-blue-100 font-light">
                        <Check className="text-brand-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contacto" className="inline-block border-2 border-brand-accent text-brand-accent px-8 py-4 font-black uppercase text-sm hover:bg-brand-accent hover:text-brand-dark transition-all">
                    Consultar Valores Niños
                  </a>
                </div>
                <div className="overflow-hidden shadow-2xl border-4 border-white grayscale-[30%] contrast-110">
                  <img 
                    src="/clases-ninos.jpg" 
                    onError={(e) => { e.currentTarget.src = kidsImage }}
                    alt="Clases de tenis para niños" 
                    className="w-full h-auto object-cover" 
                  />
                </div>
              </motion.div>
            )}

            {/* PERSONAL & PEQUEÑOS */}
            {activeTab === 'personal' && (
              <motion.div
                key="personal"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-6"
              >
                <PricingCard 
                  title='Plan Personal "Mejoro a mi ritmo"'
                  features={["Atención 100% personalizada", "Adaptación a tus horarios", "Corrección biomecánica específica", "Análisis de rendimiento individual"]}
                  prices={[
                    { label: "Esporádico", price: "$25.000" },
                    { label: "Mensual 4 clases", price: "$80.000", subtitle: "($20.000 c/h)" },
                    { label: "Mensual 8 clases", price: "$144.000", subtitle: "($18.000 c/h)" }
                  ]}
                  highlight={false}
                />
                <PricingCard 
                  title='Plan Dúo "2 raquetas, 1 motivación"'
                  features={["Entrena con un amigo o pareja", "Ejercicios dinámicos compartidos", "Competencia y motivación mutua", "Costo dividido conveniente"]}
                  prices={[
                    { label: "1 vez Esporádica", price: "$35.000", subtitle: "($17.500 c/u)" },
                    { label: "Mensual 4 clases", price: "$112.000", subtitle: "($14.000 c/u por hora)" },
                    { label: "Mensual 8 clases", price: "$192.000", subtitle: "($12.000 c/u por hora)" }
                  ]}
                  highlight={true}
                />
                <PricingCard 
                  title='Plan de Tres "Intensidad y diversión"'
                  features={["Grupos cerrados de 3 personas", "Intensidad, diversión y compañerismo", "Simulaciones de puntos reales", "Excelente relación valor/tiempo"]}
                  prices={[
                    { label: "1 vez esporádica", price: "$39.000", subtitle: "($13.000 c/u)" },
                    { label: "Mensual 4 clases", price: "$132.000", subtitle: "($11.000 c/u por hora)" },
                    { label: "Mensual 8 clases", price: "$216.000", subtitle: "($9.000 c/u por hora)" }
                  ]}
                  highlight={false}
                />
              </motion.div>
            )}

            {/* GRUPAL */}
            {activeTab === 'grupal' && (
              <motion.div
                key="grupal"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div className="bg-brand-accent text-brand-dark p-8 lg:p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-20">
                    <TrophyIcon className="w-32 h-32 text-brand-dark" />
                  </div>
                  <div className="relative z-10">
                    <span className="bg-brand-dark text-brand-accent px-3 py-1 text-[10px] font-black uppercase tracking-widest mb-4 inline-block">Nivel Iniciante</span>
                    <h4 className="text-[2rem] leading-[1.1] font-black uppercase italic mb-4">
                      Iniciación<br />a medio
                    </h4>
                    <p className="text-brand-dark/80 font-bold mb-6 italic">La oportunidad perfecta para comenzar en este lindo deporte lleno de energía compartiendo el aprendizaje.</p>
                    
                    <div className="mb-8">
                      <h5 className="font-black uppercase mb-2">Aprenderás:</h5>
                      <ul className="space-y-2 text-brand-dark/90 text-sm font-bold">
                        <li>• Los diferentes golpes de manera didáctica y simple</li>
                        <li>• Empuñaduras y trabajo físico</li>
                        <li>• Moverte mejor en la cancha</li>
                        <li>• Control y precisión de tus golpes</li>
                      </ul>
                    </div>

                    <div className="bg-brand-dark text-white p-4 mb-6 text-sm font-bold uppercase tracking-wider space-y-1">
                      <p>Horario: Miércoles 20:30 a 22:30</p>
                      <p>Horario: Viernes 21:00 a 23:00</p>
                    </div>

                    <div className="space-y-4 mb-2">
                      <div className="flex justify-between border-b border-brand-dark/10 pb-2">
                        <span className="font-bold uppercase text-sm text-brand-dark/80">Clase única</span>
                        <span className="font-black italic text-brand-dark border-b-2 border-brand-accent">$12.000</span>
                      </div>
                      <div className="flex justify-between border-b border-brand-dark/10 pb-2">
                        <span className="font-bold uppercase text-sm text-brand-dark/80">Plan mensual (4 clases)</span>
                        <span className="font-black italic text-brand-dark">$38.000 <span className="text-[10px] font-bold text-brand-dark/60">($9.500 c/u)</span></span>
                      </div>
                      <div className="flex justify-between border-b border-brand-dark/10 pb-2">
                        <span className="font-bold uppercase text-sm text-brand-dark/80">Plan mensual (8 clases)</span>
                        <span className="font-black italic text-brand-dark">$62.000 <span className="text-[10px] font-bold text-brand-dark/60">($7.750 c/u)</span></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border-2 border-white/10 text-white p-8 lg:p-10 relative overflow-hidden">
                  <div className="relative z-10">
                    <span className="bg-brand-accent text-brand-dark px-3 py-1 text-[10px] font-black uppercase tracking-widest mb-4 inline-block">Medio / Avanzado</span>
                    <h4 className="text-[2rem] leading-[1.1] font-black uppercase italic mb-4">
                       Medio competitivo<br />a avanzado
                    </h4>
                    <p className="text-blue-100 font-light mb-6">Máximo 5 tenistas por clase. Grupos reducidos para maximizar tu aprendizaje con enfoque técnico, táctico y físico.</p>
                    
                    <div className="mb-6 bg-white/5 p-4 border-l-2 border-brand-accent">
                      <p className="text-sm font-light italic">
                        "Cada clase se trabaja sobre algún golpe o táctica específica, llevado siempre a la realidad de juego de manera didáctica y competitiva. El tenis también se juega en equipo."
                      </p>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="font-light uppercase text-sm">Clase única</span>
                        <span className="font-bold border-b border-brand-accent text-brand-accent">$9.000</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="font-light uppercase text-sm">Plan mensual (4 clases)</span>
                        <span className="font-bold text-brand-accent">$28.000 <span className="text-[10px] font-light text-blue-200">($7.000 c/u)</span></span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="font-light uppercase text-sm">Plan mensual (8 clases)</span>
                        <span className="font-bold text-brand-accent">$48.000 <span className="text-[10px] font-light text-blue-200">($6.000 c/u)</span></span>
                      </div>
                    </div>

                  </div>
                </div>

              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ title, features, prices, highlight }: { title: string, features: string[], prices: any[], highlight: boolean }) {
  return (
    <div className={`p-8 border-2 ${highlight ? 'border-brand-accent bg-white/5 text-white' : 'border-white/10 bg-transparent text-white'} relative flex flex-col h-full`}>
      {highlight && <div className="absolute top-0 right-0 bg-brand-accent text-brand-dark text-[9px] font-black px-3 py-1 uppercase tracking-widest">MÁS POPULAR</div>}
      <h4 className="text-2xl font-black italic uppercase mb-6 pr-8">{title}</h4>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((f, i) => (
          <li key={i} className="flex gap-2 text-sm">
            <Check size={18} className={`shrink-0 ${highlight ? 'text-brand-accent' : 'text-blue-200'}`} />
            <span className={highlight ? 'text-white' : 'text-blue-100'}>{f}</span>
          </li>
        ))}
      </ul>

      <div className={`space-y-3 pt-6 border-t ${highlight ? 'border-brand-accent/20' : 'border-white/10'}`}>
        {prices.map((p, i) => (
          <div key={i} className="flex justify-between items-end">
            <span className={`text-xs uppercase font-light tracking-wide ${highlight ? 'text-white' : 'text-blue-100'}`}>{p.label}</span>
            <div className="text-right">
              <span className={`font-black block text-lg ${highlight ? 'text-brand-accent' : 'text-white'}`}>{p.price}</span>
              {p.subtitle && <span className={`text-[10px] uppercase tracking-wider ${highlight ? 'text-brand-accent/70' : 'text-blue-200/50'}`}>{p.subtitle}</span>}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <a href="#contacto" className={`block w-full text-center py-4 font-black uppercase text-sm transition-all border-2 ${highlight ? 'bg-brand-accent border-brand-accent text-brand-dark hover:bg-transparent hover:text-brand-accent' : 'border-white/20 text-white hover:bg-white hover:text-brand-dark'}`}>
          SOLICITAR PLAN
        </a>
      </div>
    </div>
  );
}

function TrophyIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
