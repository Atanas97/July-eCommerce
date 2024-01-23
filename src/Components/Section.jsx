import React from "react";

const Section = ({ children, customClasses }) => {
    return (
        <section
            className={`w-full mx-auto px-8 sm:max-w-[640px] md:max-w-[968px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] ${customClasses}`}
        >
            {children}
        </section>
    );
};

export default Section;
