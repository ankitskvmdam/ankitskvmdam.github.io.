import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  LoaderFunctionArgs,
  useRouteLoaderData,
  data,
  useLoaderData,
} from "react-router";
import i18nServer from "./i18n.server";
import "./styles.css";
import { localeCookie, appStateCookie } from "./cookie";
import { AppStoreProvider, TAppStoreProviderProps } from "./app-store-provider";
import React from "react";
import { TAppState } from "./types/app";

export async function loader({ request }: LoaderFunctionArgs) {
  let [locale, appState] = await Promise.all([
    i18nServer.getLocale(request),
    appStateCookie.parse(
      request.headers.get("Cookie"),
    ) as Promise<TAppState | null>,
  ]);

  if (typeof appState !== "object" || !appState) {
    appState = {
      theme: "light",
      fontSize: 16,
      locale,
    };
  }

  return data(
    { appState, locale },
    {
      headers: [
        ["Set-Cookie", await appStateCookie.serialize(appState)],
        ["Set-Cookie", await localeCookie.serialize(locale)],
      ],
    },
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const loaderData = useRouteLoaderData<typeof loader>("root");

  return (
    <html
      lang={loaderData?.locale ?? "en"}
      className={loaderData?.appState?.theme || "light"}
      style={{ fontSize: loaderData?.appState?.fontSize || 16 }}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/svg/logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const { appState, locale } = useLoaderData<typeof loader>();

  const config = React.useMemo(
    (): TAppStoreProviderProps["config"] => ({
      fontSize: appState.fontSize,
      theme: appState.theme,
      locale: locale,
    }),
    [appState, locale],
  );
  return (
    <AppStoreProvider config={config}>
      <Outlet />
    </AppStoreProvider>
  );
}
