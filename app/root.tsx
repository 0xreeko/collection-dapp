import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "~/styles/app.css";
import styleTailwind from "~/styles/tailwind.css";

export const links: LinksFunction = () => 
   [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: styleTailwind },
  ]

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Bored Apes Yacht Club Collection",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
