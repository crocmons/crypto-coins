'use client'

import Link from "next/link"
import { useState } from "react"


function SearchCoins({getSearchResults}) {
    const [query, setQuery] = useState('')


    const handleSubmit = async(e)=>{
        e.preventDefault();
        
        const searchResult = await fetch(`/api/coins/search?query=${query}`)

        const coins = await searchResult.json()

        getSearchResults(coins)

    }

  return (
    <div className="text-center my-20 gap-10">
        <form onSubmit={handleSubmit}>
           <input className="text-black border-2 border-black rounded-full px-3 py-2" type="text" placeholder="search coins..." value={query} onChange={(e)=>setQuery(e.target.value)}/>
           <button className="bg-black text-white rounded-full px-3 py-2 hover:bg-black/60" type="submit">Search Coins</button>
        </form>
    </div>
  )
}

export default SearchCoins