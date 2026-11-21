import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: `Conoce el trabajo académico de ${personalInfo.name} en desarrollo web y SEO.`,
};

export default function AboutPage() {
  return (
    <section className="site-shell page-section profile-layout">
      <div>
        <h1 className="page-title">Sobre mí</h1>
        <p className="page-copy">
          Soy {personalInfo.name} y estudio desarrollo web en Tecsup. En este portafolio documento
          lo que aprendí construyendo y publicando una aplicación con Next.js.
        </p>
        <p className="page-copy">
          En el Laboratorio 14 trabajé con metadatos Open Graph, optimización de imágenes y
          configuración para buscadores. También comparé la carga en móvil y escritorio con Lighthouse.
        </p>
        <div className="actions">
          <Link href="/projects/laboratorio-14" className="inline-link">
            Leer sobre el Laboratorio 14
          </Link>
        </div>
      </div>
      <div className="hero-portrait">
        <Image src={personalInfo.portrait} alt="Retrato ilustrado de Sheila Díaz Rojas" fill
          sizes="(max-width: 680px) calc(100vw - 48px), 320px" />
      </div>
    </section>
  );
}
