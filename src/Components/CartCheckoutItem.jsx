import React, { useContext } from "react";
import { FiX } from "react-icons/fi";
import { CartContext } from "../Context/CartContext";

const CartCheckoutItem = ({ item }) => {
    const { removeCartItem } = useContext(CartContext);
    const { id, title, image, amount, price } = item;
    return (
        <div className="relative items-start justify-start gap-8 border-b border-[#ccc] py-8 lg:flex">
            <div className="mb-8 flex items-start gap-8">
                <picture className="h-[6rem] w-[6rem] flex-none lg:h-[10rem] lg:w-[10rem]">
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-contain"
                    />
                </picture>
                <div className="lg:w-[45rem]">
                    <h3 className="text-balance pr-8 text-h4 font-normal">
                        {title}
                    </h3>
                </div>
            </div>
            <div className="inline-block w-1/3 text-left">
                <p className="text-p font-medium">price</p>
                <p className="text-p">${price}</p>
            </div>
            <div className="inline-block w-1/3 text-center">
                <p className="text-p font-medium">amount</p>
                <p className="text-p">{amount}</p>
            </div>
            <div className="inline-block w-1/3 text-right">
                <p className="text-p font-medium">total price</p>
                <p className="text-p">${price * amount}</p>
            </div>
            <button
                onClick={() => removeCartItem(id)}
                className="absolute right-0 top-8 w-[initial] lg:static lg:self-center"
            >
                <FiX size={24} />
            </button>
        </div>
    );
};

export default CartCheckoutItem;
