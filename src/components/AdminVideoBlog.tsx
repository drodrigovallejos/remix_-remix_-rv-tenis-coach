import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, addDoc, updateDoc, deleteDoc, doc, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User, db, auth } from '../lib/db';
import { LogIn, LogOut, Plus, Trash2, Edit2, Check, X } from 'lucide-react';
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

export default function AdminVideoBlog() {
  const [user, setUser] = useState<User | null>(null);
  const [blogs, setBlogs] = useState<BlogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    content: '',
    imageUrl: '',
    instagramUrl: ''
  });

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    const q = query(collection(db, 'videoBlogs'), orderBy('createdAt', 'desc'));
    const unsubscribeDb = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data()
      })) as BlogEntry[];
      setBlogs(data);
    });

    return () => {
      unsubscribeAuth();
      unsubscribeDb();
    };
  }, []);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (editingId) {
        await updateDoc(doc(db, 'videoBlogs', editingId), {
          ...formData,
          title: formData.title.substring(0, 200),
          summary: formData.summary.substring(0, 5000),
          updatedAt: Date.now()
        });
      } else {
        await addDoc(collection(db, 'videoBlogs'), {
          ...formData,
          title: formData.title.substring(0, 200),
          summary: formData.summary.substring(0, 5000),
          createdAt: Date.now(),
          updatedAt: Date.now()
        });
      }
      resetForm();
    } catch (error: any) {
      console.error('Error saving blog:', error);
      alert('Error al publicar: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (blog: BlogEntry) => {
    setFormData({
      title: blog.title,
      summary: blog.summary,
      content: blog.content || '',
      imageUrl: blog.imageUrl || '',
      instagramUrl: blog.instagramUrl || ''
    });
    setEditingId(blog.id);
    setIsEditing(true);
    window.scrollTo(0, 0);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este video?')) {
      try {
        await deleteDoc(doc(db, 'videoBlogs', id));
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({ title: '', summary: '', content: '', imageUrl: '', instagramUrl: '' });
    setEditingId(null);
    setIsEditing(false);
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="pt-32 pb-24 min-h-[70vh] bg-brand-dark flex flex-col items-center justify-center">
          <div className="w-12 h-12 border-4 border-brand-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
        <Footer />
      </>
    );
  }

  if (!user) {
    return (
      <>
        <Navbar />
        <div className="pt-32 pb-24 min-h-[70vh] bg-brand-dark flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-3xl font-black italic uppercase text-brand-accent mb-6">Acceso Restringido</h2>
          <p className="text-blue-100 mb-8 max-w-md mx-auto">Para gestionar el contenido del blog necesitas verificar tu identidad como administrador.</p>
          <button onClick={handleLogin} className="inline-flex items-center gap-2 px-6 py-3 border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-dark transition-colors font-bold uppercase text-sm">
            Verificar Identidad Google
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-24 min-h-screen bg-brand-dark text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-white/10 pb-6 gap-4">
            <div>
              <h1 className="text-3xl font-black italic uppercase tracking-wider text-brand-accent">Gestión de Blog</h1>
              <p className="text-blue-100 text-sm mt-1">Conectado como {user.email}</p>
            </div>
            
            <div className="flex gap-4">
              {!isEditing && (
                <button 
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 bg-brand-accent text-brand-dark px-4 py-2 font-bold uppercase text-xs hover:bg-white transition-colors"
                >
                  <Plus size={16} /> Nueva Noticia
                </button>
              )}
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 border border-red-500/50 text-red-400 hover:bg-red-500 hover:text-white transition-colors px-4 py-2 font-bold uppercase text-xs"
              >
                <LogOut size={16} /> Salir
              </button>
            </div>
          </div>

          {isEditing && (
            <div className="bg-white/5 border border-brand-accent/30 p-6 md:p-8 mb-12 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-black italic uppercase">{editingId ? 'Editar Noticia' : 'Crear Nueva Noticia'}</h2>
                <button onClick={resetForm} className="text-white/50 hover:text-white transition-colors"><X size={24} /></button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-blue-100 mb-2">Título</label>
                  <input 
                    type="text" 
                    required
                    value={formData.title}
                    onChange={e => setFormData({...formData, title: e.target.value})}
                    className="w-full bg-brand-dark border border-white/10 p-3 text-white focus:border-brand-accent outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-blue-100 mb-2">Resumen Corto (Para las tarjetas)</label>
                  <textarea 
                    required
                    rows={2}
                    value={formData.summary}
                    onChange={e => setFormData({...formData, summary: e.target.value})}
                    className="w-full bg-brand-dark border border-white/10 p-3 text-white focus:border-brand-accent outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-blue-100 mb-2">Contenido Completo (Markdown soportado)</label>
                  <textarea 
                    required
                    rows={8}
                    value={formData.content}
                    onChange={e => setFormData({...formData, content: e.target.value})}
                    className="w-full bg-brand-dark border border-white/10 p-3 text-white focus:border-brand-accent outline-none transition-colors"
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-blue-100 mb-2">URL Imagen de Portada</label>
                    <input 
                      type="text" 
                      value={formData.imageUrl}
                      onChange={e => setFormData({...formData, imageUrl: e.target.value})}
                      className="w-full bg-brand-dark border border-white/10 p-3 text-white focus:border-brand-accent outline-none transition-colors mb-2"
                      placeholder="https://... o cargar archivo"
                    />
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-blue-100 uppercase font-bold">O subir desde equipo:</span>
                      <input 
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              const img = new Image();
                              img.onload = () => {
                                const canvas = document.createElement('canvas');
                                const MAX_WIDTH = 1920;
                                let width = img.width;
                                let height = img.height;
                                
                                if (width > MAX_WIDTH) {
                                  height *= MAX_WIDTH / width;
                                  width = MAX_WIDTH;
                                }
                                
                                canvas.width = width;
                                canvas.height = height;
                                const ctx = canvas.getContext('2d');
                                ctx?.drawImage(img, 0, 0, width, height);
                                const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.9);
                                setFormData({...formData, imageUrl: compressedDataUrl});
                              };
                              img.src = reader.result as string;
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                        className="text-xs text-blue-100 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-xs file:font-bold file:uppercase file:bg-brand-accent file:text-brand-dark hover:file:bg-white transition-colors cursor-pointer"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-blue-100 mb-2">URL Instagram (Opcional)</label>
                    <input 
                      type="url" 
                      value={formData.instagramUrl}
                      onChange={e => setFormData({...formData, instagramUrl: e.target.value})}
                      className="w-full bg-brand-dark border border-white/10 p-3 text-white focus:border-brand-accent outline-none transition-colors"
                      placeholder="https://instagram.com/..."
                    />
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <button type="submit" disabled={isSubmitting} className="flex items-center gap-2 bg-brand-accent text-brand-dark px-6 py-3 font-bold uppercase text-sm hover:bg-white transition-colors disabled:opacity-50">
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-brand-dark border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Check size={18} /> 
                    )}
                    {editingId ? 'Guardar Cambios' : 'Publicar Noticia'}
                  </button>
                  <button type="button" onClick={resetForm} disabled={isSubmitting} className="px-6 py-3 border border-white/20 text-white/70 hover:text-white uppercase font-bold text-sm transition-colors disabled:opacity-50">
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6 border-l-4 border-brand-accent pl-3">Tus Publicaciones ({blogs.length})</h3>
            
            {blogs.length === 0 ? (
              <div className="text-center py-12 border border-white/5 bg-white/5">
                 <p className="text-blue-100">No hay noticias publicadas todavía.</p>
              </div>
            ) : (
              blogs.map(blog => (
                <div key={blog.id} className="bg-white/5 border border-white/10 p-4 flex flex-col md:flex-row gap-6 items-start md:items-center group">
                  <div className="w-full md:w-32 h-24 shrink-0 bg-brand-dark overflow-hidden relative border border-white/10">
                    <img src={blog.imageUrl} alt={blog.title} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-lg font-bold mb-1 line-clamp-1">{blog.title}</h4>
                    <p className="text-sm text-blue-100 mb-2 line-clamp-1">{blog.summary}</p>
                    <span className="text-[10px] text-brand-accent uppercase tracking-wider font-bold bg-brand-accent/10 px-2 py-1 rounded">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex flex-row md:flex-col gap-2 w-full md:w-auto shrink-0 mt-4 md:mt-0">
                    <button 
                      onClick={() => handleEdit(blog)}
                      className="flex-1 md:flex-none flex justify-center items-center gap-2 bg-white/10 hover:bg-white text-white hover:text-brand-dark px-4 py-2 transition-colors text-xs font-bold uppercase"
                    >
                      <Edit2 size={14} /> Editar
                    </button>
                    <button 
                      onClick={() => handleDelete(blog.id)}
                      className="flex-1 md:flex-none flex justify-center items-center gap-2 border border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white px-4 py-2 transition-colors text-xs font-bold uppercase"
                    >
                      <Trash2 size={14} /> Eliminar
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
