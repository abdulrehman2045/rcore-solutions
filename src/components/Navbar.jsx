import logo from '../assets/logo.jpg';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { menus } from '../data/content.js';

export default function Navbar() {
  const [open, setOpen] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(null); setMobile(false); }, [pathname]);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', f); return () => window.removeEventListener('scroll', f);
  }, []);

  const hover = (k) => window.matchMedia('(hover: hover) and (min-width: 1025px)').matches && setOpen(k);

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`} onMouseLeave={() => hover(null)}>
      <div className="wrap nav-in">
        <Link to="/" className="logo" aria-label="RCore Solutions home"><img src={logo} alt="RCore Solutions logo" width="36" height="36" />RCore Solutions</Link>
        <button className="burger" aria-label="Toggle menu" onClick={() => setMobile(!mobile)}>{mobile ? <X /> : <Menu />}</button>
        <nav className={`links ${mobile ? 'show' : ''}`} aria-label="Main">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          {Object.entries(menus).filter(([k]) => k !== 'Company').map(([k, m]) => (
            <div key={k} className={`has-mega ${open === k ? 'open' : ''}`} onMouseEnter={() => hover(k)}>
              <button aria-expanded={open === k} onClick={() => setOpen(open === k ? null : k)}>{k}<ChevronDown size={15} /></button>
              <Mega m={m} />
            </div>
          ))}
          <div className={`has-mega ${open === 'Company' ? 'open' : ''}`} onMouseEnter={() => hover('Company')}>
            <button aria-expanded={open === 'Company'} onClick={() => setOpen(open === 'Company' ? null : 'Company')}>Company<ChevronDown size={15} /></button>
            <Mega m={menus.Company} />
          </div>
          <NavLink to="/contact" className="btn btn-primary nav-cta">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

function Mega({ m }) {
  return (
    <div className="mega"><div className="wrap mega-in">
      <div className="mega-side"><h3>{m.title}</h3><p>{m.desc}</p><Link to={m.to}>{m.cta}<ArrowRight size={15} /></Link></div>
      <ul className="mega-grid">
        {m.items.map((it) => {
          const I = it.icon; return (
            <li key={it.to}><Link to={it.to}><I size={20} /><span><b>{it.name}</b><small>{it.desc}</small></span></Link></li>
          );
        })}
      </ul>
    </div></div>
  );
}
