import { MetaFunction } from "react-router";
import { BASE_DEPLOYED_URL } from "~/constants/routes";

export function getURL(url: string) {
  return url.startsWith("http") ? url : `${BASE_DEPLOYED_URL}${url}`;
}

export type TBuildTwitterMetaOptions = {
  card?: string;
  url?: string;
  title?: string;
  description?: string;
  image?: string;
};

export function buildTwitterMeta(
  options = {} as TBuildTwitterMetaOptions,
): ReturnType<MetaFunction> {
  const {
    url = "",
    title = "Ankit Kumar (अंकित कुमार)",
    description = "A little about me, I'm a Co-Founder, Software Engineer, UI/UX Designer, and Mentor—crafting tools people enjoy, writing thoughtful, maintainable code, and helping others grow with me.",
    image = "/assets/logo.png",
    card = "Ankit Kumar's website",
  } = options;

  return [
    { name: "twitter:card", content: card },
    { name: "twitter:url", content: getURL(url) },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: getURL(image) },
  ];
}

export type TBuildFacebookMetaOptions = {
  type?: string;
  url?: string;
  title?: string;
  description?: string;
  image?: string;
};

export function buildFacebookMeta(
  options = {} as TBuildFacebookMetaOptions,
): ReturnType<MetaFunction> {
  const {
    type = "website",
    url = "",
    title = "Ankit Kumar (अंकित कुमार)",
    description = "A little about me, I'm a Co-Founder, Software Engineer, UI/UX Designer, and Mentor—crafting tools people enjoy, writing thoughtful, maintainable code, and helping others grow with me.",
    image = "/assets/logo.png",
  } = options;

  return [
    { property: "og:type", content: type },
    { property: "og:url", content: getURL(url) },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: getURL(image) },
  ];
}

export type TGetMetaOptions = TBuildFacebookMetaOptions &
  TBuildTwitterMetaOptions;

export function getMeta(
  options = {} as TGetMetaOptions,
): ReturnType<MetaFunction> {
  const { type, description, image, title, url, card } = options;

  return [
    ...buildFacebookMeta({ type, url, title, description, image })!,
    ...buildTwitterMeta({ card, url, title, description, image })!,
  ];
}
