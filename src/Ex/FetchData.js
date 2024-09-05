import React, { useState, useEffect } from 'react';
import './style.css'

function FetchData() {
    const [coinData, setdata] = useState([]);
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';


    const myFetch= async()=>{
        try {
            const myData= await fetch(url);
            console.log(myData)
            const myDataArr= await myData.json();
            setdata(myDataArr);
        } 
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        myFetch()
    }, []);

    return (
        <div className="container">
            <h1>Cryptocurrency Prices</h1>
            {coinData.map(crypto => (
                <div className="card" key={crypto.id}>
                    <h2>{crypto.name} ({crypto.symbol.toUpperCase()})</h2>
                    <p>Current Price: ${crypto.current_price}</p>
                    <p>Market Cap: ${crypto.market_cap}</p>
                    <p className={crypto.price_change_percentage_24h < 0 ? 'negative' : ''}>
                      24h Change: {crypto.price_change_percentage_24h}%
                    </p>
                    <img src={crypto.image} alt={crypto.name} />
                </div>
            ))}
        </div>
    );
}

export default FetchData;
