import { personalInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-row">
        <p>© {new Date().getFullYear()} {personalInfo.name}</p>
        <div className="actions">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={`mailto:${personalInfo.email}`}>Correo</a>
        </div>
      </div>
    </footer>
  );
}
