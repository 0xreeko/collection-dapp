interface Props {
    amount?: string,
    contract_type?: string,
    metadata?: string,
    name: string,
    symbol?: string,
    synced_at?: string,
    token_address: string,
    token_id: string,
    token_uri: string,
    idx: number
  }

export default function NiftyCard({token_uri, token_id, token_address, name, idx}: Props) {
  return (
    <div className="relative h-full overflow-hidden border rounded-2xl w-72" key={token_id}>
            <img src={token_uri} alt="collection image" className="duration-500  w-max h-max hover:scale-105" />
            <div className="absolute bottom-0 flex flex-col w-full h-20 p-3 text-gray-900 bg-white/20 backdrop-blur-lg">
              <span className="font-bold tracking-wider">{`${name} - #${token_id}`}</span>
              <span><a href={`https://opensea.io/assets/${token_address}/${token_id}`} target={"_blank"} className="hover:underline">View In OpenSea</a></span>
            </div>
          </div>
  )
}
