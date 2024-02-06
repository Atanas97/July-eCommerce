import { useState, createContext } from "react";
import toast from "react-hot-toast";
import CustomToast from "../Components/CustomToast";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isCartSlideOpen, setIsCartSlideOpen] = useState(false);

    //Add to cart context
    const addToCart = (id, product) => {
        const newItem = { ...product, amount: 1 };
        const cartItem = cart.find((item) => {
            return item.id === id;
        });
        if (cartItem) {
            const newCart = [...cart].map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount + 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            setCart([...cart, newItem]);
            toast.custom((t) => <CustomToast newItem={newItem} t={t} />);
        }
    };
    const removeCartItem = (id) => {
        const removedCartItem = [...cart].filter((item) => item.id !== id);
        setCart(removedCartItem);
    };

    const totalSum = cart.reduce((accumulator, cartItem) => {
        return accumulator + cartItem.price * cartItem.amount;
    }, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                totalSum,
                isCartSlideOpen,
                addToCart,
                removeCartItem,
                setIsCartSlideOpen,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
