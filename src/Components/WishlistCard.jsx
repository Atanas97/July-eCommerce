import React from "react";

const WishlistCard = ({ product }) => {
    const { image, title, category } = product;
    return (
        <div className="border border-[#ccc] rounded-sm p-8">
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
