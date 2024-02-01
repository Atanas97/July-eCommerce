import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

import ScrollToTop from "../utils/ScrollToTop";
import CartSlide from "../Components/CartSlide.jsx";
import Loader from "../Components/Loader.jsx";

export default function Layout() {
    return (
        <>
            <ScrollToTop />
            <Header />
            <main className="grow">
                <CartSlide />
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </>
    );
}
