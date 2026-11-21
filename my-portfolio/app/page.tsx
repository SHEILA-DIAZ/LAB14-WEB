import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { personalInfo, projects } from '@/lib/data';

export default function Home() {
  return (
    <div className="site-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Portafolio de desarrollo web</p>
          <h1>Sheila Díaz <em>Rojas.</em></h1>
          <p className="hero-intro">
            Estudio desarrollo web en Tecsup. Aquí comparto lo que voy aprendiendo al diseñar,
            programar y publicar sitios web.
          </p>
          <div className="actions">
            <Link href="/projects" className="button button-primary">Ver proyectos</Link>
            <Link href="/about" className="button button-outline">Sobre mí</Link>
          </div>
        </div>
        <div className="hero-portrait">
          <Image
            src={personalInfo.portrait}
            alt="Retrato ilustrado de Sheila Díaz Rojas"
            fill
            preload
            sizes="(max-width: 680px) calc(100vw - 48px), (max-width: 1100px) 40vw, 430px"
          />
        </div>
      </section>

      <section className="section-band" aria-labelledby="featured">
        <div className="section-header">
          <h2 id="featured" className="display-heading">Proyecto destacado</h2>
          <Link href="/projects" className="inline-link">Todos los proyectos</Link>
        </div>
        <div className="project-grid">
          {projects.filter((project) => project.featured).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
