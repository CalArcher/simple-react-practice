import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import 'style.css'

const link = 'https://official-joke-api.appspot.com/random_joke'

//original link, https://official-joke-api.appspot.com/random_joke, stopped letting me fetch until the next day

const GetNewJoke = ({ appendJoke }) => {
  const [randomJoke, setRandomJoke] = useState('')
  const [allJokes, setAllJokes] = useState([])

  const fetchJokes = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRandomJoke(data)
      })
  }

  useEffect(() => {
    fetchJokes(link)
  }, [appendJoke])

  const jokeCardStyle = {
    border: '1px solid red'
  }

  if (randomJoke) {
    return (
      <div style={jokeCardStyle}>
        <span>{randomJoke.setup}</span>
        <span>{randomJoke.punchline}</span>
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
