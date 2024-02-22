import React, { Suspense } from "react";

const Homepage = React.lazy(() => import("../Pages/Homepage"));
const Products = React.lazy(() => import("../Pages/Products"));
const SingleProduct = React.lazy(() => import("../Pages/SingleProduct"));
const CartCheckout = React.lazy(() => import("../Pages/CartCheckout"));
const CartPreview = React.lazy(() => import("../Pages/CartPreview"));
const ProductCategories = React.lazy(
    () => import("../Pages/ProductCategories"),
);
const AboutUs = React.lazy(() => import("../Pages/AboutUs"));
const ContactUs = React.lazy(() => import("../Pages/ContactUs"));
const ContactsSuccess = React.lazy(() => import("../Pages/ContactsSuccess"));
const Wishlist = React.lazy(() => import("../Pages/Wishlist"));
const Returns = React.lazy(() => import("../Pages/Returns"));
const StoreLocator = React.lazy(() => import("../Pages/StoreLocator"));
const Careers = React.lazy(() => import("../Pages/Careers"));
const FAQ = React.lazy(() => import("../Pages/FAQ"));
const TermsOfUse = React.lazy(() => import("../Pages/TermsOfUse"));

const routes = [
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/products",
        element: <Products />,
        children: [
            {
                path: "/products/category/:category",
                element: <ProductCategories />,
            },
        ],
    },
    {
        path: "/products/:id",
        element: <SingleProduct />,
    },
    {
        path: "/aboutus",
        element: <AboutUs />,
    },
    {
        path: "/cart-checkout",
        element: <CartCheckout />,
    },
    {
        path: "/cart-preview",
        element: <CartPreview />,
    },
    {
        path: "/careers",
        element: <Careers />,
    },
    {
        path: "/contactus",
        element: <ContactUs />,
    },
    {
        path: "/contactus-success",
        element: <ContactsSuccess />,
    },
    {
        path: "/wishlist",
        element: <Wishlist />,
    },
    {
        path: "/returns",
        element: <Returns />,
    },
    {
        path: "/store-locator",
        element: <StoreLocator />,
    },
    {
        path: "/FAQ",
        element: <FAQ />,
    },
    {
        path: "/termsofuse",
        element: <TermsOfUse />,
    },
];

export default routes;
