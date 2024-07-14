import { useTranslation } from "react-i18next";
import { Section, SectionWrapper } from "../section";
import styles from "./style.module.scss";
import { LandingAirplaneScene } from "./scene";

export function Landing() {
  const { t } = useTranslation();
  return (
    <>
      <Section>
        <SectionWrapper>
          <div className={styles["welcome-container"]}>
            <h1 className={styles["welcome-title"]}>{t("welcomeTitle")}</h1>
            <p className={styles["welcome-description"]}>
              {t("welcomeDescription")}
            </p>
          </div>
          <LandingAirplaneScene />
        </SectionWrapper>
      </Section>
    </>
  );
}
