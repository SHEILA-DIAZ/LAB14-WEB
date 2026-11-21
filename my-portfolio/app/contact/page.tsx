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
    <section className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Contacto</h1>
        <p className="mb-8 text-lg text-gray-700">
          Escríbeme si tienes una consulta o te interesa colaborar en un proyecto.
        </p>
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-2 text-xl font-bold text-gray-900">Correo electrónico</h2>
          <a className="break-all text-blue-700 underline" href={`mailto:${personalInfo.email}`}>
            {personalInfo.email}
          </a>
        </div>
      </div>
    </section>
  );
}
