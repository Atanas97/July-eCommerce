import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

import EmptyCartIcon from "../Assets/unDraw/empty_cartslide_img.svg";

const EmptyCartSlide = () => {
    const { setIsCartSlideOpen } = useContext(CartContext);

    return (
        <div className="rounded-xl bg-neutral-100 p-8 text-center">
            <p className="mb-4 text-p">Your cart is empty.</p>
            <Link
                to="/wishlist"
                className="underline"
                onClick={() => setIsCartSlideOpen(false)}
            >
                Add from wishlist
            </Link>
            <img
                className="mt-8 block pb-5"
                src={EmptyCartIcon}
                alt="July empty cart state"
            />
        </div>
    );
};

export default EmptyCartSlide;
