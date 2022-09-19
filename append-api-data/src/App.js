import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import 'style.css'

const jokeCardStyle = {
  border: '1px solid red'
}

const link = 'https://official-joke-api.appspot.com/random_joke'

const GetNewJoke = ({ appendJoke }) => {
  const [randomJoke, setRandomJoke] = useState([])
  // const [allJokes, setAllJokes] = useState([])

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

  if (randomJoke) {
    return (
      <div>
        {randomJoke.map((joke, idx) => {
          return (
            <div key={idx} style={jokeCardStyle}>
              <span>{joke.setup}</span>
              <span>{joke.punchline}</span>
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
