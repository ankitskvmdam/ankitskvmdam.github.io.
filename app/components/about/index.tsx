import { Trans, useTranslation } from "react-i18next";
import "./styles.scss";
import { AboutUsTimeline } from "./timeline";

export function About() {
  const { t } = useTranslation("home");
  return (
    <div className="section rel about">
      <div className="section-wrapper section-padding">
        <h1 className="slash slash-heading">/about</h1>
        <p className="section-p about-me">
          <Trans t={t} i18nKey="about_me" components={[<br key="break" />]} />
        </p>

        <div>
          <h2 className="slash slash-subheading">/about/timeline</h2>

          <AboutUsTimeline />
        </div>
      </div>
    </div>
  );
}
