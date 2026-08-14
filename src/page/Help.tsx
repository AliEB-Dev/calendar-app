import { useTranslation } from "react-i18next";
import HelpContent from "../components/Help/HelpContent";
import PageHeader from "../components/PageHeader";

function Help() {
    const { t } = useTranslation();
    
    return (
        <div className="p-2 md:p-8 mb-5">
            <PageHeader title={t("help.title")} />            
            <HelpContent />
        </div>
    );
}

export default Help;