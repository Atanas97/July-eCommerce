import { Link } from "react-router-dom";
import Section from "../Components/Section";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 pt-20 shrink-0">
            <Section>
                <div className="lg:flex">
                    <div className="mb-6 lg:flex-1 lg:max-w-[35rem] lg:pr-20">
                        <h3 className="text-3xl font-medium mb-6">
                            About Shop
                        </h3>
                        <p className="font-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Expedita, atque odit nostrum veniam suscipit
                            quisquam?
                        </p>
                        <div>
                            <a href="">email@support.com</a>
                        </div>
                        <div>
                            <a href="">00 342 489 33</a>
                        </div>
                    </div>
                    <nav className="md:flex md:flex-wrap md:gap-y-6 lg:flex-[2_1_0]">
                        <div className="mb-6 md:flex-[0_0_50%] lg:mb-0 lg:flex-1">
                            <h3 className="text-3xl font-medium mb-6">
                                Company
                            </h3>
                            <Link
                                to="/aboutus"
                                className="block py-2 font-light"
                            >
                                About us
                            </Link>
                            <Link
                                to="/careers"
                                className="block py-2 font-light"
                            >
                                Careers
                            </Link>
                            <Link
                                to="/store-locator"
                                className="block py-2 font-light"
                            >
                                Store Locator
                            </Link>
                            <Link
                                to="/contactus"
                                className="block py-2 font-light"
                            >
                                Contact us
                            </Link>
                        </div>
                        <div className="mb-6 md:flex-[0_0_50%] lg:mb-0 lg:flex-1">
                            <h3 className="text-3xl font-medium mb-6">
                                Customer Care
                            </h3>
                            <Link to="" className="block py-2 font-light">
                                Size Guide
                            </Link>
                            <Link to="/FAQ" className="block py-2 font-light">
                                Help & FAQs
                            </Link>
                            <Link
                                to="/returns"
                                className="block py-2 font-light"
                            >
                                Return My Order
                            </Link>
                            <Link to="" className="block py-2 font-light">
                                Refer A Friend
                            </Link>
                        </div>
                        <div className="mb-6 md:flex-[0_0_50%] lg:mb-0 lg:flex-1">
                            <h3 className="text-3xl font-medium mb-6">
                                Quick Links
                            </h3>
                            <Link to="" className="block py-2 font-light">
                                Quick Links
                            </Link>
                            <Link to="" className="block py-2 font-light">
                                Shipping Info
                            </Link>
                            <Link
                                to="/termsofuse"
                                className="block py-2 font-light"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                to="/termsofuse"
                                className="block py-2 font-light"
                            >
                                Term Conditions
                            </Link>
                        </div>
                        <div className="mb-6 md:flex-[0_0_50%] lg:mb-0 lg:flex-1">
                            <h3 className="text-3xl font-medium mb-6">
                                Follow Us
                            </h3>
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                className="block py-2 font-light"
                            >
                                Instagram
                            </a>
                            <a
                                href="https://facebook.com/"
                                target="_blank"
                                className="block py-2 font-light"
                            >
                                Facebook
                            </a>
                            <a
                                href="https://Pinterest.com/"
                                target="_blank"
                                className="block py-2 font-light"
                            >
                                Pinterest
                            </a>
                            <a
                                href="https://tiktok.com/"
                                target="_blank"
                                className="block py-2 font-light"
                            >
                                Tiktok
                            </a>
                        </div>
                    </nav>
                </div>
            </Section>
        </footer>
    );
};

export default Footer;
