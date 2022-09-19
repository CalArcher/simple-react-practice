import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import 'style.css'

const link = 'https://official-joke-api.appspot.com/random_joke'

const GetNewJoke = ({ appendJoke }) => {
  const [randomJoke, setRandomJoke] = useState([])

  const fetchJokes = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRandomJoke([...randomJoke, data])
      })
  }

  useEffect(() => {
    fetchJokes(link)
  }, [appendJoke])

  const jokeCardStyle = {
    border: '1px solid red',
    borderRadius: '10px',
    width: '20%',
    padding: '12px',
    margin: '5px',
    display: 'flex',
    flexDirection: 'column'
  }
  const setupStyle = {
    margin: '8px'
  }
  const punchlineStyle = {
    margin: '8px'
  }

  if (randomJoke) {
    return (
      <div>
        {randomJoke.map((joke, idx) => {
          return (
            <div key={idx} style={jokeCardStyle}>
              <span style={setupStyle}>{joke.setup}</span>
              <span style={punchlineStyle}>{joke.punchline}</span>
            </div>
          )
        })}
      </div>
    )
  }
}

export default function App() {
  const [appendJoke, setAppendJoke] = useState('')

  return (
    <div id="jokeBox">
      <button
        onClick={() => {
          setAppendJoke(appendJoke + 1)
        }}
      >
        Append Joke
      </button>
      <GetNewJoke appendJoke={appendJoke}></GetNewJoke>
    </div>
  )
}
