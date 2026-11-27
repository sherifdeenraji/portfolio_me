import { projects } from '../data/portfolio';
import { Icon } from './Icon';

function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.className}`}>
      <div className={`project-art ${project.className}-art`} aria-hidden="true">
        <img className="project-image" src={project.image} alt="" />
        {/* <span className="project-mark">{project.name.slice(0, 1)}</span>
        <span className="art-orbit orbit-one" />
        <span className="art-orbit orbit-two" />
        <span className="art-chip"><Icon>{project.symbol}</Icon></span> */}
      </div>
      <div className="project-copy">
        <div>
          <p className="project-type">{project.type}</p>
          <h3>{project.name}</h3>
          <p className="project-description">{project.description}</p>
        </div>
        <a className="project-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}>
          <Icon>arrow_outward</Icon>
        </a>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section className="work-section" id="work" aria-labelledby="work-title">
      <div className="section-heading work-heading">
        <div><p className="section-kicker">Selected projects</p><h2 id="work-title">A few things I’ve built</h2></div>
        <p>See what each project does<br className="desktop-break" /> and explore the live work.</p>
      </div>
      <div className="project-grid">{projects.map((project) => <ProjectCard key={project.name} project={project} />)}</div>
    </section>
  );
}

