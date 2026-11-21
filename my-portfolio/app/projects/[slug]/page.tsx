import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Proyecto no encontrado',
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="site-shell page-section">
      <Link
        href="/projects"
        className="inline-link mb-6 inline-block"
      > Volver a proyectos
      </Link>

      <article>
        <h1 className="page-title">
          {project.title}
        </h1>

        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            preload
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>

        <p className="page-copy mb-6">{project.description}</p>

        {project.details && (
          <section className="mb-6 max-w-3xl">
            <h2 className="mb-3 font-serif text-2xl">Desarrollo y verificación</h2>
            {project.details.map((detail) => (
              <p key={detail} className="mb-3 text-gray-700">{detail}</p>
            ))}
          </section>
        )}

        <div className="mb-6">
          <h2 className="font-serif text-2xl mb-3">
            Tecnologías Utilizadas
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="tag"
              > {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            > Ver Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline"
            > Ver Código
            </a>
          )}
        </div>
      </article>
    </div>
  );
}
