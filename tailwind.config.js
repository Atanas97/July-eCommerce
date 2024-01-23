/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            jost: ["Jost", "sans-serif"],
        },
        colors: {
            black: "#111111",
            white: "#ffffff",
            orange: "#c8815f",
            red: "#f84c5d",
            gray: "#555555",
            lgray: "#999999",
        },
        fontSize: {
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
        },
        extend: {
            backgroundImage: {
                newsletterBgImage: "url('/src/Assets/newsletter_popup_bg.jpg')",
            },
        },
    },
    plugins: [],
};
