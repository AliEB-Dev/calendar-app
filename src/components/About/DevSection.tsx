import { useTranslation } from "react-i18next";
import SocialLinks from "./SocialLinks";
import devimg from "../../assets/img/AliEbrahimzade.jpg"
function DevSection(){
    const {t} = useTranslation();
    return(
        <div className="p-2 py-5 my-5 shadow-sm w-full border border-gray-200 rounded-lg">
            <h2 className="text-lg font-bold mb-4">{t("about.developerTitle")}</h2>
            <div className="flex items-center gap-4 m-2">
                <img
                    src={devimg}
                    alt={t("about.developerName")}
                    className="w-24 h-24 md:w-28 md:h-28 shrink-0 rounded-full object-contain bg-black"
                />       
                <div className="flex flex-col">
                    <h3 className="font-bold">{t("about.developerName")}</h3>
                    <span className="text-(--Primary)">{t("about.developerRole")}</span>
                    <span className="text-gray-500 break-words">{t("about.developerDescription")}</span>
                </div>
            </div>
            <SocialLinks/>
        </div>
    )
}
export default DevSection;