import React, { useRef } from "react";
import EmailSend from "../utils/EmailSend";
const NewsletterSection = ({ title, message }) => {
    const { form, loading, emailSendError, userEmail, handleNewsletterSubmit } =
        EmailSend();
    return (
        <div className="my-20 p-8 lg:my-40 text-center max-w-[50rem] mx-auto">
            <h4 className="text-h4 font-medium uppercase">{title}</h4>
            <h2 className="text-h2 my-10">{message}</h2>
            <form action="" ref={form} onSubmit={handleNewsletterSubmit}>
                <div className="relative">
                    <input
                        ref={userEmail}
                        type="email"
                        className="w-full border-b p-4 font-light outline-none focus:border-orange"
                        placeholder="Enter your Email"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="absolute right-4 top-2/4 -translate-y-2/4"
                    >
                        Subscribe
                    </button>
                </div>
            </form>
            {emailSendError && <p>There was a problem.</p>}
        </div>
    );
};

export default NewsletterSection;
