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
          <button className="p-2 rounded-lg bg-gradient-to-br from-[#dd0baf] to-[#8602bc]">Search Collection</button>
        </div>
        <div className="themeToggle">
          <span>ICON</span>
        </div>
      </div>
     <div className="flex border border-red-400">
       <div className="w-full border details">
          <div className="flex flex-col items-center justify-center h-full">
            <img src="" alt="collection image" className="border rounded-full w-28 h-28" />
            <h2>Collection Name</h2>
            <div className="space-x-4 socialIcons">
              <span className="text-gray-600 hover:text-[#2081e2]">OpenSea</span>
              <span className="text-gray-600 duration-300 hover:text-[#1DA1F2]">Twitter</span>
              <span className="text-gray-600 hover:">Website</span>
            </div>
            </div>
       </div>
     </div>
    </div>
  );
}
