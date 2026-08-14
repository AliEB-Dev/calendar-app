import { useTranslation } from "react-i18next";
import PrivacyContent from "../components/Privacy/PrivacyContent";
import PageHeader from "../components/PageHeader";

function Privacy() {
    const { t } = useTranslation();

    return (
        <div className="p-2 md:p-8 mb-5">
            <PageHeader title={t("privacy.title")} />            
            <PrivacyContent />
        </div>
    );
}

export default Privacy;