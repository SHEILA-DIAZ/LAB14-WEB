import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  heading?: 'h2' | 'h3';
}

export default function ProjectCard({ project, heading: Heading = 'h3' }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="project-card"
    >
      <div className="project-image">
        <Image
          src={project.image}
          alt={project.title}
          fill
          loading='lazy'
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="project-content">
        <Heading className="project-title">
          {project.title}
        </Heading>
        <p>{project.description}</p>
        <div className="tags">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="tag"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="tag">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
