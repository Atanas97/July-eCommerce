import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";

import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

import CartSlide from "../Components/CartSlide.jsx";
import PageLoader from "../Components/PageLoader.jsx";
import { AnimatePresence } from "framer-motion";

export default function Layout() {
    const location = useLocation();
    return (
        <>
            <Suspense fallback={<PageLoader />}>
                <ScrollToTop />
                <Header />
                <main className="grow">
                    <CartSlide />
                    <AnimatePresence mode="wait">
                        <Outlet location={location} key={location.pathname} />
                    </AnimatePresence>
                </main>
                <Footer />
            </Suspense>
        </>
    );
}
