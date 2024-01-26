import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import WishlistProviver from "./Context/WishlistContext.jsx";
import CartProvider from "./Context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <CartProvider>
        <WishlistProviver>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </WishlistProviver>
    </CartProvider>
);
