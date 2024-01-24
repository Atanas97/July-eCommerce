import React from "react";
import EmailSend from "../utils/EmailSend";
import Loader from "./Loader";

import { useForm } from "react-hook-form";
import FormErrorMsg from "../Components/FormErrorMsg";

const NewsletterSection = ({ title, message }) => {
    const { form, loading, emailSendError, userEmail, handleNewsletterSubmit } =
        EmailSend();

    const { register, formState } = useForm();
    const { errors } = formState;

    return (
        <div className="relative my-20 p-8 lg:my-40 text-center max-w-[50rem] mx-auto">
            {loading && <Loader />}
            <h4 className="text-h4 font-medium uppercase">{title}</h4>
            <h2 className="text-h2 my-10">{message}</h2>
            <form action="" ref={form} onSubmit={handleNewsletterSubmit}>
                <div className="relative">
                    <input
                        {...register("email", {
                            required: true,
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: "Please enter a valid email.",
                            },
                        })}
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
                    {errors.email && (
                        <FormErrorMsg message={errors.email?.message} />
                    )}
                </div>
            </form>
            {emailSendError && <p>There was a problem.</p>}
        </div>
    );
};

export default NewsletterSection;
