import React, { useContext } from "react";
import { WishlistContext } from "../Context/WishlistContext";
import { CartContext } from "../Context/CartContext";

import { FiX, FiShoppingCart } from "react-icons/fi";

const WishlistCard = ({ product }) => {
    const { removeWishlist } = useContext(WishlistContext);
    const { addToCart } = useContext(CartContext);

    const { image, title, category, id } = product;
    return (
        <div className="group relative rounded-sm border border-[#ccc] p-8">
            <div className="delay-350 absolute right-0 top-4 flex flex-col gap-4 transition-all ease-in-out group-hover:opacity-100 md:-right-10 md:opacity-0 md:group-hover:right-4">
                <button
                    onClick={() => removeWishlist(id)}
                    className="flex h-[5rem] w-[5rem] items-center justify-center rounded-full bg-orange"
                >
                    <FiX size={24} color="white" />
                </button>
                <button
                    onClick={() => addToCart(id, product)}
                    className="flex h-[5rem] w-[5rem] items-center justify-center rounded-full bg-orange"
                >
                    <FiShoppingCart size={24} color="white" />
                </button>
            </div>

            <picture className="mx-auto flex aspect-square max-w-[25rem] justify-center">
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="mx-auto max-h-[25rem] object-contain"
                />
            </picture>
            <span className="my-4 block">{category}</span>
            <h3 className="text-h3">{title}</h3>
        </div>
    );
};

export default WishlistCard;
