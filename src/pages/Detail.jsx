import { Navigate, useParams } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Seo, Btn, Head, Cta, Faq, Mock, Link2 } from '../components/UI.jsx';
import { services, products, industries, process, faqsCommon } from '../data/content.js';

const sets = { services, products, industries };
const copy = {
  services: { eyebrowless: 'Service', feat: 'What is included', approach: 'How we approach it', cta: 'Discuss This Service' },
  products: { feat: 'Features', approach: 'How teams use it', cta: 'Request a Demo' },
  industries: { feat: 'What we build for this sector', approach: 'Example workflow', cta: 'Discuss Your Business' },
};
const benefits = {
  services: ['Built around your workflow', 'Clear scope and plain updates', 'Support after launch'],
  products: ['Faster to adopt than a custom build', 'Configurable to your process', 'Improvements as you grow'],
  industries: ['Less manual follow-up', 'One place for customer records', 'More time for customers'],
};

export default function Detail({ kind }) {
  const { slug } = useParams();
  const item = sets[kind].find((x) => x.slug === slug);
  if (!item) return <Navigate to={`/${kind}`} replace />;
  const c = copy[kind];
  const related = kind === 'industries' ? services.filter((s) => ['web-development', 'crm-development', 'ai-automation'].includes(s.slug)) : [];
  const isProduct = kind === 'products';

  return (<>
    <Seo title={item.name} description={item.desc} />
    <section className="page-hero"><div className={`wrap ${isProduct ? 'hero-in' : ''}`}>
      <div><h1>{item.name}</h1><p className="lead">{item.desc}</p>
        <div className="row"><Btn to="/contact">{c.cta}</Btn><Btn to={`/${kind}`} variant="ghost">All {kind}</Btn></div></div>
      {isProduct && <Mock name={item.name} />}
    </div></section>

    <section className="section"><div className="wrap split">
      <div><h2>{kind === 'industries' ? 'The challenge' : 'The problem'}</h2><p>{item.problem}</p></div>
      <div className="callout"><h2>{kind === 'industries' ? 'How RCore helps' : 'Our solution'}</h2><p>{item.solution}</p></div>
    </div></section>

    <section className="section alt"><div className="wrap">
      <Head title={c.feat} />
      <ul className={kind === 'services' ? 'grid3 plain' : 'grid3 plain tight'}>
        {item.features.map((f) => <li key={f} className="pill"><Check size={16} />{f}</li>)}
      </ul>
    </div></section>

    {related.length > 0 && <section className="section"><div className="wrap">
      <Head title="Recommended solutions" />
      <div className="grid3">{related.map((r) => <article key={r.slug} className="card"><h3>{r.name}</h3><p>{r.desc}</p><Link2 to={r.to}>Explore Service</Link2></article>)}</div>
    </div></section>}

    <section className="section"><div className="wrap">
      <Head title={c.approach} />
      <ol className="steps">{process.map(([t, d], i) => <li key={t}><span>{String(i + 1).padStart(2, '0')}</span><h3>{t}</h3><p>{d}</p></li>)}</ol>
    </div></section>

    <section className="section alt"><div className="wrap split">
      <div><h2>Business benefits</h2></div>
      <div className="stack">{benefits[kind].map((b) => <div key={b} className="line"><h3>{b}</h3></div>)}</div>
    </div></section>

    <section className="section"><div className="wrap narrow"><Head title="Questions we hear" /><Faq items={[[item.q, item.a], ...faqsCommon]} /></div></section>
    <Cta />
  </>);
}
