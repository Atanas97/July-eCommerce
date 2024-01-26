import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { CartContext } from "../Context/CartContext";

const mountElement = document.getElementById("cartOverlay");

const CartSlideOverlay = ({ children }) => {
    const { setIsCartSlideOpen } = useContext(CartContext);

    if (!setIsCartSlideOpen) {
        return;
    }
    return createPortal(
        <>
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-20 transition-opacity ease-in-out duration-500">
                {children}
            </div>
        </>,
        mountElement
    );
};

export default CartSlideOverlay;
