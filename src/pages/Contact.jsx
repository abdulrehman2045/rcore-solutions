import { useState } from 'react';
import { Mail, MessageCircle, Clock } from 'lucide-react';
import { Seo } from '../components/UI.jsx';
import { services } from '../data/content.js';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const f = (label, name, type = 'text', req) => <label>{label}<input name={name} type={type} required={req} /></label>;
  return (<>
    <Seo title="Contact" description="Tell RCore Solutions about your project and what you want to improve." />
    <section className="page-hero"><div className="wrap"><h1>Let's Build Something Useful.</h1><p className="lead">Tell us what you're working on. We'll reply to discuss the next step.</p></div></section>
    <section className="section"><div className="wrap contact">
      {sent ? <div className="callout"><h2>Inquiry ready</h2><p>This demo site has no backend, so nothing was sent. Connect the form to your preferred service to receive inquiries.</p></div> :
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <div className="two">{f('Name', 'name', 'text', true)}{f('Business Name', 'business')}</div>
          <div className="two">{f('Email', 'email', 'email', true)}{f('Phone / WhatsApp', 'phone', 'tel')}</div>
          <div className="two">
            <label>Service Needed<select name="service">{services.map((s) => <option key={s.slug}>{s.name}</option>)}</select></label>
            <label>Budget Range<select name="budget"><option>Not sure yet</option><option>Small project</option><option>Medium project</option><option>Large project</option></select></label>
          </div>
          <label>Project Details<textarea name="details" rows="5" required /></label>
          <button className="btn btn-primary" type="submit">Send Inquiry</button>
        </form>}
      <aside className="stack">
        <div className="line"><MessageCircle size={18} /><h3>WhatsApp</h3><p><a href="https://wa.me/923184077453" target="_blank" rel="noreferrer">+92 318 4077453</a></p></div>
        <div className="line"><Mail size={18} /><h3>Email</h3><p><a href="mailto:rcoresolutions011@gmail.com">rcoresolutions011@gmail.com</a></p></div>
        <div className="line"><Clock size={18} /><h3>Business Hours</h3><p>9:00 AM – 5:00 PM · 8:00 PM – 5:00 AM</p></div>
      </aside>
    </div></section>
  </>);
}
