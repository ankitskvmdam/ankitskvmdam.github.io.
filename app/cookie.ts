import { createCookie } from "react-router";

export const localeCookie = createCookie("lng", {
  path: "/",
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  httpOnly: true,
});

export const appStateCookie = createCookie("app-state", {
  path: "/",
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  httpOnly: true,
});
