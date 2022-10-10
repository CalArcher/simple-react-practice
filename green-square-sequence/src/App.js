import React, { useState } from 'react'
import 'style.css'

let numOfSquares = 6

export default function App() {
  let [order, setOrder] = useState([])
  let squares = [...Array(numOfSquares)]

  const addEl = (num) => {
    setOrder((order = order.concat(num)))
  }

  const revSeq = async () => {
    for (let i = 1; i <= numOfSquares; i++) {
      await delay(500)
      const newOrder = order.slice(0, order.length - i)
      setOrder(newOrder)
    }
  }

  function delay(time) {
    return new Promise((res) => setTimeout(res, time))
  }

  if (order.length >= numOfSquares) {
    revSeq()
  }

  return squares.map((el, i) => {
    let classes = i + '-square'
    if (order.indexOf(i) >= 0) {
      classes += ' invis'
    }
    return (
      <div
        className={classes}
        key={i}
        onClick={() => {
          addEl(i)
        }}
      ></div>
    )
  })
}
