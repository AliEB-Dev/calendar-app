import { Outlet } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import AddItemModal from "../components/shared/AddItemModal";

function MainLayout() {
  return (
    <div className="min-h-screen relative pb-15">
        <main>
            <Outlet />
        </main>

        <Menu/>
        <AddItemModal/>
    </div>
  )
}

export default MainLayout