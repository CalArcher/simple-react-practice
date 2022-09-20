import React, { useState, useEffect } from 'react'
import 'style.css'

//api to use: https://example.gcommer.com/users

//NOTE: styles would normally be put inside style.css, and the components would be in their own separate files, but this is practicing building everything in one file

const UserCard = ({ name, shape, color }) => {
  let cardStyle = {
    border: '2px solid red',
    borderRadius: '10px',
    borderColor: color,
    width: '30%',
    margin: '10px',
    padding: '10px',
    textAlign: 'center'
  }

  let tri = {
    color: color,
    width: '0',
    height: '0',
    borderLeft: '25px solid transparent',
    borderRight: '25px solid transparent',
    borderBottom: '25px solid black',
    borderBottomColor: color
  }
  let circle = {
    color: color,
    backgroundColor: color,
    width: '25px',
    height: '25px',
    border: '2px solid red',
    borderColor: color,
    borderRadius: '50%'
  }

  let square = {
    color: color,
    backgroundColor: color,
    width: '25px',
    height: '25px',
    border: '2px solid red',
    borderColor: color
  }

  let shapeStyle = {}

  if (shape === 'triangle') {
    shapeStyle = tri
  } else if (shape === 'square') {
    shapeStyle = square
  } else if (shape === 'circle') {
    shapeStyle = circle
  }

  return (
    <div style={cardStyle}>
      <h3>{name}</h3>
      <span>
        {name}'s favorite shape is a {shape}
      </span>
      <div style={shapeStyle}></div>
    </div>
  )
}

const GetData = () => {
  const [users, setUsers] = useState(null)

  useEffect(() => {
    fetch('https://example.gcommer.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  if (users) {
    return users.map((user, i) => {
      return <UserCard key={i} name={user.name} shape={user.favorites.shape} color={user.favorites.color}></UserCard>
    })
  }
}
const TestData = () => {
  return <h1>Hello</h1>
}

export default function App() {
  let contStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row'
  }

  return (
    <div style={contStyle}>
      <GetData></GetData>
    </div>
  )
}
