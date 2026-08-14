import { useTranslation } from "react-i18next";
import AboutSection from "../About/AboutSection";

function PrivacyContent() {
    const { t } = useTranslation();

    return (
        <article className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800">
                {t("privacy.title")}
            </h2>

            <p className="mt-2 text-sm text-gray-400">
                {t("privacy.lastUpdated")}
            </p>

            <div className="mt-8 space-y-7 text-sm leading-7 text-gray-600">
                <AboutSection title={t("privacy.yourPrivacyTitle")}>
                    {t("privacy.yourPrivacyText")}
                </AboutSection>

                <AboutSection title={t("privacy.dataCollectionTitle")}>
                    {t("privacy.dataCollectionText")}
                </AboutSection>

                <AboutSection title={t("privacy.dataStorageTitle")}>
                    {t("privacy.dataStorageText")}
                </AboutSection>

                <AboutSection title={t("privacy.securityTitle")}>
                    {t("privacy.securityText")}
                </AboutSection>

                <AboutSection title={t("privacy.changesTitle")}>
                    {t("privacy.changesText")}
                </AboutSection>
            </div>
        </article>
    );
}

export default PrivacyContent;