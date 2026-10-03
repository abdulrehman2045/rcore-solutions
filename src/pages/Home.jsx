import { Check } from 'lucide-react';
import { Seo, Btn, Head, Cta, Link2, Mock } from '../components/UI.jsx';
import { services, products, industries, process, why } from '../data/content.js';

export default function Home() {
  return (<>
    <Seo title="Technology Built Around Your Business" description="RCore Solutions builds websites, custom software, CRM, ERP, SaaS and AI automation for businesses." />
    <section className="hero"><div className="wrap hero-in">
      <div>
        <h1>Technology Built Around Your Business.</h1>
        <p className="lead">RCore Solutions builds websites, software and digital systems that help businesses operate smarter, serve customers better and grow with confidence.</p>
        <div className="row"><Btn to="/contact">Start a Project</Btn><Btn to="/services" variant="ghost">Explore Our Solutions</Btn></div>
        <ul className="chips">{['Custom Software', 'Business Websites', 'CRM & ERP', 'AI Automation'].map((c) => <li key={c}><Check size={14} />{c}</li>)}</ul>
      </div>
      <Mock name="RCore Business" />
    </div></section>

    <section className="section"><div className="wrap split">
      <div><h2>We Don't Just Build Software. We Build Business Solutions.</h2>
        <p>Every business works differently. Your business already has a way of working: how enquiries come in, who follows up, how orders are tracked. We build software around that workflow instead of forcing you into a complicated system.</p></div>
      <div className="stack">
        {[['Business First', 'Technology starts with understanding the business problem.'], ['Built To Scale', 'Solutions are structured so businesses can grow without constantly replacing their systems.'], ['Human Support', 'RCore Solutions works with clients beyond the initial development.']].map(([t, d]) => <div key={t} className="line"><h3>{t}</h3><p>{d}</p></div>)}
      </div>
    </div></section>

    <section className="section alt"><div className="wrap">
      <Head title="Everything Your Business Needs To Go Digital" />
      <div className="bento">
        {services.map((s, i) => {
          const I = s.icon; return (
            <article key={s.slug} className={`card ${i === 0 || i === 3 ? 'span2' : ''}`}><I className="ic" /><h3>{s.name}</h3><p>{s.desc}</p><Link2 to={s.to}>Explore Service</Link2></article>
          );
        })}
      </div>
    </div></section>

    <section className="section"><div className="wrap">
      <Head title="Our Digital Products" text="Ready-to-use software for the areas most businesses struggle to keep organised." />
      {products.map((p, i) => (
        <div key={p.slug} className={`feature ${i % 2 ? 'flip' : ''}`}>
          <div><h3>{p.name}</h3><p>{p.desc}</p><ul className="tick">{p.features.slice(0, 4).map((f) => <li key={f}><Check size={15} />{f}</li>)}</ul><Link2 to={p.to}>View {p.name}</Link2></div>
          <Mock name={p.name} />
        </div>
      ))}
      <div className="center"><Btn to="/products" variant="ghost">Explore All Products →</Btn></div>
    </div></section>

    <section className="section alt"><div className="wrap">
      <Head title="Built For Real Businesses" />
      <div className="grid4">
        {industries.map((x) => {
          const I = x.icon; return (
            <article key={x.slug} className="card"><I className="ic" /><h3>{x.name}</h3><p>{x.desc}</p><Link2 to={x.to}>View Solution</Link2></article>
          );
        })}
      </div>
    </div></section>

    <section className="section"><div className="wrap">
      <Head title="How We Work" />
      <ol className="steps">{process.map(([t, d], i) => <li key={t}><span>{String(i + 1).padStart(2, '0')}</span><h3>{t}</h3><p>{d}</p></li>)}</ol>
    </div></section>

    <section className="section alt"><div className="wrap">
      <Head title="Why Businesses Choose RCore Solutions" />
      <div className="grid4">{why.map(([t, d]) => <div key={t} className="line"><h3>{t}</h3><p>{d}</p></div>)}</div>
    </div></section>
    <Cta />
  </>);
}
