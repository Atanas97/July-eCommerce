import { createContext, useState } from "react";

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
        //if
        if (wishlistItem) {
            const newWishlist = [...wishlist].map((item) => {
                if (item.id === id) {
                    alert(`you already have ${item.id} set`);
                    setAddedToWishlist({
                        isAdded: true,
                        id: item.id,
                    });
                    return { ...item };
                } else {
                    return item;
                }
            });
            setWishlist(newWishlist);
        } else {
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
