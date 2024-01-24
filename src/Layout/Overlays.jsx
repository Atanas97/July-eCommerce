import { createPortal } from "react-dom";

import { FiX } from "react-icons/fi";

const mountElement = document.getElementById("overlay");

const Overlays = ({ children, isOpened, onClose }) => {
    if (!isOpened) {
        return null;
    }
    return createPortal(
        <>
            <div className="fixed inset-0 z-20 h-full p-8 flex items-center flex-col bg-[rgba(26,26,26,.75)] overflow-auto md:overflow-hidden">
                <div className="mt-20">
                    <div className="w-full text-right">
                        <button onClick={onClose}>
                            <FiX color="white" size={24} />
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </>,
        mountElement
    );
};
export default Overlays;
