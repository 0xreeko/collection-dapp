import type { LinksFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import NiftyCard from "~/components/NiftyCard";
import styles from "~/styles/app.css"
import {SearchIcon, BeakerIcon} from "@heroicons/react/solid"
// dotenv


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
  const [deets, setDeets] = useState<Props[]>([])
  const [address, setAddress] = useState("0xed5af388653567af2f388e6224dc7c4b3241c544")
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState("")
  const [size, setSize] = useState(0)
  const [profile, setProfile] = useState("")
  
  useEffect(() => {
      fetchCollection()
  }, [])

  const fetchCollection = async() => {
    setLoading(true)
  let data = await fetch("https://deep-index.moralis.io/api/v2/nft/0xed5af388653567af2f388e6224dc7c4b3241c544?chain=eth&format=decimal", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "X-API-Key": `RKfjFmDm2mTB3nVIS77k0mtgbZsUnOjLNRGbus4RwQBHGd7BBheskTlK849GZyXx`,
    },
  }).then(res => res.json()).then(res => res.result);
  console.log(data)
  setDeets(data)
  console.log(JSON.parse(data[0].metadata).image)
  setTitle(data[0].name)
  setLoading(false)
  }

//   const etherSearch = async (input: string) => {
//     if (input === "") {
//     setLoading(true)
//     const contract_address = new ethers.Contract(address, ERC721_ABI, provider)
//     let name = await contract_address.name()
//     let symbol = await contract_address.symbol()
//     let token_uri = await contract_address.tokenURI(1)
//     let total_supply = ethers.utils.formatEther(await contract_address.totalSupply())
//     let tSupply = Number(total_supply) * 1000000000000000000
//     setTitle(name)
//     console.log(token_uri)
//     setSize(tSupply)
//     setProfile(token_uri)
//     let arr = []
    
//     // for(let i = 1; i < tSupply; i++) {
//     //   let token_uri = await contract_address.tokenURI(i)
//     //   let token_id = i
//     //   let token_address = address
//     //   let metadata = token_uri
//     //   arr.push({ metadata, symbol, token_address, token_id, token_uri })
//     //   console.log(arr)
//     //   setDeets([...arr])
//     // }
    
//     setLoading(false)  
// }
//   else {
//     setLoading(true)
//     setAddress(input)
//     const contract_address = new ethers.Contract(address, ERC721_ABI, provider)
//     let name = await contract_address.name()
//     let token_uri = await contract_address.tokenURI(1)
//     let total_supply = await contract_address.totalSupply()
//     setLoading(false)  
//   }
// }

  const searchByID = async (input: string) => {

    if (input === "") {
    setLoading(true)
    fetchCollection()
    setLoading(false)
  }
  else {
    setLoading(true)
    setDeets(item => item.filter(item => item.token_id.toString().includes(input)))
    setLoading(false)
  }
}
  return (
    <div className="bg-gradient-to-tr from-[#060508] to-[#1a1a1c] text-white h-screen w-full overflow-auto pb-6">
      <div className="flex items-center justify-between p-3 mb-6 border border-black h-14">
        <div className="flex items-center w-full space-x-3">
          <h1 className="text-2xl font-bold">aZuKi dApp</h1>
          <div className="relative flex items-center">
            <SearchIcon className="absolute w-5 h-5 ml-3 text-gray-600"/>
            <input type="text" placeholder="Search by aZuKi ID..." className="pl-10 pr-3 text-black outline-none max-w-sm w-full max-h-full rounded-sm ring-1 ring-[#ed194a]" onChange={(e) => searchByID(e.target.value)}/>
            </div>
        </div>
        <div className="themeToggle">
          <span>
            <BeakerIcon className="w-5 h-5 text-gray-600" />
          </span>
        </div>
      </div>
       <div className="w-full space-y-6 details">
          <div className="flex flex-col items-center justify-center h-full">
            {/* <img src={`` } alt="collection image" className="border rounded-full w-28 h-28" /> */}
            <h2 className="text-[32px] font-bold tracking-widest">{title}</h2>
            <span className="tracking-widest">No. aZuKis fetched: {deets.length}/10,000</span>
            <div className="space-x-4 socialIcons">
              <span className="text-gray-600 hover:text-[#2081e2]"><a target={"_blank"} href={`https://opensea.io/collection/${title.toLowerCase()}`}>OpenSea</a></span>
              <span className="text-gray-600 duration-300 hover:text-[#1DA1F2]"><a href="https://twitter.com/azukiofficial" target={"_blank"}>Twitter</a></span>
              <span className="text-gray-600 duration-300 hover:text-[#ed184a]"><a href="https://www.azuki.com/" target={"_blank"}>Website</a></span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
          {loading === true ? <div className="text-center">Loading...</div> : deets.map((item: Props, idx) => {
            let mData = JSON.parse(item.metadata)
            return (
            <NiftyCard token_uri={mData.image.includes("ipfs://") ? `https://ipfs.io/ipfs/${mData.image.split("//")[1]}` : mData.image.includes("https://") ? `https://ipfs.io/ipfs/${mData.image.split("ipfs/")[1]}` : `${mData.image}`} token_id={item.token_id} token_address={item.token_address} name={item.symbol} key={idx} idx={0}/>
            )})} 
        {/* 
        BAYC - `https://ipfs.io/ipfs/${JSON.parse(item.metadata).image?.split("//")[1]}`
        Azuki - `https://ipfs.io/ipfs/${JSON.parse(item.metadata).image?.split("ipfs/")[1]}`
        Clone X - 
        */}
          </div>
       </div>
    </div>
  );
}
