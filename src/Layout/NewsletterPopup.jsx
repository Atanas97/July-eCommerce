import { useState } from "react";

import Overlays from "./Overlays";
import Loader from "../Components/Loader";

import EmailSend from "../utils/EmailSend";

const NewsletterPopup = () => {
    const [isModalOpened, setIsModalOpened] = useState(true);
    const { form, loading, emailSendError, userEmail, handleNewsletterSubmit } =
        EmailSend();

    return (
        <>
            <Overlays
                isOpened={isModalOpened}
                onClose={() => setIsModalOpened(false)}
            >
                {loading && <Loader />}
                <div className="relative bg-newsletterBgImage bg-cover text-center max-w-[60rem]">
                    <div className="px-[3rem] py-[4rem] md:px-[10rem] md:py-[12rem]">
                        <h2 className="text-5xl text-white">Don't miss out!</h2>
                        <p className="font-normal text-white py-8">
                            Sign up for our newsletter to receive special
                            offers, news, and events
                        </p>
                        <form ref={form} onSubmit={handleNewsletterSubmit}>
                            <div className="relative w-full">
                                <input
                                    type="email"
                                    name="user_email"
                                    className="w-full p-4 pr-[9.5rem]"
                                    ref={userEmail}
                                />
                                <button
                                    disabled={loading}
                                    type="submit"
                                    className={`absolute top-1/2 right-5 cursor-pointer -translate-y-2/4 ${
                                        loading &&
                                        "opacity-10 cursor-not-allowed"
                                    }`}
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Overlays>
        </>
    );
};

export default NewsletterPopup;
