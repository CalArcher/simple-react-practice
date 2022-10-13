import React, { useState, useEffect } from 'react'
import WrongColor from './WrongColor.js'
import 'style.css'

export default function App() {
  let [color, setColor] = useState('')
  let [randomNum, setRandomNum] = useState(0)

  useEffect(() => {
    const hexColor = generateColor()
    setColor(hexColor)
    setRandomNum(Math.random().toFixed(2))
  }, [])

  const guessCorrect = () => {
    const hexColor = generateColor()
    setRandomNum(Math.random().toFixed(2))
    setColor(hexColor)
  }

  let buttonOrder = (
    <div className="guess-container">
      <WrongColor correctColor={color}></WrongColor>
      <WrongColor correctColor={color}></WrongColor>
      <button onClick={guessCorrect} className="hex-button right-color">
        {color}
      </button>
    </div>
  )

  if (randomNum < 0.33) {
    buttonOrder = (
      <div className="guess-container">
        <WrongColor correctColor={color}></WrongColor>
        <button onClick={guessCorrect} className="hex-button right-color">
          {color}
        </button>
        <WrongColor correctColor={color}></WrongColor>
      </div>
    )
  } else if (randomNum > 0.66) {
    buttonOrder = (
      <div className="guess-container">
        <button onClick={guessCorrect} className="hex-button right-color">
          {color}
        </button>
        <WrongColor correctColor={color}></WrongColor>
        <WrongColor correctColor={color}></WrongColor>
      </div>
    )
  }

  return (
    <div className="game-container">
      <h1>Hex Color Guesser</h1>
      <div className="box" style={{ backgroundColor: color }}></div>
      {buttonOrder}
    </div>
  )
}

const generateColor = () => {
  let r = Math.floor(Math.random() * 255)
  let g = Math.floor(Math.random() * 255)
  let b = Math.floor(Math.random() * 255)

  const toHex = rgbToHex(r, g, b)
  const hexColor = componentToHex(toHex)
  return hexColor
}

function componentToHex(c) {
  var hex = c.toString(16)
  return hex.length == 1 ? '0' + hex : hex
}

function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
}
