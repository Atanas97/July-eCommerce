import React, { useContext } from "react";
import { WishlistContext } from "../Context/WishlistContext";
import { CartContext } from "../Context/CartContext";

import { FiX, FiShoppingCart } from "react-icons/fi";

const WishlistCard = ({ product }) => {
    const { removeWishlist } = useContext(WishlistContext);
    const { addToCart } = useContext(CartContext);

    const { image, title, category, id } = product;
    return (
        <div className="relative border group border-[#ccc] rounded-sm p-8">
            <div className="flex flex-col gap-4 absolute right-0 top-4 md:opacity-0 transition-all ease-in-out delay-350 md:-right-10 md:group-hover:right-4 group-hover:opacity-100">
                <button
                    onClick={() => removeWishlist(id)}
                    className="bg-orange rounded-full flex items-center justify-center w-[5rem] h-[5rem]"
                >
                    <FiX size={24} color="white" />
                </button>
                <button
                    onClick={() => addToCart(id, product)}
                    className="bg-orange rounded-full flex items-center justify-center w-[5rem] h-[5rem]"
                >
                    <FiShoppingCart size={24} color="white" />
                </button>
            </div>

            <picture className="max-w-[25rem] mx-auto flex justify-center aspect-square">
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="max-h-[25rem] mx-auto object-contain"
                />
            </picture>
            <span className="block my-4">{category}</span>
            <h3 className="text-h3">{title}</h3>
        </div>
    );
};

export default WishlistCard;
