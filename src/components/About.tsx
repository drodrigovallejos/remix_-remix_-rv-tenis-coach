import { motion } from 'motion/react';
import { Award, BookOpen, HeartPulse, GraduationCap } from 'lucide-react';

export default function About() {
  const qualifications = [
    { icon: <Award className="w-8 h-8 text-brand-accent" />, text: "Años de experiencia fomentando el tenis y formando jugadores de todos los niveles." },
    { icon: <BookOpen className="w-8 h-8 text-brand-accent" />, text: "Cursos certificados: ITF I Preparación física y Play and Stay." },
    { icon: <GraduationCap className="w-8 h-8 text-brand-accent" />, text: "Workshop Federal de Preparación Física y Psicología Aplicada (Buenos Aires), y Curso ANETECH." },
    { icon: <HeartPulse className="w-8 h-8 text-brand-accent" />, text: "Odontólogo y diplomado en odontología deportiva integral." }
  ];

  return (
    <section id="sobre-mi" className="py-24 bg-brand-blue text-white overflow-hidden relative border-y border-white/10">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-dark/30 skew-x-12 translate-x-32 -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative w-2/3 mx-auto"
          >
            <div className="aspect-[3/4] md:aspect-[4/5] overflow-hidden shadow-2xl relative z-10 grayscale-[50%] contrast-125 border-4 border-white">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/video-coach.mp4" type="video/mp4" />
                Tu navegador no soporta videos HTML5.
              </video>
            </div>
            {/* Decorative background block */}
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-brand-accent z-0"></div>
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-brand-accent z-0"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-accent font-bold tracking-[0.2em] uppercase text-[10px] mb-3">Conoce a tu Coach</h2>
            <h3 className="text-5xl md:text-6xl font-display font-black uppercase italic tracking-tighter mb-6">
              RODRIGO <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">VALLEJOS</span>
            </h3>
            <p className="text-lg text-blue-100 mb-10 leading-relaxed font-light italic border-l-2 border-brand-accent pl-4">
              Con una formación sólida tanto en el deporte como en el campo de la salud, ofrezco un programa verdaderamente integral. Mi objetivo es potenciar tus habilidades técnicas mientras cuidamos tu bienestar físico y mental.
            </p>

            <div className="space-y-6">
              {qualifications.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="bg-brand-accent/10 rounded-sm p-3 border border-brand-accent/20">
                    {item.icon}
                  </div>
                  <p className="text-blue-50 font-medium pt-1 text-sm md:text-base leading-snug">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
