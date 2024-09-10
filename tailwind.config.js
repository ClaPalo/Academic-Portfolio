import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: [
        nextui({
            themes: {
                custom: {
                    extend: "light",
                    colors: {
                        primary: {
                            50: "#A9C4FF",
                            100: "#A0BEFF",
                            200: "#98B8FF",
                            300: "#8FB2FF",
                            400: "#86ACFF",
                            500: "#7DA6FF",
                            600: "#7098F4",
                            700: "#628CE8",
                            800: "#5680DD",
                            900: "#4A74D1",
                            DEFAULT: "#5680DD",
                            foreground: "#000000",
                        },
                        focus: "#628CE8",
                        secondary: {
                            50: "#FFD570",
                            100: "#FACD6B",
                            200: "#F5C967",
                            300: "#F0C462",
                            400: "#EBBF5E",
                            500: "#E5BA5A",
                            600: "#E0B556",
                            700: "#DBB052",
                            800: "#D6AC4E",
                            900: "#D1A74A",
                            DEFAULT: "#E5BA5A",
                            foreground: "#000000",
                        },
                    },
                },
            },
        }),
    ],
};
