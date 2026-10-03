import { Seo, Cta, Head } from '../components/UI.jsx';

const build = ['Websites', 'Business Software', 'CRM', 'ERP', 'SaaS', 'AI Automation', 'Custom Systems'];
export default function About() {
  return (<>
    <Seo title="About" description="RCore Solutions is a software house focused on practical digital solutions for businesses." />
    <section className="page-hero"><div className="wrap"><h1>About RCore Solutions</h1><p className="lead">A software house focused on building practical digital solutions for businesses.</p></div></section>
    <section className="section"><div className="wrap split">
      <div><h2>Who We Are</h2><p>RCore Solutions designs and builds websites, business software and automation. We work with owners and teams who want their systems to fit their business, not the other way round.</p></div>
      <div><h2>What We Believe</h2><p>Technology should solve problems rather than create unnecessary complexity.</p></div>
    </div></section>
    <section id="approach" className="section alt"><div className="wrap">
      <Head title="Our Approach" />
      <div className="grid4">{['Understand', 'Design', 'Build', 'Improve'].map((t, i) => <div key={t} className="line"><h3>{i + 1}. {t}</h3></div>)}</div>
    </div></section>
    <section className="section"><div className="wrap split">
      <div><h2>What We Build</h2><ul className="tags">{build.map((b) => <li key={b}>{b}</li>)}</ul></div>
      <div className="workspace" role="img" aria-label="Illustration of a team workspace with planning boards and a screen"><i /><i /><i /><b /></div>
    </div></section>
    <section className="section alt"><div className="wrap split">
      <div className="callout"><h2>Our Vision</h2><p>“To help businesses use technology as a practical advantage.”</p></div>
      <div className="callout"><h2>Our Mission</h2><p>“Build reliable digital solutions around real business needs.”</p></div>
    </div></section>
    <Cta />
  </>);
}
