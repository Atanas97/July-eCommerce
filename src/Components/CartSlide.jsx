import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

import { FiX } from "react-icons/fi";
import CartSlideOverlay from "../Layout/CartSlideOverlay";
import EmptyCartSlide from "./EmptyCartSlide";

export default function CartSlide() {
    const {
        cart,
        totalSum,
        removeCartItem,
        setIsCartSlideOpen,
        isCartSlideOpen,
    } = useContext(CartContext);

    return (
        <>
            {isCartSlideOpen && (
                <CartSlideOverlay>
                    <div className="fixed inset-y-0 right-0 flex h-full w-full max-w-[40rem] flex-col overflow-y-scroll bg-white shadow-xl">
                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                            <div className="flex items-start justify-between">
                                <h3 className="text-h3 font-medium text-gray-900">
                                    Shopping cart ({cart.length})
                                </h3>
                                <div className="ml-3 h-7 items-center">
                                    <button
                                        type="button"
                                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                        onClick={() =>
                                            setIsCartSlideOpen(false)
                                        }
                                    >
                                        <FiX color="black" size={24} />
                                    </button>
                                </div>
                            </div>

                            <ul className="-my-6 mt-8 divide-y divide-gray-200">
                                {cart.length === 0 && <EmptyCartSlide />}
                                {cart.map((product) => (
                                    <li key={product.id} className="flex py-6">
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-[rgb(229_231_235)] p-1">
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="h-full w-full object-contain"
                                            />
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-col">
                                            <div className="flex justify-between font-medium text-gray-900">
                                                <h3>
                                                    <a href={product.href}>
                                                        {product.title}
                                                    </a>
                                                </h3>
                                                <p className="ml-4">
                                                    $
                                                    {product.price *
                                                        product.amount}
                                                </p>
                                            </div>
                                            <div className="flex flex-1 items-end justify-between">
                                                <p className="text-gray-500">
                                                    Qty {product.amount}
                                                </p>

                                                <div className="flex">
                                                    <button
                                                        onClick={() =>
                                                            removeCartItem(
                                                                product.id,
                                                            )
                                                        }
                                                        type="button"
                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="border-t border-[rgb(229_231_235)] px-4 py-6 sm:px-6">
                            <div className="flex justify-between font-medium text-gray-900">
                                <p className="text-h3 font-medium">Subtotal</p>
                                <p className="text-h3 font-medium">
                                    ${totalSum.toFixed()}
                                </p>
                            </div>
                            <p className="mt-2 text-gray-500">
                                Shipping and taxes calculated at checkout.
                            </p>
                            <div className="mt-6">
                                <Link
                                    to="/cart-checkout"
                                    onClick={() => setIsCartSlideOpen(false)}
                                    className="flex items-center justify-center rounded-md border border-transparent bg-orange px-6 py-3 font-medium text-white shadow-sm transition-opacity duration-150 hover:opacity-90"
                                >
                                    Checkout
                                </Link>
                            </div>
                            <div className="mt-6 flex justify-center text-center text-gray-500">
                                <p>
                                    or{" "}
                                    <Link
                                        to="/products"
                                        state={{ baseUrl: "/" }}
                                        className="font-medium text-orange transition-opacity duration-150 hover:opacity-90"
                                        onClick={() =>
                                            setIsCartSlideOpen(false)
                                        }
                                    >
                                        Continue Shopping
                                        <span aria-hidden="true"> &rarr;</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </CartSlideOverlay>
            )}
        </>
    );
}
