import Image from "next/image";

export default function Coins({coins}){
    return(
        <>
         <ul className="grid grid-cols-4 mx-auto max-w-[1260px] gap-10">
            {
                coins.map((coin)=>(
                    <li key={coin.uuid} className="flex flex-col">
                       {console.log(coin)}
                       <Image 
                        src={coin.iconUrl}
                        alt='coin_image'
                        width={70}
                        height={70}
                       />

                        <h3 className="text-black my-2 font-bold ">{coin.name}</h3>
                        <p className="text-sm px-2">{coin.symbol}</p>
                        <p className="text-sm px-2">{coin.price}</p>
                        <p className="text-sm px-2">{coin.rank}</p>
                    </li>
                ))
            }
         </ul>
        </>
    )
}