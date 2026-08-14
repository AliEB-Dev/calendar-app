import { useTranslation } from "react-i18next";

function useDirection() {
  const { i18n } = useTranslation();

  const isRTL = i18n.dir() === "rtl";

  return {
    isRTL,
    isLTR: !isRTL,
    direction: i18n.dir(),
  };
}

export default useDirection;