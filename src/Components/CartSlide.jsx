import { useContext, useState } from "react";
import { FiX } from "react-icons/fi";
import { CartContext } from "../Context/CartContext";
import CartSlideOverlay from "../Layout/CartSlideOverlay";
import { Link } from "react-router-dom";

export default function Example() {
    const { cart, totalSum, removeCartItem, setIsCartSlideOpen, isCartSlideOpen } =
        useContext(CartContext);
    // onClose={setOpen}
    return (
        // isOpen={open} isClosed={() => setOpen(!open)}
        <>
            {isCartSlideOpen && (
                <CartSlideOverlay>
                    <div className="flex w-full fixed max-w-[40rem] right-0 h-full inset-y-0 flex-col overflow-y-scroll bg-white shadow-xl">
                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                            <div className="flex items-start justify-between">
                                <h3 className="font-medium text-h3 text-gray-900">Shopping cart</h3>
                                <div className="ml-3 h-7 items-center">
                                    <button
                                        type="button"
                                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                        onClick={() => setIsCartSlideOpen(false)}
                                    >
                                        <FiX color="black" size={24} />
                                    </button>
                                </div>
                            </div>

                            <ul role="list" className="mt-8 -my-6 divide-y divide-gray-200">
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
                                                    <a href={product.href}>{product.title}</a>
                                                </h3>
                                                <p className="ml-4">${product.price}</p>
                                            </div>
                                            <div className="flex flex-1 items-end justify-between">
                                                <p className="text-gray-500">
                                                    Qty {product.amount}
                                                </p>

                                                <div className="flex">
                                                    <button
                                                        onClick={() => removeCartItem(product.id)}
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
                                <p className="text-h3 font-medium">${totalSum}</p>
                            </div>
                            <p className="mt-2 text-gray-500">
                                Shipping and taxes calculated at checkout.
                            </p>
                            <div className="mt-6">
                                <Link
                                    to="/cart-checkout"
                                    onClick={() => setIsCartSlideOpen(false)}
                                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 font-medium text-white shadow-sm hover:bg-indigo-700"
                                >
                                    Checkout
                                </Link>
                            </div>
                            <div className="mt-6 flex justify-center text-center text-gray-500">
                                <p>
                                    or{" "}
                                    <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                        onClick={() => setIsCartSlideOpen(false)}
                                    >
                                        Continue Shopping
                                        <span aria-hidden="true"> &rarr;</span>
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </CartSlideOverlay>
            )}
        </>
    );
}
