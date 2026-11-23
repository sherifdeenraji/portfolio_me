import { useState } from 'react';
import { profile } from '../data/portfolio';
import { Icon } from './Icon';

function SocialLink({ label, href, icon }) {
  const [iconFailed, setIconFailed] = useState(false);

  return (
    <a className={`social-link${icon === 'linkedin' ? ' social-linkedin' : ''}`} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
      {icon === 'mail' ? <Icon>mail</Icon> : iconFailed && icon === 'linkedin' ? <span aria-hidden="true">in</span> : (
        <img
          src={`https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/${icon}.svg`}
          alt=""
          loading="lazy"
          onError={() => setIconFailed(true)}
        />
      )}
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <a className="footer-name" href="#home">{profile.name} <span>© {new Date().getFullYear()}</span></a>
      <p>Find me online or get in touch.</p>
      <div className="social-links">
        <SocialLink label="GitHub" href={`https://github.com/${profile.github}`} icon="github" />
        <SocialLink label="LinkedIn" href={`https://www.linkedin.com/in/${profile.linkedin}`} icon="linkedin" />
        <SocialLink label="X" href={`https://x.com/${profile.twitter}`} icon="x" />
        <SocialLink label="Email Sherifdeen" href={`mailto:${profile.email}`} icon="mail" />
      </div>
    </footer>
  );
}
