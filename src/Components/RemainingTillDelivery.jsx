import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const RemainingTillDelivery = () => {
    const { totalSum } = useContext(CartContext);
    return (
        <div className="mt-8 text-center">
            <p className="text-p">{`$${300 - totalSum.toFixed()} till free delivery!`}</p>
            <Link
                to="/products"
                className="mt-4 inline-block underline"
                state={{ baseUrl: "/" }}
            >
                Continue Shopping
            </Link>
        </div>
    );
};

export default RemainingTillDelivery;
