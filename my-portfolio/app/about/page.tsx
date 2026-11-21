import type { Metadata } from 'next';
import Link from 'next/link';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: `Conoce el trabajo académico de ${personalInfo.name} en desarrollo web y SEO.`,
};

export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Sobre mí</h1>
        <p className="mb-4 text-lg text-gray-700">
          Soy {personalInfo.name} y estudio desarrollo web en Tecsup. En este portafolio documento
          lo que aprendí construyendo y publicando una aplicación con Next.js.
        </p>
        <p className="mb-6 text-lg text-gray-700">
          En el Laboratorio 14 trabajé con metadatos Open Graph, optimización de imágenes y
          configuración para buscadores. También comparé la carga en móvil y escritorio con Lighthouse.
        </p>
        <Link href="/projects/laboratorio-14" className="font-medium text-blue-700 underline">
          Leer el caso de estudio del Laboratorio 14
        </Link>
      </div>
    </section>
  );
}
