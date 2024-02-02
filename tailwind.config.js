/** @type {import('tailwindcss').Config} */

const colors = {
    black: "#111111",
    white: "#ffffff",
    orange: "#c8815f",
    customRed: "#f84c5d",
    mainGray: "#555555",
    lgray: "#999999",
};

const fontSize = {
    h1: [
        "3rem",
        {
            lineHeight: "1.25",
            letterSpacing: "1.5",
            fontWeight: "700",
        },
    ],
    h2: [
        "2.5rem",
        {
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
            fontWeight: "700",
        },
    ],
    h3: [
        "2.25rem",
        {
            lineHeight: "1.1",
            letterSpacing: "1",
            fontWeight: "700",
        },
    ],
    h4: [
        "2rem",
        {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
        },
    ],
    p: [
        "1.75rem",
        {
            lineHeight: "2.25rem",
            fontWeight: "300",
        },
    ],
};

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            jost: ["Jost", "sans-serif"],
        },

        extend: {
            backgroundImage: {
                newsletterBgImage: "url('/src/Assets/newsletter_popup_bg.jpg')",
            },
            colors: colors,
            fontSize: fontSize,
            animation: {
                "infinite-scroll": "infinite-scroll 25s linear infinite",
            },
            keyframes: {
                "infinite-scroll": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-100%)" },
                },
            },
        },
    },
    plugins: [],
};
