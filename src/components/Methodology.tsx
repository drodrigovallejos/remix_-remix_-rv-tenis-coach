import { motion } from 'motion/react';
import { Activity, Brain, Target, Users, Dumbbell, Trophy } from 'lucide-react';

export default function Methodology() {
  const pillars = [
    {
      title: "Técnica",
      description: "Perfeccionamiento de los golpes fundamentales y avanzados para un juego sólido y consistente.",
      icon: <Target className="w-10 h-10 text-brand-accent" />
    },
    {
      title: "Biomecánica",
      description: "Análisis y optimización del movimiento corporal para prevenir lesiones y generar máxima potencia.",
      icon: <Activity className="w-10 h-10 text-brand-accent" />
    },
    {
      title: "Preparación Física",
      description: "Acondicionamiento específico para el tenis: resistencia, explosividad, agilidad y flexibilidad.",
      icon: <Dumbbell className="w-10 h-10 text-brand-accent" />
    },
    {
      title: "Propósito Adaptado",
      description: "Planes personalizados según tus objetivos, ya sea juego recreacional o competición de alto rendimiento.",
      icon: <Brain className="w-10 h-10 text-brand-accent" />
    },
    {
      title: "Enfoque Multidisciplinario",
      description: "Convenios exclusivos con nutricionista, psicólogo, kinesiólogo y odontólogo deportivo.",
      icon: <Users className="w-10 h-10 text-brand-accent" />
    },
    {
      title: "Competición",
      description: "Acceso a torneos exclusivos y ligas competitivas para poner en práctica lo aprendido.",
      icon: <Trophy className="w-10 h-10 text-brand-accent" />
    }
  ];

  return (
    <section id="metodologia" className="py-24 bg-brand-dark relative text-white border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-accent font-bold tracking-[0.2em] uppercase text-[10px] mb-3"
          >
            NUESTRA FILOSOFÍA
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter mb-6"
          >
            ENFOQUE <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">INTEGRAL</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-blue-100 font-light italic max-w-2xl"
          >
            No solo enseñamos a golpear la pelota. Formamos jugadores completos atacando todas las áreas clave del desarrollo deportivo.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white/5 backdrop-blur-md border border-white/10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 border-[0.5px] border-white/10 flex flex-col justify-center hover:bg-white/5 transition-colors"
            >
              <div className="text-brand-accent mb-4">
                {pillar.icon}
              </div>
              <span className="text-brand-accent text-3xl font-black mb-2 italic">0{index + 1}.</span>
              <h4 className="text-lg font-black uppercase tracking-wide mb-3">{pillar.title}</h4>
              <p className="text-xs text-blue-100 leading-relaxed font-light">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
