import { useEffect, useState, useRef } from "react";

import Overlays from "./Overlays";
import Loader from "../Components/Loader";

import EmailSend from "../utils/EmailSend";

const NewsletterPopup = () => {
    const [isModalOpened, setIsModalOpened] = useState(false);
    const { form, loading, emailSendError, userEmail, handleNewsletterSubmit } = EmailSend();

    const popUpCheckbox = useRef();

    const rememberPopupChoice = () => {
        if (popUpCheckbox.current.checked) {
            console.log(popUpCheckbox.current.checked);
            localStorage.setItem("isPopSeen", true);
            setIsModalOpened(false);
        } else {
            setIsModalOpened(false);
        }
    };

    useEffect(() => {
        let returningUser = localStorage.getItem("isPopSeen");

        if (!returningUser) {
            setIsModalOpened(!isModalOpened);
        }
    }, []);

    return (
        <>
            <Overlays
                isOpened={isModalOpened}
                // isPopUpChecked={closePopUp}
                onClose={() => rememberPopupChoice()}
            >
                {loading && <Loader />}
                <div className="relative bg-newsletterBgImage bg-cover text-center max-w-[60rem]">
                    <div className="px-[3rem] py-[4rem] md:px-[10rem] md:py-[12rem]">
                        <h2 className="text-5xl text-white">Don't miss out!</h2>
                        <p className="font-normal text-white py-8">
                            Sign up for our newsletter to receive special offers, news, and events
                        </p>
                        <form ref={form} onSubmit={handleNewsletterSubmit}>
                            <div className="relative w-full">
                                <input
                                    type="email"
                                    name="user_email"
                                    className="w-full p-4 pr-[9.5rem] outline-none"
                                    ref={userEmail}
                                />
                                <button
                                    disabled={loading}
                                    type="submit"
                                    className={`absolute top-2/4 -translate-y-2/4 right-5 cursor-pointer ${
                                        loading && "opacity-10 cursor-not-allowed"
                                    }`}
                                >
                                    Subscribe
                                </button>
                            </div>
                            <div className="text-left text-white mt-4 font-normal">
                                <label className="checkbox">
                                    <input type="checkbox" ref={popUpCheckbox} />
                                    <span></span>
                                    Don't show this pop up again
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </Overlays>
        </>
    );
};

export default NewsletterPopup;
