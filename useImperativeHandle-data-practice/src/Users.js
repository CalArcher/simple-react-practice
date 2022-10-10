import React, { useState, useEffect, useImperativeHandle } from 'react'

const link = 'https://jsonplaceholder.typicode.com/users'

const Users = ({ userNum }, ref) => {
  const [users, setUsers] = useState([])

  const fetchUsers = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }

  useEffect(() => {
    fetchUsers(link)
    console.log('useEffect')
  }, [userNum])

  useImperativeHandle(
    ref,
    () => {
      console.log('useImperative')
      return { users: users[userNum] }
    },
    [userNum]
  )
  console.log('usersleng', users)
  return <div>{users.length > 1 ? <h1>{users[userNum].name}LENG</h1> : <h1></h1>}</div>
}

export default React.forwardRef(Users)
