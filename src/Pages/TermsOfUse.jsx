import { Helmet } from "react-helmet";
import PageBanner from "../Components/PageBanner";

import Banner from "../Assets/terms_of_use.jpg";
import Breadcrumbs from "../Components/Breadcrumbs";
import Section from "../Components/Section";

const TermsOfUse = () => {
    return (
        <>
            <Helmet>
                <title>
                    July Clothing Ecommerce Terms of Use: Your Guide to Seamless Shopping and
                    Enjoyable Experiences
                </title>
                <meta
                    name="description"
                    content="Explore the terms that govern your delightful journey with July Clothing. Our Terms of Use outline the guidelines for seamless and secure shopping experiences. Dive into the details of our policies, ensuring transparency, fairness, and respect for your rights as a valued customer. Discover the foundation of trust that defines our relationship with you. At July, we prioritize your satisfaction and aim to provide a platform where elegance and reliability meet. Read our Terms of Use for a clear understanding of your rights and responsibilities as part of the July community."
                />
                <meta
                    property="og:title"
                    content="July Clothing Terms of Use: Your Guide to Seamless Shopping and Enjoyable Experiences"
                />
                <meta
                    property="og:description"
                    content="Explore the terms that govern your delightful journey with July Clothing. Our Terms of Use outline the guidelines for seamless and secure shopping experiences. Dive into the details of our policies, ensuring transparency, fairness, and respect for your rights as a valued customer. Discover the foundation of trust that defines our relationship with you. At July, we prioritize your satisfaction and aim to provide a platform where elegance and reliability meet. Read our Terms of Use for a clear understanding of your rights and responsibilities as part of the July community."
                />
            </Helmet>
            <PageBanner
                title="July Clothing Terms of Use: Your Guide to Seamless Shopping"
                bgImage={Banner}
                bannerTextColor="text-white"
            >
                <Breadcrumbs />
            </PageBanner>
            <Section>
                <div className="my-40 max-w-[70rem] mx-auto">
                    <h1 className="text-h1 mb-10">Terms of Use for July Clothing Ecommerce</h1>
                    <ol className="[&>li]:mb-10 text-p">
                        <li>
                            <strong>Acceptance of Terms:</strong> By accessing and using the July
                            Clothing Ecommerce website, you agree to comply with and be bound by
                            these Terms of Use. If you do not agree with these terms, please refrain
                            from using our website.
                        </li>
                        <li>
                            <strong>Use of the Website:</strong> You may use the website for
                            personal and non-commercial purposes only. Any unauthorized use,
                            including but not limited to modifying, distributing, transmitting, or
                            reproducing any content for commercial purposes, is prohibited.
                        </li>
                        <li>
                            <strong>User Accounts:</strong> In order to access certain features of
                            the website, you may need to create a user account. You are responsible
                            for maintaining the confidentiality of your account information and for
                            all activities that occur under your account.
                        </li>
                        <li>
                            <strong>Intellectual Property:</strong> All content, trademarks, logos,
                            and intellectual property on the website are the property of July
                            Clothing. You may not use, reproduce, or distribute any content without
                            prior written permission from July Clothing.
                        </li>
                        <li>
                            <strong>Privacy Policy:</strong> Your use of the website is also
                            governed by our Privacy Policy. Please review the Privacy Policy to
                            understand how we collect, use, and protect your personal information.
                        </li>
                        <li>
                            <strong>Product Information:</strong> We make every effort to ensure the
                            accuracy of product information on the website. However, we do not
                            warrant that product descriptions, prices, or other content on the
                            website are accurate, complete, reliable, current, or error-free.
                        </li>
                        <li>
                            <strong>Links to Third-Party Websites:</strong> The website may contain
                            links to third-party websites. These links are provided for your
                            convenience only. July Clothing does not endorse or control these
                            third-party websites and is not responsible for their content.
                        </li>
                        <li>
                            <strong>Termination of Access:</strong> July Clothing reserves the right
                            to terminate or suspend your access to the website at any time, without
                            notice, for conduct that we believe violates these Terms of Use or is
                            harmful to other users of the website.
                        </li>
                        <li>
                            <strong>Changes to Terms:</strong> July Clothing may update or modify
                            these Terms of Use at any time without prior notice. Your continued use
                            of the website after any changes indicates your acceptance of the
                            modified Terms.
                        </li>
                        <li>
                            <strong>Governing Law:</strong> These Terms of Use are governed by and
                            construed in accordance with the laws of [Your Jurisdiction].
                        </li>
                    </ol>
                </div>
            </Section>
        </>
    );
};

export default TermsOfUse;
