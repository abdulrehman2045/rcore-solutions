import { Seo, Head, Cta, Btn } from '../components/UI.jsx';
import { process } from '../data/content.js';

export function Process() {
  return (<>
    <Seo title="Our Process" description="How RCore Solutions takes a project from first conversation to ongoing support." />
    <section className="page-hero"><div className="wrap"><h1>Our Process</h1><p className="lead">Five steps, with clear communication at each one.</p></div></section>
    <section className="section"><div className="wrap">
      <ol className="steps">{process.map(([t, d], i) => <li key={t}><span>{String(i + 1).padStart(2, '0')}</span><h3>{t}</h3><p>{d}</p></li>)}</ol>
    </div></section>
    <Cta />
  </>);
}

export function Careers() {
  return (<>
    <Seo title="Careers" description="Careers at RCore Solutions." />
    <section className="page-hero"><div className="wrap"><h1>Careers</h1><p className="lead">We're always interested in developers and designers who care about practical software.</p></div></section>
    <section className="section"><div className="wrap narrow"><Head title="Open positions" text="There are no open roles listed right now. Send us your details and what you like to work on, and we'll keep them on file." /><Btn to="/contact">Get in touch</Btn></div></section>
  </>);
}
