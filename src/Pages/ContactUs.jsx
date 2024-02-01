import { Helmet } from "react-helmet";

import PageBanner from "../Components/PageBanner";
import Section from "../Components/Section";

import ClothesBanner from "../Assets/clothes_banner.jpg";
import ContactusForm from "../Components/ContactusForm";

const ContactUs = () => {
    return (
        <>
            <Helmet>
                <title>Get in Touch with July: Reach Out for Stylish Support and Inquiries</title>
                <meta
                    name="description"
                    content="Unlock your potential with a career at July. Explore exciting opportunities to grow and thrive in a dynamic work environment. Join us on a journey of innovation and excellence, where your skills and passion come together to shape a meaningful and rewarding career. Discover how you can make a difference and be part of a team that values your contributions. Explore our current job openings and embark on a path to professional success with July."
                />
                <meta
                    property="og:title"
                    content="Get in Touch with July: Reach Out for Stylish Support and Inquiries"
                />
                <meta
                    property="og:description"
                    content="Unlock your potential with a career at July. Explore exciting opportunities to grow and thrive in a dynamic work environment. Join us on a journey of innovation and excellence, where your skills and passion come together to shape a meaningful and rewarding career. Discover how you can make a difference and be part of a team that values your contributions. Explore our current job openings and embark on a path to professional success with July."
                />
            </Helmet>
            <PageBanner
                title="Get in Touch with July: Reach Out for Stylish Support and Inquiries"
                bgImage={ClothesBanner}
                bannerTextColor="text-black"
            />

            <Section>
                <div className="my-40 lg:flex lg:justify-between lg:gap-10">
                    <div className=" ax-w-48">
                        <h2 className="text-h2">Address</h2>
                        <p className="text-p my-8">8425 Melrose Ave, Los Angeles, CA 90069</p>

                        <h2 className="text-h2 mb-8">Contact</h2>
                        <div className="flex gap-4 items-center">
                            <span>Phone.</span>
                            <a href="tel:+1 970 429 4170">+1 970 429 4170</a>
                        </div>

                        <h2 className="text-h2 my-8">Hour of Operation</h2>
                        <p className="text-p">Mon – Fri: 08:30 – 20:00</p>
                        <p className="text-p">Sat & Sun: 09:30 – 21:30</p>
                    </div>
                    <div className="w-full mt-10 lg:mt-0 lg:max-w-[70%] ">
                        <h2 className="text-h2">Get in Touch</h2>
                        <p className="text-p my-8">
                            Your email address will not be published. Required fields are marked *
                        </p>
                        <ContactusForm />
                    </div>
                </div>
            </Section>
        </>
    );
};

export default ContactUs;
