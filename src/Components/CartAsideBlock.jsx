import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import RemainingTillDelivery from "./RemainingTillDelivery";

const CartAsideBlock = () => {
    const { totalSum } = useContext(CartContext);

    let shippingInfo;
    if (totalSum < 300)
        shippingInfo = (
            <p className="text-center border-b border-[#ccc] pb-4">
                Shop till $300 for a free shipping.
            </p>
        );

    return (
        <>
            <h2 className="text-h2 my-8 lg:mt-0">Order Summary</h2>
            <div className="sticky top-8 rounded-lg bg-[#f7f8f9] p-8">
                <div className="flex justify-between py-4 border-b border-[#ccc]">
                    <p>Total:</p>
                    <span className="text-h2 font-normal">${totalSum.toFixed()}</span>
                </div>
                <div className="flex justify-between py-4">
                    <p>Delivery:</p>
                    <span>
                        {totalSum > 300 ? (
                            "Free shipping"
                        ) : (
                            <p className="text-h4 font-normal">$50</p>
                        )}
                    </span>
                </div>
                {shippingInfo}
                <div className="flex justify-between py-4">
                    <p>
                        Total: <small>(vat included)</small>
                    </p>
                    <span className="text-h2 font-normal">${totalSum.toFixed()}</span>
                </div>

                <Link
                    to="/"
                    className="block bg-black w-full text-white text-center rounded-lg p-4"
                >
                    Checkout
                </Link>

                {totalSum < 300 && <RemainingTillDelivery />}
            </div>
        </>
    );
};

export default CartAsideBlock;
