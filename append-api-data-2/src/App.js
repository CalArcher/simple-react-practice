import React, { useState, useEffect } from 'react'
import 'style.css'

//styles outside so not to clutter functions
const cardCont = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'
}

const cardStyle = {
  border: '3px solid white',
  borderRadius: '8px',
  width: '22%',
  height: '200px',
  margin: '5px',
  padding: '5px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const itemStyle = {
  margin: '5px',
  padding: '0'
}

const imgStyle = {
  width: '33%',
  border: '3px solid white',
  borderRadius: '50%'
}

const buttonStyle = {
  width: '70px',
  height: '70px',
  color: 'white',
  background: 'red',
  border: '3px solid white',
  borderRadius: '50%',
  fontSize: '40px'
}

const buttonCont = {
  width: '22%',
  height: '200px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const link = 'https://randomuser.me/api/'

const UserInfo = () => {
  const [users, setUsers] = useState([])
  const [appendNewUser, setAppendNewUser] = useState(1)

  const getNewUser = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setUsers([...users, data.results[0]])
        }
      })
  }

  const loadNewUser = () => {
    let tempValue = appendNewUser === 1 ? 0 : 1
    setAppendNewUser(tempValue)
  }

  useEffect(() => {
    getNewUser(link)
  }, [appendNewUser])

  return (
    <div style={cardCont}>
      {users.map((user, idx) => {
        if (user) {
          return (
            <div style={cardStyle} key={idx}>
              <h1 style={itemStyle}>
                {user.name.first} {user.name.last}
              </h1>
              <img style={imgStyle} src={user.picture.thumbnail}></img>
              <h3 style={itemStyle}>I live in {user.location.city}</h3>
            </div>
          )
        }
      })}
      <div style={buttonCont}>
        <button style={buttonStyle} onClick={loadNewUser}>
          +
        </button>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <UserInfo></UserInfo>
    </div>
  )
}
