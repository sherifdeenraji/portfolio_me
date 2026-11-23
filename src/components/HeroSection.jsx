import { useState } from 'react';
import { profile } from '../data/portfolio';
import { Icon } from './Icon';

export function HeroSection() {
  const firstName = profile.name.split(' ')[0];
  const portraitSrc ='https://res.cloudinary.com/dkc3adbz0/image/upload/v1756748817/head_shot_sherifdeen_zanvan.jpg';
  const [portraitLoaded, setPortraitLoaded] = useState(true);

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-copy" id="about">
        <p className="availability">JavaScript &amp; Python developer</p>
        <h1 id="hero-title">I build useful<br /><em>digital products.</em></h1>
        <p className="hero-intro">My name is {firstName}. I build useful<br className="desktop-break" /> web products and APIs.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore my work <Icon>arrow_downward</Icon></a>
          <a className="text-link" href={`mailto:${profile.email}`}>Get in touch <Icon>arrow_outward</Icon></a>
        </div>
      </div>
      <div className="hero-art">
        <div className="portrait-frame">
          {portraitLoaded ? (
            <img className="portrait-image" src={portraitSrc} alt={profile.name} onError={() => setPortraitLoaded(false)} />
          ) : (
            <div className="portrait-placeholder" role="status">
              <Icon>add_a_photo</Icon>
              <span>Add your photo at</span>
              <code>public/profile.jpg</code>
            </div>
          )}
        </div>
        {/* <span className="hero-art-note">Ideas into interfaces<br />and dependable systems.</span> */}
      </div>
      <a href="#stack" className="scroll-cue"><span /> Scroll to explore</a>
    </section>
  );
}



