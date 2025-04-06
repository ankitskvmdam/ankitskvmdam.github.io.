import "./styles.scss";
import { data } from "./data";
import { Trans, useTranslation } from "react-i18next";
import { ToLink } from "../to-link";

export function Experience() {
  const { t } = useTranslation("home");
  return (
    <div className="section rel experience">
      <div className="section-wrapper section-padding">
        <h1 className="slash slash-heading">/experience</h1>

        <div className="experiences">
          {data.map(
            ({
              translationBaseKey,
              id,
              logo: Logo,
              notableProjects,
              skills,
            }) => (
              <div key={id} className="exp-wrapper">
                <span className="slash slash-small">
                  {t(`experience.${translationBaseKey}.slash`)}
                </span>
                <span className="title">
                  {t(`experience.${translationBaseKey}.title`)}
                </span>
                <div className="skills">
                  {skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
                <div className="section-p rel">
                  <p>
                    <Trans
                      t={t}
                      i18nKey={`experience.${translationBaseKey}.intro`}
                      components={[<i key="italic" />, <ToLink key="link" />]}
                    />
                  </p>
                  <div className={`logo-container ${id}`}>{<Logo />}</div>
                </div>

                <div className="projects">
                  {notableProjects.map((_, project_idx) => (
                    <div className="project" key={project_idx}>
                      <span className="slash slash-small">
                        {t(
                          `experience.${translationBaseKey}.notable_projects_${
                            project_idx + 1
                          }_slash` as any
                        )}
                      </span>
                      <span className="title">
                        {t(
                          `experience.${translationBaseKey}.notable_projects_${
                            project_idx + 1
                          }_title` as any
                        )}
                      </span>
                      <p className="section-p">
                        {t(
                          `experience.${translationBaseKey}.notable_projects_${
                            project_idx + 1
                          }_intro` as any
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
