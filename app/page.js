'use client'
import Image from 'next/image'
import Coins from './components/Coins'
import SearchCoins from './components/SearchCoins'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    
    const getCoins = async()=>{
      const response = await fetch(`/api/coins`);
      const resultData = await response.json();
      setCoins(resultData.data.coins);
    }

    getCoins();

  }, [])
  
  return (
    <main className='text-center'>

      <h1 className="font-bold text-6xl mt-14">
        <Link href='/'>
        Search Your Fav Crypto Coins
        </Link>
      </h1>
      <SearchCoins getSearchResults={(results)=>setCoins(results)} />
      <Coins coins={coins}/>
    </main>
  )
}
