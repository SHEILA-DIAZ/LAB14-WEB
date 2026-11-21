import Link from 'next/link';
import { personalInfo } from '@/lib/data';

const navigation = [
  ['/', 'Inicio'],
  ['/projects', 'Proyectos'],
  ['/about', 'Sobre mí'],
  ['/contact', 'Contacto'],
];

export default function Header() {
  return (
    <header className="site-header">
      <nav className="site-shell header-row" aria-label="Navegación principal">
        <Link href="/" className="wordmark" aria-label={personalInfo.name}>Sheila Díaz<span>.</span></Link>
        <ul className="nav-links">
          {navigation.map(([href, label]) => (
            <li key={href}>
              <Link href={href} className={href === '/contact' ? 'nav-contact' : undefined}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
