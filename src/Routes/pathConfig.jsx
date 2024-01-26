import React, { Suspense } from "react";

const Homepage = React.lazy(() => import("../Pages/Homepage"));
const Products = React.lazy(() => import("../Pages/Products"));
const SingleProduct = React.lazy(() => import("../Pages/SingleProduct"));
const CartCheckout = React.lazy(() => import("../Pages/CartCheckout"));
const ProductCategories = React.lazy(() => import("../Pages/ProductCategories"));
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
        element: (
            <Suspense fallback="Loading...">
                <Homepage />
            </Suspense>
        ),
    },
    {
        path: "/products",
        element: (
            <Suspense fallback="Loading...">
                <Products />
            </Suspense>
        ),
        children: [
            {
                path: "/products/category/:category",
                element: (
                    <Suspense fallback="Loading...">
                        <ProductCategories />
                    </Suspense>
                ),
            },
        ],
    },
    {
        path: "/products/:category/:title/:id",
        element: (
            <Suspense fallback="Loading...">
                <SingleProduct />
            </Suspense>
        ),
    },
    {
        path: "/aboutus",
        element: (
            <Suspense fallback="Loading...">
                <AboutUs />
            </Suspense>
        ),
    },
    {
        path: "/cart-checkout",
        element: (
            <Suspense fallback="Loading...">
                <CartCheckout />
            </Suspense>
        ),
    },
    {
        path: "/careers",
        element: (
            <Suspense fallback="Loading...">
                <Careers />
            </Suspense>
        ),
    },
    {
        path: "/contactus",
        element: (
            <Suspense fallback="Loading...">
                <ContactUs />
            </Suspense>
        ),
    },
    {
        path: "/contactus-success",
        element: (
            <Suspense fallback="Loading...">
                <ContactsSuccess />
            </Suspense>
        ),
    },
    {
        path: "/wishlist",
        element: (
            <Suspense fallback="Loading...">
                <Wishlist />
            </Suspense>
        ),
    },
    {
        path: "/returns",
        element: (
            <Suspense fallback="Loading...">
                <Returns />
            </Suspense>
        ),
    },
    {
        path: "/store-locator",
        element: (
            <Suspense fallback="Loading...">
                <StoreLocator />
            </Suspense>
        ),
    },
    {
        path: "/FAQ",
        element: (
            <Suspense fallback="Loading...">
                <FAQ />
            </Suspense>
        ),
    },
    {
        path: "/termsofuse",
        element: (
            <Suspense fallback="Loading...">
                <TermsOfUse />
            </Suspense>
        ),
    },
];

export default routes;
