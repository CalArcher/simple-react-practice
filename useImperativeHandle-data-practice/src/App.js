import React, { useRef, useState } from 'react'
import 'style.css'
import Users from './Users'

export default function App() {
  const inputRef = useRef()
  const [userNum, setUserNum] = useState(0)

  return (
    <div>
      <Users userNum={userNum} ref={inputRef}></Users>
      <h1>Hello World!</h1>
      <button
        onClick={() => {
          setUserNum(userNum + 1)
          console.log('click')
        }}
      >
        fetch new users
      </button>
      {inputRef.current?.users ? <span>{inputRef.current.users.title}</span> : <span></span>}
    </div>
  )
}
