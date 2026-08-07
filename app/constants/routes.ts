import { PREVIEW_TAB_SEARCH_PARAM } from "./search-params";

export const BASE_DEPLOYED_URL = "https://ankdev.me";

export const PROJECTS_ROUTE = "/projects";
export const BLOGS_ROUTE = "/blogs";
export const BLOG_ROUTE = "/blog";
export const ABOUT_ROUTE = "/about";
export const HOME_ROUTE = "/";

// Project routes.
export const PROJECT_ROUTE = "/project";
export const MEDIAPIPE_WEBWORKER_ROUTE = `${PROJECT_ROUTE}/mediapipe-webworker?tab=${PREVIEW_TAB_SEARCH_PARAM}`;

// Long-form project write-ups.
export const PROJECT_BLOG_ROUTE = "/project-blog";
export const CLEAN_JSDOC_THEME_ROUTE = `${PROJECT_BLOG_ROUTE}/clean-jsdoc-theme`;
export const OUTSPEED_JS_ROUTE = `${PROJECT_BLOG_ROUTE}/outspeed-js`;
export const ERSILIA_REINVENT4_ROUTE = `${PROJECT_BLOG_ROUTE}/ersilia-reinvent4`;
