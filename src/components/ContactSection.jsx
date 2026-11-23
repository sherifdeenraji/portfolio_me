import { profile } from '../data/portfolio';
import { Icon } from './Icon';

export function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div><p className="section-kicker">Have an idea you want to build?</p><h2 id="contact-title">Let’s make it<br /><em>happen.</em></h2></div>
      <a className="contact-button" href={`mailto:${profile.email}`}>Start a conversation <Icon>arrow_outward</Icon></a>
      <span className="contact-spark" aria-hidden="true">✳</span>
    </section>
  );
}

