import React, { useEffect, useRef, useState } from 'react'
import 'style.css'
import Users from './Users'

export default function App() {
  const inputRef = useRef()
  const [userNum, setUserNum] = useState(0)
  const [userList, setUserList] = useState([])

  console.log('ref.current', inputRef)

  useEffect(() => {
    setUserList(inputRef.current.users)
  })

  console.log('list', userList)
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
        Get a new user
      </button>
      {userList.length > 1 ? <span>{userList.name}</span> : <span></span>}
    </div>
  )
}
