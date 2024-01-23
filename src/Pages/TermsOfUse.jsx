import { Helmet } from "react-helmet";
import PageBanner from "../Components/PageBanner";

import Banner from "../Assets/terms_of_use.jpg";
import Breadcrumbs from "../Components/Breadcrumbs";

const TermsOfUse = () => {
    return (
        <>
            <Helmet>
                <title>
                    July Clothing Terms of Use: Your Guide to Seamless Shopping
                    and Enjoyable Experiences
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
            <div>store locator</div>
        </>
    );
};

export default TermsOfUse;
