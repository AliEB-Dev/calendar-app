import { menuItems } from "./menuItems";
import MenuItem from "./MenuItem";
import FloatingButton from "./FloatingButton";
function Menu() {
  return (
    <div  dir="rtl" className="fixed bottom-3 right-4 w-11/12 border rounded-2xl border-slate-200  bg-white md:w-8/12 md:right-35 md:bottom-10 md:text-3xl p-3 lg:left-[2px] lg:right-auto lg:bottom-20 lg:bg-transparent lg:w-1/12 lg:dark:bg-transparent lg:border-none dark:bg-(--bg-item-dark) dark:border-gray-700 dark:text-(--color-text-bgdark)">
        <nav className="max-w-md mx-auto">
            <ul className="flex lg:flex-col gap-3 justify-around lg:justify-start items-center">
               {menuItems.map((item, index) => {
                    if (!item.path || !item.titleKey) {
                        return (
                            <li
                                key={index}
                                className="relative"
                             >
                                <FloatingButton />
                            </li>
                        );}

                    return (
                        <MenuItem
                        key={index}
                        titleKey={item.titleKey}
                        path={item.path}
                        icon={item.icon}
                        />
                    );})}
            </ul>
        </nav>
         
    </div>
  )
}

export default Menu