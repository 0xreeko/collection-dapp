import type { LinksFunction } from "@remix-run/node";
import styles from "~/styles/app.css"

export const links: LinksFunction = () => [
  {rel: 'stylesheet', href: styles},
]

export default function Index() {
  return (
    <div>
      <div className="p-3 border border-black h-14">
        <input type="text" placeholder="Search by contract address..." className="pl-10 pr-3 max-w-sm w-full ring-1 ring-[#ed194a]" />
      </div>
      <h1 className="text-3xl font-bold text-red-500">Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
