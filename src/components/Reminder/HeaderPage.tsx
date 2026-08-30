import { CiSearch } from "react-icons/ci"
import { useTranslation } from "react-i18next"
import type { IconType } from "react-icons"

interface HeaderPageProps {
  isSearch ?: boolean
  Icon : IconType
  title : string
}
function HeaderPage({isSearch,Icon,title}:HeaderPageProps) {
  const {t} = useTranslation()
  return (
    <header className="flex dark:text-(--color-text-bgdark)">
        <div className="flex items-center">
          {isSearch && <CiSearch size={30} className="text-purple-700"/>} 
       </div>
        <div className="flex w-full justify-center p-2 gap-2 font-bold">
            <Icon size={30} className="text-purple-700"/>
            <h1>{t(title)}</h1>
        </div>
    </header>
  )
}

export default HeaderPage ;