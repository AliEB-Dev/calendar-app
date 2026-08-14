import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useDirection from "../hooks/useDirection";

interface PageHeaderProps {
    title: string;
}

function PageHeader({ title }: PageHeaderProps) {
    const navigate = useNavigate();
    const { isRTL } = useDirection();

    const handleBack = () => {
        navigate("/settings");
    };

    return (
        <div className="relative flex items-center justify-center mb-5 py-3 shadow-sm">
            <h1 className="text-xl font-bold">
                {title}
            </h1>

            <button
                type="button"
                onClick={handleBack}
                className="absolute start-0 flex items-center justify-center rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
            >
                {isRTL ? <FaChevronRight /> : <FaChevronLeft />}
            </button>
        </div>
    );
}

export default PageHeader;