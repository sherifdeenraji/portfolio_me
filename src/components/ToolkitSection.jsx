import { skills } from '../data/portfolio';
import { SkillMarquee } from './SkillMarquee';

export function ToolkitSection() {
  return (
    <section className="stack-section" id="stack" aria-labelledby="stack-title">
      <div className="section-heading stack-heading">
        <div><p className="section-kicker">Tools I work with</p><h2 id="stack-title">My toolkit</h2></div>
        {/* <p>These are the tools I use to build<br className="desktop-break" /> web products and APIs.</p> */}
      </div>
      <SkillMarquee />
    </section>
  );
}

