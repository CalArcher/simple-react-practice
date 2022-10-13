import React, { useEffect, useState } from 'react'
import 'style.css'
import NewUser from './NewUser'

const link = 'https://randomuser.me/api/'

export default function App() {
  let [femaleUsers, setFemaleUsers] = useState([])
  let [maleUsers, setMaleUsers] = useState([])
  let [user, setUser] = useState([])

  const fetchData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]))
  }

  useEffect(() => {
    fetchData(link)
  }, [])

  const updateUsers = () => {
    const newUser = {
      name: `${user.name?.first} ${user.name?.last}`,
      gender: user.gender,
      picture: user.picture?.medium
    }
    if (newUser.gender === 'female') {
      setFemaleUsers((prev) => [...prev, newUser])
    } else {
      setMaleUsers((prev) => [...prev, newUser])
    }
  }

  return (
    <div>
      <button
        onClick={() => {
          fetchData(link)
          updateUsers()
        }}
      >
        Add Person
      </button>
      <div className="sortLabels">
        <h2>Men</h2>
        <h2>Women</h2>
      </div>
      <div className="people">
        <div className="males">
          {maleUsers.map((item) => {
            return (
              <div>
                <NewUser name={item.name} gender={item.gender} picture={item.picture}></NewUser>
              </div>
            )
          })}
        </div>
        <div className="midLine"></div>
        <div className="females">
          {femaleUsers.map((item) => {
            return (
              <div>
                <NewUser name={item.name} gender={item.gender} picture={item.picture}></NewUser>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
