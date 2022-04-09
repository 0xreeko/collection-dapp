import type { LinksFunction } from "@remix-run/node";
import styles from "~/styles/app.css"

export const links: LinksFunction = () => [
  {rel: 'stylesheet', href: styles},
]

export default function Index() {
  return (
    <div className="bg-gradient-to-tr from-[#060508] to-[#1a1a1c] text-white h-screen w-full">
      <div className="flex items-center justify-between p-3 border border-black h-14">
        <div className="flex items-center w-full space-x-3">
          <h1 className="text-2xl font-bold">Collection dApp</h1>
          <input type="text" placeholder="Search by contract address..." className="pl-10 pr-3 max-w-sm w-full ring-1 ring-[#ed194a]" />
        </div>
        <div className="themeToggle">
          <span>ICON</span>
        </div>
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
