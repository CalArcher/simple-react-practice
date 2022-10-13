import React, { useEffect, useState } from 'react'

const WrongColor = ({ correctColor }) => {
  let [color, setColor] = useState('')
  let [answer, setAnswer] = useState('white')

  const guessWrong = () => {
    setAnswer('red')
  }

  useEffect(() => {
    const hexColor = generateColor()
    setColor(hexColor)
    setAnswer('white')
  }, [correctColor])

  return (
    <button onClick={guessWrong} className="hex-button wrong-button" style={{ backgroundColor: answer }}>
      {color}
    </button>
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

export default WrongColor
