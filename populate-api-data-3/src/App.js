import React, { useState, useEffect } from 'react'
import 'style.css'

//api: https://top-coin.herokuapp.com/api/coindata
const link = 'https://top-coin.herokuapp.com/api/coindata'

const CoinCards = ({ coins }) => {
  const percentStyleUp = {
    color: 'green'
  }
  const percentStyleDown = {
    color: 'red'
  }
  const coinTitle = {
    fontSize: '20px',
    fontFamily: 'sans-serif'
  }
  const coinsCont = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid white',
    width: 'fit-content',
    padding: '5px'
  }

  const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }

  return (
    <div style={divStyle}>
      {coins.map((coin, idx) => {
        let coinStyle = coin.percent_change_30d >= 0 ? percentStyleUp : percentStyleDown
        return (
          <div style={coinsCont} key={idx}>
            <h1 style={coinTitle}>{coin.name}</h1>
            <span style={coinStyle}>{coin.percent_change_30d}</span>
          </div>
        )
      })}
    </div>
  )
}

const AllCoins = () => {
  const [coins, setCoins] = useState()

  const fetchData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCoins(data))
  }

  useEffect(() => {
    fetchData(link)
  }, [])

  if (coins) {
    return (
      <div>
        <CoinCards coins={coins}></CoinCards>
      </div>
    )
  }
}

export default function App() {
  return (
    <div>
      <AllCoins></AllCoins>
    </div>
  )
}
