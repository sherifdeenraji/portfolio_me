import { profile } from '../data/portfolio';
import { Icon } from './Icon';

export function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="section-heading about-heading">
        <div><p className="section-kicker">About me</p><h2 id="about-title">Builder first.</h2></div>
      </div>
      <div className="about-body">
        {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {profile.achievements?.length > 0 && (
          <ul className="about-achievements">
            {profile.achievements.map((achievement) => (
              <li key={achievement}><Icon>emoji_events</Icon> {achievement}</li>
            ))}
          </ul>
        )}
        <div className="about-actions">
          <a className="button button-primary" href={profile.resume} target="_blank" rel="noreferrer">View my resume <Icon>description</Icon></a>
          <a className="text-link" href={`mailto:${profile.email}`}>Get in touch <Icon>arrow_outward</Icon></a>
        </div>
      </div>
    </section>
  );
}
