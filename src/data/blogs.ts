export interface BlogEntry {
  id: string;
  title: string;
  summary: string;
  content: string;
  instagramUrl?: string;
  imageUrl: string;
  createdAt: number;
}

export const staticBlogs: BlogEntry[] = [
  {
    id: "noticia-inicial-ejemplo",
    title: "Bienvenido al Blog de Tenis",
    summary: "Este es un blog de muestra. Aquí podrás agregar trucos y noticias sobre tenis de manera directa.",
    content: "¡Hola! Dado que la conexión con la base de datos presenta errores de permisos ajenos a nuestra plataforma (problemas directos de tu entorno Google Cloud Workspace), el blog ahora lee la información de manera estática directamente desde el código.\n\nPara agregar una noticia nueva, solo indícale a la Inteligencia Artificial (por este mismo chat) cuál es el contenido, y la IA lo agregará al código para que sea visible para todos cuando compartas el enlace.",
    imageUrl: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80&w=800",
    createdAt: Date.now(),
  }
];
