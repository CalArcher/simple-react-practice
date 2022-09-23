import React, { useState, useEffect } from 'react'

const link = 'https://top-coin.herokuapp.com/api/coindata'

export default function CoinCards() {
  const [coins, setCoins] = useState([])

  const fetchCoinData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCoins(data))
  }

  useEffect(() => {
    fetchCoinData(link)
  }, [])

  const greenBorder = {
    border: '2px solid green'
  }
  const redBorder = {
    border: '2px solid red'
  }

  if (coins.length > 0) {
    return (
      <div className="coins-container">
        {coins.map((coin, idx) => {
          const percentage_24h = coin.percent_change_24h.toFixed(3)
          return (
            <div style={percentage_24h > 0 ? greenBorder : redBorder} className="coin-card" key={idx}>
              <h2>{coin.name}</h2>
              <span>{percentage_24h}</span>
            </div>
          )
        })}
      </div>
    )
  }
}
