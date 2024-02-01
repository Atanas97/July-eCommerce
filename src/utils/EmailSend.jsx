import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const EmailSend = (TEMPLATE_ID) => {
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    // const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    const form = useRef();
    const userEmail = useRef();
    const userMessage = useRef();
    const username = useRef();

    const [loading, setLoading] = useState(false);
    const [emailSendError, setEmailSendError] = useState(false);

    useEffect(() => emailjs.init(PUBLIC_KEY), []);

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);

            await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                recipient: userEmail?.current?.value,
                message: userMessage?.current?.value,
                user_name: username?.current?.value,
            });
        } catch (error) {
            setEmailSendError(error);
            console.log(error);
        } finally {
            setLoading(false);
            form.current.reset();
        }
    };

    return {
        form,
        loading,
        emailSendError,
        userEmail,
        userMessage,
        username,
        handleNewsletterSubmit,
    };
};

export default EmailSend;
