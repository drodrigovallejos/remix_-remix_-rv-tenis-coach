import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc, db } from '../lib/db';
import { ArrowLeft, Instagram } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import Navbar from './Navbar';
import Footer from './Footer';

interface BlogEntry {
  id: string;
  title: string;
  summary: string;
  content: string;
  instagramUrl?: string;
  imageUrl: string;
  createdAt: number;
}

export default function FullBlogPost() {
  const { id } = useParams();
  const [blog, setBlog] = useState<BlogEntry | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchBlog = async () => {
      if (!id) return;
      try {
        const docRef = doc(db, 'videoBlogs', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setBlog({ id: docSnap.id, ...docSnap.data() } as BlogEntry);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-brand-dark flex justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-brand-accent"></div>
        </div>
        <Footer />
      </>
    );
  }

  if (!blog) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-brand-dark flex flex-col justify-center items-center text-white pt-24 px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-black italic uppercase mb-4">Noticia no encontrada</h2>
          <p className="text-blue-100 mb-8 max-w-lg">Lo sentimos, esta noticia no existe o ha sido eliminada.</p>
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-accent text-brand-dark font-black uppercase">
            <ArrowLeft size={20} /> Volver al Inicio
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <article className="min-h-screen bg-brand-dark pt-24 pb-24 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-16">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-100 hover:text-brand-accent transition-colors font-bold uppercase text-[10px] tracking-widest mb-8 lg:mb-12">
            <ArrowLeft size={14} />
            Volver al inicio
          </Link>
          
          <div className="mb-10 lg:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter mb-6">{blog.title}</h1>
            <p className="text-xl text-blue-100 font-light border-l-2 border-brand-accent pl-4 leading-relaxed">
              {blog.summary}
            </p>
          </div>

          <div className="aspect-video w-full overflow-hidden mb-12">
            <img 
              src={blog.imageUrl} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-blue-50/90 font-light leading-relaxed mb-16 prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-a:text-brand-accent prose-strong:text-white prose-strong:font-bold">
            <ReactMarkdown remarkPlugins={[remarkBreaks]}>{blog.content}</ReactMarkdown>
          </div>

          {blog.instagramUrl && (
            <div className="border-t border-white/10 pt-12 flex justify-center">
              <a 
                href={blog.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white/5 hover:bg-brand-accent hover:text-brand-dark border border-white/10 hover:border-brand-accent px-8 py-4 transition-all duration-300 rounded-full font-bold uppercase tracking-widest group"
              >
                <Instagram size={24} className="group-hover:scale-110 transition-transform" />
                Ver Video Completo en Instagram
              </a>
            </div>
          )}
        </div>
      </article>
      <Footer />
    </>
  );
}
