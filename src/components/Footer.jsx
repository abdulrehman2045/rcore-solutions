import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Github } from 'lucide-react';
import { services, products, industries } from '../data/content.js';

const cols = [
  [
    'Company',
    [
      ['About', '/about'],
      ['Process', '/company/process'],
      ['Careers', '/company/careers'],
      ['Contact', '/contact'],
    ],
  ],
  [
    'Services',
    services
      .filter((s) => !['ui-ux-design', 'maintenance-support'].includes(s.slug))
      .map((s) => [s.name, s.to]),
  ],
  ['Products', products.map((p) => [p.name, p.to])],
  ['Industries', industries.slice(0, 6).map((i) => [i.name, i.to])],
];

// RCore Solutions Social Links
const social = [
  [Instagram, 'Instagram', 'https://instagram.com/rcore_solutions'],
  [Linkedin, 'LinkedIn', 'https://linkedin.com/company/rcoresolutions-official']
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link to="/" className="logo">
              <img
                src={logo}
                alt="RCore Solutions logo"
                width="36"
                height="36"
              />
              RCore Solutions
            </Link>

            <p>Technology Built Around Your Business.</p>
          </div>

          {cols.map(([t, l]) => (
            <nav key={t} aria-label={t}>
              <h3>{t}</h3>

              {l.map(([n, to]) => (
                <Link key={to} to={to}>
                  {n}
                </Link>
              ))}
            </nav>
          ))}
        </div>

        <div className="foot-bottom">
          <small>© 2026 RCore Solutions. All rights reserved.</small>

          <div>
            {social.map(([I, n, url]) => (
              <a
                key={n}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`RCore Solutions ${n}`}
              >
                <I size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}