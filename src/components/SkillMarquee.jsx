import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

function SkillSet({ duplicate = false }) {
  return (
    <div className="skill-set" aria-hidden={duplicate || undefined}>
      {skills.map((skill) => (
        <span className="skill" key={skill.name}>
          <img src={`https://devicons.io/devicons/icons/${skill.icon}.svg`} alt="" loading="lazy" />
          {skill.name}
        </span>
      ))}
    </div>
  );
}

export function SkillMarquee() {
  const railRef = useRef(null);
  const trackRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      railRef.current?.classList.add('reduce-motion');
      return undefined;
    }

    const animation = gsap.to(trackRef.current, {
      xPercent: -50,
      duration: 38,
      ease: 'none',
      repeat: -1,
    });
    const directionTrigger = ScrollTrigger.create({
      trigger: railRef.current,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (trigger) => animation.timeScale(trigger.direction),
    });

    animationRef.current = animation;
    return () => {
      directionTrigger.kill();
      animation.kill();
    };
  }, []);

  const pause = () => animationRef.current?.pause();
  const resume = () => animationRef.current?.play();

  return (
    <div
      className="skill-rail"
      ref={railRef}
      role="region"
      aria-label="Technologies and tools"
      onMouseEnter={pause}
      onTouchStart={pause}
      onMouseLeave={resume}
      onTouchEnd={resume}
      onFocus={pause}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) resume(); }}
    >
      <div className="skill-track" ref={trackRef}>
        <SkillSet />
        <SkillSet duplicate />
      </div>
    </div>
  );
}
