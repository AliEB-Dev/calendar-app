import { useTranslation } from "react-i18next";
import AboutSection from "../About/AboutSection";

function HelpContent() {
    const { t } = useTranslation();

    return (
        <article className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800">
                {t("help.title")}
            </h2>

            <p className="mt-2 text-sm text-gray-400">
                {t("help.description")}
            </p>

            <div className="mt-8 space-y-7 text-sm leading-7 text-gray-600">
                <AboutSection title={t("help.gettingStartedTitle")}>
                    {t("help.lorem")}
                </AboutSection>

                <AboutSection title={t("help.calendarTitle")}>
                    {t("help.lorem")}
                </AboutSection>

                <AboutSection title={t("help.remindersTitle")}>
                    {t("help.lorem")}
                </AboutSection>

                <AboutSection title={t("help.settingsTitle")}>
                    {t("help.lorem")}
                </AboutSection>

                <AboutSection title={t("help.contactTitle")}>
                    {t("help.lorem")}
                </AboutSection>
            </div>
        </article>
    );
}

export default HelpContent;