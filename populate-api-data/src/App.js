import React, { useState, useEffect } from 'react'
import 'style.css'

//NOTE: styles would normally be put inside style.css, and the components would be in their own separate files, but this is practicing building everything in one file

const CoinCard = ({ name, imageUrl, price, change }) => {
  let cardStyle = {
    width: '90%',
    margin: '3px',
    textAlign: 'center'
  }
  let cardContStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100px',
    border: '3px solid gray',
    borderRadius: '3rem',
    margin: '20px',
    padding: '30px'
  }

  let changeUp = {
    width: '90%',
    margin: '8px',
    textAlign: 'center',
    color: 'green'
  }

  let changeDown = {
    width: '90%',
    margin: '8px',
    textAlign: 'center',
    color: 'red'
  }

  let changeStyle = change >= 0 ? changeUp : changeDown

  return (
    <div style={cardContStyle}>
      <img style={cardStyle} src={imageUrl}></img>
      <h3 style={cardStyle}>{name}</h3>
      <h6 style={cardStyle}>{price.toFixed(3)}</h6>
      <h6 style={changeStyle}>{change.toFixed(3)}</h6>
    </div>
  )
}

const PopulateData = () => {
  let apiDataLink = 'https://top-coin.herokuapp.com/api/coindata'

  const [fetchData, setFetchData] = useState([])

  useEffect(() => {
    fetch(apiDataLink)
      .then((res) => res.json())
      .then((data) => setFetchData(data))
      .catch((e) => {
        console.log(e)
      })
  }, [])

  console.log('fd', fetchData)

  let contStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }

  if (fetchData) {
    return (
      <div style={contStyle}>
        {fetchData.map((coin, idx) => {
          return (
            <CoinCard
              key={idx}
              name={coin.name}
              imageUrl={coin.currencyLogo}
              price={coin.current_price[0]}
              change={coin.percent_change_24h}
            ></CoinCard>
          )
        })}
      </div>
    )
  }
}

export default function App() {
  return (
    <div>
      <PopulateData></PopulateData>
    </div>
  )
}
