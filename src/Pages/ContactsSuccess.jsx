import { Helmet } from "react-helmet";
import PageBanner from "../Components/PageBanner";

import ClothesBanner from "../Assets/clothes_banner.jpg";
import Section from "../Components/Section";
import { Link } from "react-router-dom";

const ContactsSuccess = () => {
    return (
        <>
            <Helmet>
                <title>Success! Your Style Journey Begins with July Clothing</title>
                <meta
                    name="description"
                    content="Thank you for connecting with us! Your form submission was successful. Get ready to embark on a stylish adventure with July Clothing. Stay tuned for updates on the latest trends, exclusive offers, and fashion inspiration. Your journey to timeless elegance starts here. Explore, shop, and redefine your style with July."
                />
                <meta
                    property="og:title"
                    content="Success! Your Style Journey Begins with July Clothing"
                />
                <meta
                    property="og:description"
                    content="Thank you for connecting with us! Your form submission was successful. Get ready to embark on a stylish adventure with July Clothing. Stay tuned for updates on the latest trends, exclusive offers, and fashion inspiration. Your journey to timeless elegance starts here. Explore, shop, and redefine your style with July."
                />
            </Helmet>
            <PageBanner
                title="Get in Touch with July: Reach Out for Stylish Support and Inquiries"
                bgImage={ClothesBanner}
                bannerTextColor="text-black"
            />
            <Section>
                <div className="my-40 mx-auto max-w-[90rem] text-center">
                    <svg
                        className="success mx-auto mb-10"
                        viewBox="0 0 60 60"
                        width="60"
                        height="60"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="none"
                            stroke="#1CC664"
                            strokeWidth="2"
                            d="M 41.98438,13.080078 C 38.221137,10.128794 33.577397,8.5238055 28.794922,8.5214844 16.981821,8.5222068 7.405894,18.099008 7.40625,29.912109 c 7.22e-4,11.812338 9.576334,21.38795 21.388672,21.388672 11.813098,3.58e-4 21.389908,-9.57557 21.390628,-21.388672 -7.8e-4,-2.140097 -0.32273,-4.26796 -0.95508,-6.3125"
                        ></path>
                        <path
                            fill="none"
                            stroke="#1CC664"
                            strokeWidth="2"
                            d="M 20.46875,26.001953 29.164062,34.697266 52.06055,11.800781"
                        ></path>
                    </svg>
                    <h1 className="text-h1">Thank you for sending us a message!</h1>
                    <p className="text-p my-10">
                        Congratulations! Your message has been successfully submitted to the July
                        Clothing team. We appreciate your interest and look forward to connecting
                        with you. Our dedicated team is committed to providing exceptional service
                        and will be in touch with you shortly.
                    </p>
                    <Link to="/" className="underline-animation">
                        Go back to Homepage
                    </Link>
                </div>
            </Section>
        </>
    );
};

export default ContactsSuccess;
