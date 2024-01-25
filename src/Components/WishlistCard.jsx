import React, { useContext } from "react";
import { WishlistContext } from "../Context/WishlistContext";
import { FiX } from "react-icons/fi";

const WishlistCard = ({ product }) => {
    const { removeWishlist } = useContext(WishlistContext);

    const { image, title, category, id } = product;
    return (
        <div className="relative border border-[#ccc] rounded-sm p-8">
            <button
                onClick={() => removeWishlist(id)}
                className="absolute right-4 top-4 bg-orange rounded-full p-4 flex items-center justify-center"
            >
                <FiX size={24} color="white" />
            </button>
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
