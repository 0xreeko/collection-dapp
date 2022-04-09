import type { LinksFunction } from "@remix-run/node";
import styles from "~/styles/app.css"

export const links: LinksFunction = () => [
  {rel: 'stylesheet', href: styles},
]

export default function Index() {
  return (
    <div className="bg-gradient-to-tr from-[#060508] to-[#1a1a1c] text-white h-screen w-full overflow-auto pb-6">
      <div className="flex items-center justify-between p-3 mb-6 border border-black h-14">
        <div className="flex items-center w-full space-x-3">
          <h1 className="text-2xl font-bold">Collection dApp</h1>
          <input type="text" placeholder="Search by contract address..." className="pl-10 pr-3 max-w-sm w-full ring-1 ring-[#ed194a]" />
          <button className="p-2 rounded-lg bg-gradient-to-br from-[#dd0baf] to-[#8602bc]">Search Collection</button>
        </div>
        <div className="themeToggle">
          <span>ICON</span>
        </div>
      </div>
       <div className="w-full space-y-6 details">
          <div className="flex flex-col items-center justify-center h-full">
            <img src="" alt="collection image" className="border rounded-full w-28 h-28" />
            <h2 className="text-[32px] font-bold tracking-widest">Collection Name</h2>
            <div className="space-x-4 socialIcons">
              <span className="text-gray-600 hover:text-[#2081e2]">OpenSea</span>
              <span className="text-gray-600 duration-300 hover:text-[#1DA1F2]">Twitter</span>
              <span className="text-gray-600 hover:">Website</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
          <div className="relative overflow-hidden border rounded-lg w-72 h-96">
            <img src="" alt="collection image" className="w-full h-full" />
            <div className="absolute bottom-0 flex flex-col w-full h-20 p-3 bg-white/60 backdrop-blur-lg">
              <span>Anumaki #8349</span>
              <span><a href="" target={"_blank"}>View In OpenSea</a></span>
            </div>
          </div>
          <div className="border rounded-lg w-72 h-96"></div>
          <div className="border rounded-lg w-72 h-96"></div>
          <div className="border rounded-lg w-72 h-96"></div>
          <div className="border rounded-lg w-72 h-96"></div>
          <div className="border rounded-lg w-72 h-96"></div>
          <div className="border rounded-lg w-72 h-96"></div>
          </div>
       </div>
    </div>
  );
}
