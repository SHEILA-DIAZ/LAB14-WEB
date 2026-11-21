import { Metadata } from 'next';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Explora mi colección de proyectos de desarrollo web y aplicaciones',
  openGraph: {
    title: 'Proyectos - Portafolio',
    description: 'Explora mi colección de proyectos de desarrollo web',
    images: ['/laboratorio-14.png'],
  },
};

export default function ProjectsPage() {
  return (
    <div className="site-shell page-section">
      <h1 className="page-title">Proyectos</h1>
      <p className="page-copy page-intro">
        Mi trabajo del Laboratorio 14 y las fichas de ejemplo que usé para practicar las rutas y los metadatos.
      </p>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} heading="h2" />
        ))}
      </div>
    </div>
  );
}
