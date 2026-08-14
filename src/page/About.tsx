import { useTranslation } from "react-i18next";

import AboutSection from "../components/About/AboutSection";
import DevSection from "../components/About/DevSection";
import PageHeader from "../components/PageHeader";

function About() {
  const { t } = useTranslation();

  return (
    <div className="p-2 md:p-8 mb-15">
      <div className="mx-auto max-w-3xl">

        <PageHeader title={t("about.title")} />

        <AboutSection title={t("about.projectTitle")}>
          <p>{t("about.projectText")}</p>
        </AboutSection>

        <DevSection />
        
      </div>
    </div>
  );
}

export default About;