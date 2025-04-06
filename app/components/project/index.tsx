import { useTranslation } from "react-i18next";
import { data } from "./data";

import "./styles.scss";

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
                    <div className="title">{d.title}</div>
                    <div className="content">{d.content}</div>
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
