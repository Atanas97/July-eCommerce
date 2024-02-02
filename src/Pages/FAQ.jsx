import { Helmet } from "react-helmet";
import Faq from "react-faq-component";

import PageBanner from "../Components/PageBanner";
import Section from "../Components/Section";

import ClothesBanner from "../Assets/clothes_banner.jpg";
import { Link } from "react-router-dom";

const data = {
    title: "Delivery Information",
    rows: [
        {
            title: "Shipping destinations",
            content:
                "For now we ship to the following countries: Austria, Belgium, Czech Republic, Lithuania, Luxembourg, Latvia, Slovakia, Hungary, Bulgaria, Romania, Slovenia, Finland, Denmark, Estonia, Netherlands, Germany, France, Great Britain, Croatia, Ireland, Sweden, Italy, Greece, Spain, Portugal and Poland.",
        },
        {
            title: "Shipping times",
            content:
                "At July Clothing, we strive to deliver your stylish finds to your doorstep with speed and efficiency. Shipping times may vary depending on your location and the shipping method selected during checkout. Generally, our standard shipping takes 14 business days, while expedited options are available for faster delivery.",
        },
        {
            title: "Tracking your parcel",
            content:
                "Tracking your order with July Clothing is a breeze! Once your order is dispatched, you will receive a confirmation email containing a unique tracking number and a link to the carrier's website. Simply click on the provided link or enter the tracking number on the carrier's website to get real-time updates on the status and location of your package.",
        },
        {
            title: "How can I return my purchase?",
            content:
                "Returning your July Clothing purchase is easy! Log in to your account, go to Order History, select the order, and click Return Items. Follow the steps on-screen. For guest checkouts or assistance, contact our customer support via the Contact Us page, providing your order details. Review our Return Policy for eligibility and timelines. We're here to ensure your return experience matches the ease of your July Clothing shopping.",
        },
        {
            title: "Can I cancel my order?",
            content:
                "Yes, you can cancel your order within a short window after placing it. Log in to your July Clothing account, visit Order History, and check if the Cancel option is available. If your order is ineligible for online cancellation or if you encounter any issues, contact our customer support through the Contact Us page. Please note that once your order is processed for shipping, it cannot be canceled. Refer to our Order Cancellation Policy for more details. We're here to assist you throughout the process.",
        },
        {
            title: "How does shipping work?",
            content:
                "Shipping at July Clothing is designed for simplicity and efficiency. After placing your order, we process it swiftly, and you'll receive a confirmation email with tracking details once it ships. Shipping times vary based on your location and chosen method. For more information, visit our Shipping & Delivery page.",
        },
        {
            title: "Should I wash items myself?",
            content:
                "To ensure the longevity of your July Clothing items, we recommend following the care instructions on the product's label. Typically, machine wash in cold water and gentle cycle is suitable for most garments. However, refer to specific care guidelines for each item. Avoid using bleach or harsh detergents, and always check for any additional recommendations on the product page. For delicate fabrics, handwashing may be advised. If in doubt, our customer support team is happy to assist via the Contact Us page.",
        },
    ],
};

const FAQ = () => {
    return (
        <>
            <Helmet>
                <title>July Clothing FAQ: Your Guide to Stylish Shopping & Customer Support</title>
                <meta
                    name="description"
                    content="Explore the July Clothing FAQ page for answers to common queries about our products, services, and shopping experience. Find solutions to your questions, from sizing and shipping to returns and more. Our comprehensive FAQ section is designed to enhance your shopping journey, providing clarity and support. Shop confidently with July Clothing, where your style meets exceptional customer service. Browse our FAQ for a seamless and informed shopping experience."
                />
                <meta
                    property="og:title"
                    content="July Clothing FAQ: Your Guide to Stylish Shopping & Customer Support"
                />
                <meta
                    property="og:description"
                    content="Explore the July Clothing FAQ page for answers to common queries about our products, services, and shopping experience. Find solutions to your questions, from sizing and shipping to returns and more. Our comprehensive FAQ section is designed to enhance your shopping journey, providing clarity and support. Shop confidently with July Clothing, where your style meets exceptional customer service. Browse our FAQ for a seamless and informed shopping experience."
                />
            </Helmet>
            <PageBanner
                title="Get in Touch with July: Reach Out for Stylish Support and Inquiries"
                bgImage={ClothesBanner}
                bannerTextColor="text-black"
            />
            <Section>
                <div className="my-40 mx-auto max-w-7xl">
                    <Faq
                        data={data}
                        styles={{
                            bgColor: "white",
                            titleTextColor: "#111",
                            rowTitleTextSize: "1.75rem",
                            rowContentTextSize: "1.65rem",
                            rowContentPaddingTop: "1rem",
                            rowContentPaddingBottom: "1rem",
                            rowContentPaddingLeft: "1rem",
                            rowContentPaddingRight: "1rem",
                            arrowColor: "#111",
                        }}
                    />
                    <div className="mt-10 text-center">
                        <p className="text-p mb-10">Have a question not covered in the FAQ?</p>

                        <Link
                            to="/contactus"
                            className="inline-block bg-black text-white rounded-xl px-12 py-6 mx-auto transition-colors duration-300 hover:opacity-90"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default FAQ;
