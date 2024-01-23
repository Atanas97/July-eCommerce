import Section from "../Components/Section";

import { Link } from "react-router-dom";

import ErrorIcon from "../Assets/icon_404.svg";

const ErrorPage = () => {
    return (
        <Section>
            <div className="flex flex-col items-center justify-center">
                <picture>
                    <img src={ErrorIcon} alt="" loading="lazy" />
                </picture>
                <h1 className="text-5xl">404 - Not found!</h1>
                <p className="m-5">This page could not be found.</p>
                <p>
                    Continue to the{" "}
                    <Link to="/" className="font-semibold underline">
                        Home Page
                    </Link>
                </p>
            </div>
        </Section>
    );
};

export default ErrorPage;
