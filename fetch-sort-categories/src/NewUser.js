import React from 'react'

const NewUser = ({ name, picture }) => {
  return (
    <div className="personCard">
      <img src={picture}></img>
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  )
}

export default NewUser
