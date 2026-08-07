import { PREVIEW_TAB_SEARCH_PARAM } from "./search-params";

export const BASE_DEPLOYED_URL = "https://ankdev.me";

export const PROJECTS_ROUTE = "/projects";
export const BLOGS_ROUTE = "/blogs";
export const BLOG_ROUTE = "/blog";
export const ABOUT_ROUTE = "/about";
export const HOME_ROUTE = "/";

// Blog posts that other pages link to directly.
export const MEDIAPIPE_WEBWORKER_BLOG_ROUTE = `${BLOG_ROUTE}/how-to-run-mediapipe-task-vision-in-a-web-worker`;

// Project routes.
export const PROJECT_ROUTE = "/project";
export const MEDIAPIPE_WEBWORKER_ROUTE = `${PROJECT_ROUTE}/mediapipe-webworker?tab=${PREVIEW_TAB_SEARCH_PARAM}`;

// Long-form project write-ups.
export const PROJECT_BLOG_ROUTE = "/project-blog";
export const CLEAN_JSDOC_THEME_ROUTE = `${PROJECT_BLOG_ROUTE}/clean-jsdoc-theme`;
export const OUTSPEED_JS_ROUTE = `${PROJECT_BLOG_ROUTE}/outspeed-js`;
export const ERSILIA_REINVENT4_ROUTE = `${PROJECT_BLOG_ROUTE}/ersilia-reinvent4`;
