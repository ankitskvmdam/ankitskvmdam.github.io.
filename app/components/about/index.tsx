import { Trans, useTranslation } from "react-i18next";
import "./styles.scss";
import { Signature } from "./signature";

export function About() {
  const { t } = useTranslation("home");
  return (
    <div className="section rel about">
      <div className="section-wrapper section-padding">
        <div className="about-bg" />
        <h1 className="slash slash-heading">/about</h1>

        <div className="about-me rel">
          <p>
            <Trans
              t={t}
              i18nKey="about_me"
              components={[<strong key="strong" />, <br key="break" />]}
            />
          </p>

          <div className="signature">
            <Signature />
          </div>
        </div>
      </div>
    </div>
  );
}
