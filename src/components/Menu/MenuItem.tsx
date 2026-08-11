import { useTranslation } from "react-i18next";
import type { IconType } from "react-icons";
import { NavLink } from "react-router-dom";

interface MenuItemProps {
  titleKey: string;
  path: string;
  icon: IconType;
}

function MenuItem({ titleKey, path, icon: Icon }: MenuItemProps) {
  const {t} = useTranslation();
  return (
    <li className="flex flex-col flex-1 items-center text-[15px] hover:bg-gray-100 md:text-xl  " >
      <NavLink
        to={path}
        className="flex flex-col items-center gap-1"
      >
        {({ isActive }) => (
          <>
            <Icon
              size={25}
              className={
                isActive
                  ? "text-(--Primary)"
                  : ""
              }
            />

            <span
              className={
                isActive
                  ? "text-(--Primary) font-bold"
                  : ""
              }
            >
              {t(titleKey)}
            </span>
          </>
        )}
      </NavLink>
    </li>
  );
}
export default MenuItem;