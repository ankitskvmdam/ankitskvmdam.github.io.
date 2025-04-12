import { Trans, useTranslation } from "react-i18next";
import "./styles.scss";
import { Background } from "./background";

export function Landing() {
  const { t } = useTranslation("home");
  return (
    <div className="section rel section-bottom-br section-primary-bg landing">
      <div className="section-wrapper section-padding">
        <h1 className="slash slash-heading">/home</h1>
        <div className="landing-intro">
          <div className="name-wrapper">
            <span className="slash slash-small">/home/name</span>
            <span className="name">{t("ankit_kumar")}</span>
          </div>

          <div className="intro-wrapper">
            <span className="slash slash-small">/home/intro</span>
            <p>
              <Trans
                t={t}
                i18nKey="intro"
                components={[<strong key="strong" />, <br key="break" />]}
              />
            </p>
          </div>
        </div>
      </div>
      <div className="background-container">
        <Background />
      </div>
    </div>
  );
}
