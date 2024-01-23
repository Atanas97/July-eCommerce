import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const EmailSend = () => {
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    const form = useRef();
    const userEmail = useRef();

    const [loading, setLoading] = useState(false);
    const [emailSendError, setEmailSendError] = useState(false);

    useEffect(() => emailjs.init(PUBLIC_KEY), []);

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                recipient: userEmail.current.value,
            });
        } catch (error) {
            setEmailSendError(error);
        } finally {
            setLoading(false);
            userEmail.current.value = "";
        }
    };

    return {
        form,
        loading,
        emailSendError,
        userEmail,
        handleNewsletterSubmit,
    };
};

export default EmailSend;
