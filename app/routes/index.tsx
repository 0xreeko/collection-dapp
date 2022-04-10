import type { LinksFunction } from "@remix-run/node";
import { string } from "prop-types";
import { useEffect, useState } from "react";
import NiftyCard from "~/components/NiftyCard";
import styles from "~/styles/app.css"

export const links: LinksFunction = () => [
  {rel: 'stylesheet', href: styles},
]

interface Props {
  amount: string,
  contract_type: string,
  metadata: string,
  name: string,
  symbol: string,
  synced_at: string,
  token_address: string,
  token_id: string,
  token_uri: string,
}

export default function Index() { 
  const [deets, setDeets] = useState([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState("")
  const [profile, setProfile] = useState()

  useEffect(() => {
    defaultSearch("")
  }, [])

  const defaultSearch = async (address?: string) => {

    if (address === "") {
    setLoading(true)
    let data = await fetch("https://deep-index.moralis.io/api/v2/nft/0xed5af388653567af2f388e6224dc7c4b3241c544?chain=eth&format=decimal", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-API-Key": "RKfjFmDm2mTB3nVIS77k0mtgbZsUnOjLNRGbus4RwQBHGd7BBheskTlK849GZyXx"
      },
    }).then(res => res.json()).then(res => res.result);
    console.log(data)
    setDeets(data)
    setTitle(data[0].name)
    setLoading(false)
  }
  else {
    setLoading(true)
    let data = await fetch(`https://deep-index.moralis.io/api/v2/nft/${address}?chain=eth&format=decimal&limit=100`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-API-Key": "RKfjFmDm2mTB3nVIS77k0mtgbZsUnOjLNRGbus4RwQBHGd7BBheskTlK849GZyXx"
      },
    }).then(res => res.json()).then(res => res.result);
    console.log(data[0])
    console.log(JSON.parse(data[0].metadata).image)
    setDeets(data)
    setTitle(data[0].name)
    setLoading(false)
  }
}
  return (
    <div className="bg-gradient-to-tr from-[#060508] to-[#1a1a1c] text-white h-screen w-full overflow-auto pb-6">
      <div className="flex items-center justify-between p-3 mb-6 border border-black h-14">
        <div className="flex items-center w-full space-x-3">
          <h1 className="text-2xl font-bold">Collection dApp</h1>
          <input type="text" placeholder="Search by contract address..." className="pl-10 pr-3 text-black outline-none max-w-sm w-full ring-1 ring-[#ed194a]" onChange={(e) => setInput(e.target.value)}/>
          <button className="p-2 rounded-lg bg-gradient-to-br from-[#dd0baf] to-[#8602bc]" onClick={() => defaultSearch(input)}>Search Collection</button>
        </div>
        <div className="themeToggle">
          <span>ICON</span>
        </div>
      </div>
       <div className="w-full space-y-6 details">
          <div className="flex flex-col items-center justify-center h-full">
            {/* <img src={`` } alt="collection image" className="border rounded-full w-28 h-28" /> */}
            <h2 className="text-[32px] font-bold tracking-widest">{title}</h2>
            <div className="space-x-4 socialIcons">
              <span className="text-gray-600 hover:text-[#2081e2]"><a target={"_blank"} href={`https://opensea.io/collection/boredapeyachtclub`}>OpenSea</a></span>
              <span className="text-gray-600 duration-300 hover:text-[#1DA1F2]">Twitter</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
          {loading === true ? <div className="text-center">Loading...</div> : deets.map((item: Props, idx) => (
            <NiftyCard token_uri={`${JSON.parse(item.metadata).image}`} token_id={item.token_id} token_address={item.token_address} name={item.name} key  ={idx} idx={0}/>
        ))} 
          </div>
       </div>
    </div>
  );
}
