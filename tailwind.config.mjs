/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sectionBg: "var(--section-bg)",
        buttonBg: "var(--button-bg)",
        buttonHoverBg: "var(--button-hover-bg)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        textWhite: "var(--text-white)",

        /* Offer component colors */
        offerGradientFrom: "var(--offer-gradient-from)",
        offerGradientTo: "var(--offer-gradient-to)",
        offerText: "var(--offer-text)",
        offerTextHover: "var(--offer-text-hover)",

        /* Hero component colors */
        heroBg: "var(--hero-bg)",
        heroText: "var(--hero-text)",
        heroButtonBg: "var(--hero-button-bg)",
        heroButtonHoverBg: "var(--hero-button-hover-bg)",
        heroBorder: "var(--hero-border)",
        heroIconColor: "var(--hero-icon-color)",

        /* Footer component colors */
        footerBg: "var(--footer-bg)",
        footerText: "var(--footer-text)",
        footerInputText: "var(--footer-input-text)",
        footerButtonBg: "var(--footer-button-bg)",
        footerButtonHoverBg: "var(--footer-button-hover-bg)",

        /* Header component colors */
        headerBg: "var(--header-bg)",
        headerText: "var(--header-text)",
        headerLinkHover: "var(--header-link-hover)",
        headerButtonBg: "var(--header-button-bg)",
        headerButtonText: "var(--header-button-text)",
        headerButtonHoverBg: "var(--header-button-hover-bg)",

        /* ProductCard component colors */
        cardBg: "var(--card-bg)",
        cardTextPrimary: "var(--card-text-primary)",
        cardTextSecondary: "var(--card-text-secondary)",
        cardButtonBg: "var(--card-button-bg)",
        cardButtonText: "var(--card-button-text)",
        cardButtonHoverBg: "var(--card-button-hover-bg)",
      },
    },
  },
  plugins: [],
};
