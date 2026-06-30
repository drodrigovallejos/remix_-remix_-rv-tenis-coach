import { useState, useEffect, useRef } from 'react';
import { collection, query, orderBy, onSnapshot, db } from '../lib/db';
import { motion } from 'motion/react';
import { Instagram, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogEntry {
  id: string;
  title: string;
  summary: string;
  content?: string;
  instagramUrl?: string;
  imageUrl: string;
  createdAt: number;
}

export default function VideoBlog() {
  const [blogs, setBlogs] = useState<BlogEntry[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const q = query(collection(db, 'videoBlogs'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BlogEntry[];
      setBlogs(data);
    });

    return () => unsubscribe();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth * 0.8; // Scroll 80% of width
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="videoblog" className="py-24 bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-accent font-bold tracking-[0.2em] uppercase text-[10px] mb-3">TIPS Y NOTICIAS</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6">
            TENIS <span className="text-brand-accent">EN 60 SEGUNDOS</span>
          </h3>
          <p className="text-lg text-blue-100 font-light italic border-l-2 border-brand-accent pl-4 max-w-2xl mx-auto">
            Aprende sobre técnica, táctica y entérate de las últimas novedades.
          </p>
        </div>

        {blogs.length === 0 ? (
          <div className="text-center py-12 border border-white/10 border-dashed bg-white/5">
            <p className="text-blue-100 italic">Próximamente nuevos videos y tips de tenis.</p>
          </div>
        ) : (
          <div className="relative group">
            {/* Scroll Buttons */}
            <button 
              onClick={(e) => { e.preventDefault(); scroll('left'); }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 z-30 bg-brand-accent text-brand-dark p-3 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 hidden md:block"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={(e) => { e.preventDefault(); scroll('right'); }}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 z-30 bg-brand-accent text-brand-dark p-3 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 hidden md:block"
              aria-label="Siguiente"
            >
              <ChevronRight size={24} />
            </button>

            {/* Scroll Container */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 hide-scrollbar scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {blogs.map((blog, index) => (
                <motion.div 
                  key={blog.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 overflow-hidden flex flex-col relative shrink-0 w-[85vw] md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] snap-start group"
                >
                  <Link to={`/blog/${blog.id}`} className="block flex-grow">
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={blog.imageUrl || 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80&w=800'} 
                        alt={blog.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                      />
                    </div>
                    <div className="p-6 flex flex-col h-[250px]">
                      <h4 className="text-xl font-black uppercase italic tracking-wide mb-3 line-clamp-2">{blog.title}</h4>
                      <p className="text-blue-100 text-sm font-light mb-6 flex-grow whitespace-pre-line line-clamp-4">
                        {blog.summary}
                      </p>
                      <span className="flex items-center gap-2 text-white font-bold uppercase text-[10px] tracking-widest group-hover:text-brand-accent transition-colors mt-auto">
                        Leer noticia completa <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                  
                  {blog.instagramUrl && (
                    <a 
                      href={blog.instagramUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 bg-brand-accent text-brand-dark p-2 rounded-full hover:scale-110 shadow-lg transition-transform z-20 flex items-center gap-2 pr-4"
                    >
                      <Instagram size={16} />
                      <span className="text-[10px] font-black uppercase tracking-wider">Ver Video</span>
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
