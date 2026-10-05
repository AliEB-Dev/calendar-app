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
    <li className="flex items-center text-[15px] hover:bg-gray-100 md:text-xl dark:hover:bg-(--bg-item-dark-hover) lg:flex-row lg:w-0/12" >
      <NavLink
        to={path}
        className="flex flex-col lg:flex-row items-center gap-1"
      >
        {({ isActive }) => (
          <>
            <Icon
              className={`w-[25px] h-[25px] lg:w-[40px] lg:h-[40px] mr-1.5 ${
                          isActive ? "text-(--Primary)" : ""
                        }`}
            />

            <span
              className={
                `${
                isActive
                  ? "text-(--Primary) font-bold"
                  : ""
                } lg:hidden`
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