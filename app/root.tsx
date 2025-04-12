import { LoaderFunctionArgs, json } from "@remix-run/cloudflare";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
} from "@remix-run/react";
import i18nServer, { localeCookie } from "./i18n.server";
import { getThemeUsingURLSearch } from "./utils/theme";

export const handle = { i18n: ["translation"] };

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const locale = await i18nServer.getLocale(request);
  const theme = getThemeUsingURLSearch(url.searchParams);

  return json(
    { locale, theme },
    { headers: { "Set-Cookie": await localeCookie.serialize(locale) } }
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const loaderData = useRouteLoaderData<typeof loader>("root");

  return (
    <html
      lang={loaderData?.locale ?? "en"}
      className={loaderData?.theme || "light"}
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
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ankdev.me/" />
        <meta property="og:title" content="Ankit Kumar (अंकित कुमार)" />
        <meta
          property="og:description"
          content="A little about me, I'm a Co-Founder, Software Engineer, UI/UX Designer, and Mentor—crafting tools people enjoy, writing thoughtful, maintainable code, and helping others grow with me."
        />
        <meta property="og:image" content="https://ankdev.me/assets/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="My personal website" />
        <meta name="twitter:url" content="https://ankdev.me/" />
        <meta name="twitter:title" content="Ankit Kumar (अंकित कुमार)" />
        <meta
          name="twitter:description"
          content="A little about me, I'm a Co-Founder, Software Engineer, UI/UX Designer, and Mentor—crafting tools people enjoy, writing thoughtful, maintainable code, and helping others grow with me."
        />
        <meta
          name="twitter:image"
          content="https://ankdev.me/assets/logo.png"
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
  return <Outlet />;
}
