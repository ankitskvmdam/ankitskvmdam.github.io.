import "./styles.scss";
import { data } from "./data";

export function Experience() {
  return (
    <div className="section rel experience">
      <div className="section-wrapper section-padding">
        <h1 className="slash slash-heading">/experience</h1>

        <div className="experiences">
          {data.map((exp) => (
            <div key={exp.id} className="exp-wrapper">
              <span className="slash slash-small">{exp.slash}</span>
              <span className="title">{exp.title}</span>
              <div className="section-p rel">
                <p>{exp.content}</p>
                <div className={`logo-container ${exp.id}`}>{<exp.logo />}</div>
              </div>

              <div className="projects">
                {exp.notableProjects.map((project) => (
                  <div className="project" key={project.id}>
                    <span className="slash slash-small">{project.slash}</span>
                    <span className="title">{project.title}</span>
                    <p className="section-p">{project.content}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
