import { Trans, useTranslation } from "react-i18next";
import "./styles.scss";

export function Landing() {
  const { t } = useTranslation("home");
  return (
    <div className="section rel">
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
              <Trans t={t} i18nKey="intro" components={[<i key="italic" />]} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
