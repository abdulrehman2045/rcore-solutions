import { Seo, Head, Cta, Link2 } from '../components/UI.jsx';
import { services, products, industries } from '../data/content.js';

const cfg = {
  services: ['Services', 'Software, websites, CRM, ERP, SaaS, automation, design and support, delivered by one team.', services],
  products: ['RCore Products', 'Ready-to-use business software designed to simplify everyday operations.', products],
  industries: ['Solutions For Your Industry', 'Every sector has its own workflow. Here is how we apply software and websites to yours.', industries],
};

export default function Hub({ kind }) {
  const [title, text, items] = cfg[kind];
  return (<>
    <Seo title={title} description={text} />
    <section className="page-hero"><div className="wrap"><h1>{title}</h1><p className="lead">{text}</p></div></section>
    <section className="section"><div className="wrap grid3">
      {items.map((s) => { const I = s.icon; return (
        <article key={s.slug} className="card"><I className="ic" /><h2 className="h3">{s.name}</h2><p>{s.desc}</p><Link2 to={s.to}>Learn more</Link2></article>
      ); })}
    </div></section>
    <Cta />
  </>);
}
