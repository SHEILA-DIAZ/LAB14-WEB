import { Project } from '@/types';
export const projects: Project[] = [
  {
    slug: 'laboratorio-14',
    title: 'Laboratorio 14: portafolio web y SEO',
    description: 'Portafolio académico con fichas de proyectos, metadatos dinámicos, imágenes optimizadas y una página de contacto, publicado en Vercel.',
    image: '/laboratorio-14.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Lighthouse'],
    githubUrl: 'https://github.com/SHEILA-DIAZ/LAB14-WEB',
    featured: true,
    details: [
      'Automaticé la generación del sitemap a partir de los proyectos y configuré robots.txt para indicar a los buscadores dónde encontrarlo. Tras publicar el sitio, comprobé que ambos archivos usaran la dirección pública y que la página de contacto figurara en el sitemap.',
      'Verifiqué las etiquetas Open Graph en DevTools y audité la versión base con Lighthouse. El rendimiento fue 98 en móvil y 100 en escritorio.',
    ],
  },
  {
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico con Next.js, Stripe y PostgreSQL',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind'],
    featured: false,
  },
  {
    slug: 'task-manager',
    title: 'Task Manager App',
    description: 'Aplicación de gestión de tareas con autenticación y tiempo real',
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    featured: false,
  },
  {
    slug: 'weather-dashboard',
    title: 'Weather Dashboard',
    description: 'Dashboard interactivo del clima con gráficos y pronósticos',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['Next.js', 'Chart.js', 'OpenWeather API'],
    featured: false,
  },
];

export const personalInfo = {
  name: 'Sheila Díaz Rojas',
  title: 'Estudiante de desarrollo web en Tecsup',
  description: 'Portafolio académico de Sheila Díaz Rojas sobre desarrollo web, optimización de imágenes y SEO con Next.js',
  email: 'sheila.diaz@tecsup.edu.pe',
  github: 'https://github.com/SHEILA-DIAZ',
  siteUrl: (process.env.SITE_URL || 'http://localhost:3000').replace(/\/+$/, ''),
};
