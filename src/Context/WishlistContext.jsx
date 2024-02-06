import { createContext, useState } from "react";
import toast from "react-hot-toast";

//create the context
export const WishlistContext = createContext();

//BIG TODO: MOVE TO A REDUCER!!!

const WishlistProviver = ({ children }) => {
    //wishlist state
    const [wishlist, setWishlist] = useState([]);

    const addToWishlist = (id, product) => {
        const newWishlistItem = { ...product };
        const wishlistItem = wishlist.find((item) => {
            return item.id === id;
        });

        if (wishlistItem) {
            const newWishlist = [...wishlist].map((item) => {
                if (item.id === id) {
                    // toast.success(`${item.title} has been added to your wishlist!`);
                    return { ...item };
                } else {
                    return item;
                }
            });
            setWishlist(newWishlist);
        } else {
            toast.success(`${newWishlistItem.title} has been added to your wishlist!`, {
                style: {
                    fontWeight: 500,
                    duration: 6000,
                },
            });
            setWishlist([...wishlist, newWishlistItem]);
        }
    };

    const removeWishlist = (id) => {
        const removedItem = [...wishlist].filter((item) => item.id !== id);
        setWishlist(removedItem);
    };

    return (
        <WishlistContext.Provider value={{ wishlist, removeWishlist, addToWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

export default WishlistProviver;
