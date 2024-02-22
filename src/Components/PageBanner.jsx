import Section from "./Section";

const PageBanner = ({ title, bgImage, children, bannerTextColor }) => {
    return (
        <div className="relative">
            <picture className="block h-[40rem] lg:h-[50rem]">
                <img
                    src={bgImage}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                />
            </picture>
            <Section
                className={`absolute inset-0 flex flex-col justify-center ${bannerTextColor}`}
            >
                <h2 className="text-h2 text-inherit">{title}</h2>
                {children}
            </Section>
        </div>
    );
};

export default PageBanner;
