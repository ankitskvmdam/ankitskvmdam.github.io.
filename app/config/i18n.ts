import en from "~/locales/en/home";
// import hi from "~/locales/hi/home";

// This is the list of languages your application supports
// export const supportedLngs = ["en", "hi"];
export const supportedLngs = ["en"];

// This is the language you want to use in case
// if the user language is not in the supportedLngs
export const fallbackLng = "en";

// The default namespace of i18next is "translation", but you can customize it
// here
export const defaultNS = "home";

export const resources = {
  en: { home: en },
  // hi: { home: hi }, // Add hindi once we have the translation ready.
};
