import React from "react";

import Hipster from "../Assets/animation/hipster.svg";
import Microwave from "../Assets/animation/microwave.svg";
import Natural from "../Assets/animation/natural.svg";
import Retro from "../Assets/animation/retro.svg";
import Rose from "../Assets/animation/rose.svg";
import Saturday from "../Assets/animation/saturday.svg";
import Urban from "../Assets/animation/urban.svg";

const InfiniteScrollAnimation = () => {
    const logos = [
        { src: Hipster, alt: "Hipster" },
        { src: Microwave, alt: "Microwave" },
        { src: Natural, alt: "Natural" },
        { src: Retro, alt: "Retro" },
        { src: Rose, alt: "Rose" },
        { src: Saturday, alt: "Saturday" },
        { src: Urban, alt: "Urban" },
    ];

    return (
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
            <div className="w-full inline-flex justify-center flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    {logos.map((logo, index) => (
                        <li key={index}>
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                width={"auto"}
                                height={"auto"}
                                loading="lazy"
                            />
                        </li>
                    ))}
                </ul>
                <ul
                    className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                    aria-hidden="true"
                >
                    {logos.map((logo, index) => (
                        <li key={index}>
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                width={"auto"}
                                height={"auto"}
                                loading="lazy"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default InfiniteScrollAnimation;
