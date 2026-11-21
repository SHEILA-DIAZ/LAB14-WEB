import type { Metadata } from 'next';
import { personalInfo } from '@/lib/data';

const description = 'Información de contacto para consultas y colaboraciones sobre proyectos de desarrollo web.';

export const metadata: Metadata = {
  title: 'Contacto',
  description,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contacto',
    description,
    url: '/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <section className="site-shell page-section">
      <div className="max-w-4xl">
        <h1 className="page-title">Contacto</h1>
        <p className="page-copy page-intro">
          Escríbeme si tienes una consulta o te interesa colaborar en un proyecto.
        </p>
        <div className="contact-card">
          <h2>Correo electrónico</h2>
          <a className="inline-link" href={`mailto:${personalInfo.email}`}>
            {personalInfo.email}
          </a>
        </div>
      </div>
    </section>
  );
}
