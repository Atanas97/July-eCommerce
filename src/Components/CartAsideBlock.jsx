import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import RemainingTillDelivery from "./RemainingTillDelivery";

const CartAsideBlock = ({ handleSubmit }) => {
    const { totalSum } = useContext(CartContext);

    const handleClick = () => {
        handleSubmit();
    };

    let shippingInfo;
    if (totalSum < 300)
        shippingInfo = (
            <p className="border-b border-[#ccc] pb-4 text-center">
                Shop till $300 for a free shipping.
            </p>
        );

    return (
        <>
            <h2 className="my-8 text-h2 lg:mt-0">Order Summary</h2>
            <div className="sticky top-8 rounded-lg bg-[#f7f8f9] p-8">
                <div className="flex justify-between border-b border-[#ccc] py-4">
                    <p>Total:</p>
                    <span className="text-h2 font-normal">
                        ${totalSum.toFixed()}
                    </span>
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
                    <span className="text-h2 font-normal">
                        ${totalSum.toFixed()}
                    </span>
                </div>

                <button
                    type="submit"
                    onClick={handleClick}
                    className="block w-full rounded-lg bg-black p-4 text-center text-white"
                >
                    Checkout
                </button>

                {totalSum < 300 && <RemainingTillDelivery />}
            </div>
        </>
    );
};

export default CartAsideBlock;
