import { NextResponse } from "next/server";

async function fetchData(){
    const response = await fetch("https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0", {
       "method": "GET",
       "headers":{
           'X-RapidAPI-Key': '5fdd29336dmsh7aeec9f200302d7p1059e9jsn561dfefa6b6c',
           'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
       }
    })
    const coinsData = await response.json();
    return coinsData;
}

export async function GET(req){
    const getallCoins = await fetchData();
    const { searchParams } = new URL(req.url)
    console.log(searchParams.get('query'))
    const query = searchParams.get('query')

    const filteredCoins = getallCoins.data.coins.filter((coin)=>{
        return coin.name.toLowerCase().includes(query.toLowerCase()) || coin.symbol.toLowerCase().includes(query.toLowerCase())
    })
    return NextResponse.json(filteredCoins)
}