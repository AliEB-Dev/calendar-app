import { FaPlus } from "react-icons/fa";
import { useAppDispatch } from "../../store/hooks";
import { openAddItemModal } from "../../store/slices/modalSlice";

function FloatingButton() {
  const dispatch = useAppDispatch()
   return (
    <button
      type="button"
      onClick={() => dispatch(openAddItemModal())}
      className="
        absolute -top-14 -right-7.5
        w-12 h-12
        rounded-full
        bg-(--Primary)
        border-4 border-white
        shadow-2xs
        shadow-gray-300
        flex items-center justify-center
        transition-transform duration-200
        hover:scale-115
        active:scale-95
        lg:top-29 lg:right-0
      "
    >
      <FaPlus size={20} className="text-white" />
    </button>
  );
}

export default FloatingButton