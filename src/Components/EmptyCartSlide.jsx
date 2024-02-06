import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

import EmptyCartIcon from "../Assets/unDraw/empty_cartslide_img.svg";

const EmptyCartSlide = () => {
    const { setIsCartSlideOpen } = useContext(CartContext);

    return (
        <div className="text-center p-8 rounded-xl bg-neutral-100">
            <p className="text-p mb-4">Your cart is empty.</p>
            <Link to="/wishlist" className="underline" onClick={() => setIsCartSlideOpen(false)}>
                Add from wishlist
            </Link>
            <img className="block mt-8 pb-5" src={EmptyCartIcon} alt="July empty cart state" />
        </div>
    );
};

export default EmptyCartSlide;
