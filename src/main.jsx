import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import WishlistProviver, { WishlistContext } from "./Context/WishlistContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <WishlistProviver>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </WishlistProviver>
);
