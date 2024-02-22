import React from "react";
import { twMerge } from "tailwind-merge";

const Section = ({ children, className }) => {
    return (
        <section
            className={twMerge(
                `mx-auto w-full max-w-screen-xl px-8`,
                className,
            )}
        >
            {children}
        </section>
    );
};

export default Section;
