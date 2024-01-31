import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const EmptyCartSlide = () => {
    const { setIsCartSlideOpen } = useContext(CartContext);

    return (
        <div className="text-center p-8 bg-neutral-100">
            <p className="text-p mb-4">Your cart is empty.</p>
            <Link to="/wishlist" className="underline" onClick={() => setIsCartSlideOpen(false)}>
                Add from wishlist
            </Link>
        </div>
    );
};

export default EmptyCartSlide;
