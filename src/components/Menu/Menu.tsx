import { menuItems } from "./menuItems";
import MenuItem from "./MenuItem";
import FloatingButton from "./FloatingButton";
function Menu() {
  return (
    <>
    <div  dir="rtl" className="fixed bottom-3  right-4  w-11/12 border rounded-2xl border-slate-200  bg-white lg:hidden md:w-9/12 md:right-25 md:bottom-10 md:text-3xl p-3 ">
        <nav className="max-w-md mx-auto">
            <ul className="flex gap-3 justify-around items-center">
               {menuItems.map((item, index) => {
                    if (!item.path || !item.titleKey) {
                        return (
                            <li
                                key={index}
                                className="flex flex-col flex-1 items-center relative"
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
    </>
  )
}

export default Menu