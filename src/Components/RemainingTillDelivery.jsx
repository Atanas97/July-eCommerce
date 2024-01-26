import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const RemainingTillDelivery = () => {
    const { totalSum } = useContext(CartContext);
    return (
        <div className="text-center mt-8">
            <p className="text-p">{`$${300 - totalSum.toFixed()} till free delivery!`}</p>
            <Link to="/products" className="inline-block underline mt-4" state={{ baseUrl: "/" }}>
                Continue Shopping
            </Link>
        </div>
    );
};

export default RemainingTillDelivery;
