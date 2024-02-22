import { Link } from "react-router-dom";

import Section from "../Components/Section";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

import ErrorIcon from "../Assets/icon_404.svg";

const ErrorPage = () => {
    return (
        <>
            <Header />
            <Section className="grow">
                <div className="my-40 flex flex-col items-center justify-center">
                    <picture>
                        <img src={ErrorIcon} alt="" loading="lazy" />
                    </picture>
                    <h1 className="mt-10 text-5xl">404 - Not found!</h1>
                    <p className="m-5 text-p">This page could not be found.</p>
                    <p className="text-p">
                        Continue to the
                        <Link to="/" className="font-semibold underline">
                            Home Page
                        </Link>
                    </p>
                </div>
            </Section>
            <Footer />
        </>
    );
};

export default ErrorPage;
