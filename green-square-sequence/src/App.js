import React, { useState } from 'react'
import 'style.css'

//set how many green squares you want displayed here
const numOfSquares = 6

export default function App() {
  let [order, setOrder] = useState([])
  let squares = [...Array(numOfSquares)]

  const addElement = (num) => {
    if (!order.includes(num)) {
      setOrder(order.concat(num))
    }
  }

  const reverseSequence = async () => {
    for (let i = 1; i <= numOfSquares; i++) {
      await delay(500)
      const newOrder = order.slice(0, order.length - i)
      setOrder(newOrder)
    }
  }

  if (order.length >= numOfSquares) {
    reverseSequence()
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
          addElement(i)
        }}
      ></div>
    )
  })
}

const delay = (time) => {
  return new Promise((res) => setTimeout(res, time))
}
