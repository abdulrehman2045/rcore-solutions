import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function Seo({
  title,
  description,
  type = 'website',
  image = '/favicon.png',
  noIndex = false,
}) {
  useEffect(() => {
    const siteName = 'RCore Solutions';
    const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Software House & Digital Solutions`;
    const canonicalUrl = `${window.location.origin}${window.location.pathname}`;

    document.title = fullTitle;

    const upsertMeta = (selector, attrs, content) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const upsertLink = (rel, href) => {
      let el = document.head.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    upsertMeta('meta[name="description"]', { name: 'description' }, description);
    upsertMeta('meta[name="robots"]', { name: 'robots' }, noIndex ? 'noindex,nofollow' : 'index,follow');
    upsertMeta('meta[name="theme-color"]', { name: 'theme-color' }, '#fc6e02');

    upsertMeta('meta[property="og:title"]', { property: 'og:title' }, fullTitle);
    upsertMeta('meta[property="og:description"]', { property: 'og:description' }, description);
    upsertMeta('meta[property="og:type"]', { property: 'og:type' }, type);
    upsertMeta('meta[property="og:url"]', { property: 'og:url' }, canonicalUrl);
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name' }, siteName);
    upsertMeta('meta[property="og:image"]', { property: 'og:image' }, `${window.location.origin}${image}`);

    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image');
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, fullTitle);
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, description);
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, `${window.location.origin}${image}`);

    upsertLink('canonical', canonicalUrl);

    let schema = document.head.querySelector('script[data-rcore-schema]');
    if (!schema) {
      schema = document.createElement('script');
      schema.type = 'application/ld+json';
      schema.dataset.rcoreSchema = 'true';
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${window.location.origin}/#organization`,
          name: siteName,
          url: window.location.origin,
          logo: `${window.location.origin}/favicon.png`,
          email: 'rcoresolutions011@gmail.com',
          telephone: '+923184077453',
          sameAs: []
        },
        {
          '@type': 'WebSite',
          '@id': `${window.location.origin}/#website`,
          url: window.location.origin,
          name: siteName,
          publisher: { '@id': `${window.location.origin}/#organization` }
        },
        {
          '@type': 'WebPage',
          '@id': `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: fullTitle,
          description,
          isPartOf: { '@id': `${window.location.origin}/#website` },
          about: { '@id': `${window.location.origin}/#organization` }
        }
      ]
    });
  }, [title, description, type, image, noIndex]);

  return null;
}

export const Btn = ({ to, href, variant = 'primary', children }) =>
  to ? <Link className={`btn btn-${variant}`} to={to}>{children}</Link>
    : <a className={`btn btn-${variant}`} href={href}>{children}</a>;

export const Head = ({ title, text, wide }) => (
  <header className={`head ${wide ? 'wide' : ''}`}><h2>{title}</h2>{text && <p>{text}</p>}</header>
);

export function Faq({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {items.map(([q, a], i) => (
        <div key={q} className={`faq-item ${open === i ? 'open' : ''}`}>
          <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>{q}<ChevronDown size={18} /></button>
          {open === i && <p>{a}</p>}
        </div>
      ))}
    </div>
  );
}

export const Cta = ({ title = 'Have A Business Problem We Can Solve?', text = "Tell us what you're trying to improve. We'll help you explore the right digital solution." }) => (
  <section className="section"><div className="wrap cta">
    <div><h2>{title}</h2><p>{text}</p></div>
    <div className="cta-btns"><Btn to="/contact" variant="light">Start a Conversation</Btn><Btn href="https://wa.me/923184077453" variant="ghost">WhatsApp Us</Btn></div>
  </div></section>
);

export const Link2 = ({ to, children }) => <Link className="more" to={to}>{children}<ArrowRight size={16} /></Link>;

// Illustrative interface mock-up (not real client data)
export function Mock({ name = 'RCore Business' }) {
  const bars = [38, 55, 44, 70, 62, 85, 74];
  return (
    <div className="mock" role="img" aria-label={`${name} dashboard preview`}>
      <div className="mock-bar"><i /><i /><i /><span>{name}</span></div>
      <div className="mock-body">
        <aside>{['Dashboard', 'Leads', 'Customers', 'Tasks', 'Reports'].map((t, i) => <b key={t} className={i === 0 ? 'on' : ''}>{t}</b>)}</aside>
        <div className="mock-main">
          <div className="mock-kpis">{['New leads', 'Follow-ups due', 'Open tasks'].map((t) => <div key={t}><small>{t}</small><span /></div>)}</div>
          <div className="mock-chart">{bars.map((h, i) => <em key={i} style={{ height: `${h}%` }} />)}</div>
          <div className="mock-rows">{[0, 1, 2].map((r) => <div key={r}><span /><span /><u /></div>)}</div>
        </div>
      </div>
    </div>
  );
}
