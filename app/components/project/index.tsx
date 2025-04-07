import { Trans, useTranslation } from "react-i18next";
import { data } from "./data";

import "./styles.scss";
import { ToLink } from "../to-link";
import { GithubIcon, NPMIcon, WebsiteIcon } from "../icons";

export function Project() {
  const { t } = useTranslation("home");

  return (
    <div className="section rel project section-top-br section-primary-bg">
      <div className="section-wrapper">
        <table className="project-table">
          <thead>
            <tr>
              <th className="first-col">
                <h1 className="slash slash-heading">/projects</h1>
                {/* <div style="">
                  My open source projects that I worked out of curiosity of
                  because I love to code.
                </div> */}
              </th>
              <th className="second-col">
                <h1 className="slash slash-heading">/projects</h1>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.id}>
                <td className="first-col">
                  <div className="number">{d.number}</div>
                </td>
                <td>
                  <div className="data">
                    <div className="title">
                      <div className="slash slash-small">{d.slash}</div>
                      {d.title}
                    </div>
                    <div className="content">
                      <Trans
                        t={t}
                        i18nKey={`projects.${d.translationKey}.description`}
                        components={[
                          <ToLink key="link" />,
                          <br key="break" />,
                          <i key="italic" />,
                          <code key="code" />,
                          <strong key="strong" />,
                        ]}
                      />
                    </div>

                    <div className="links-container">
                      {d.links.map(({ href, type, id }) => (
                        <a href={href} key={id} target="_blank">
                          {type === "npm" && <NPMIcon className="npm" />}
                          {type === "github" && (
                            <GithubIcon className="github" />
                          )}
                          {type === "website" && (
                            <WebsiteIcon className="website" />
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
