import { Link } from "react-router-dom";

import Section from "../Components/Section";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

import ErrorIcon from "../Assets/icon_404.svg";

const ErrorPage = () => {
    return (
        <>
            <Header />
            <Section customClasses="grow">
                <div className="flex flex-col items-center justify-center my-40">
                    <picture>
                        <img src={ErrorIcon} alt="" loading="lazy" />
                    </picture>
                    <h1 className="text-5xl mt-10">404 - Not found!</h1>
                    <p className="m-5 text-p">This page could not be found.</p>
                    <p className="text-p">
                        Continue to the{" "}
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
