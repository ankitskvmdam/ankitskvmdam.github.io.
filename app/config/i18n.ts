import en_home from "~/locales/en/home";
import en_common from "~/locales/en/common";
import en_about from "~/locales/en/about";
import en_blogs from "~/locales/en/blogs";
import en_projects from "~/locales/en/projects";

// import hi from "~/locales/hi/home";

// This is the list of languages your application supports
// export const supportedLngs = ["en", "hi"];
export const supportedLngs = ["en"];

// This is the language you want to use in case
// if the user language is not in the supportedLngs
export const fallbackLng = "en";

// The default namespace of i18next is "translation", but you can customize it
// here
export const defaultNS = "common";

export const resources = {
  en: {
    home: en_home,
    common: en_common,
    about: en_about,
    blogs: en_blogs,
    projects: en_projects,
  },
  hi: { home: en_home, common: en_common }, // Add hindi once we have the translation ready.
};
