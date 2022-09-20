import React, { useEffect, useState } from 'react'
import 'style.css'

const link = 'https://official-joke-api.appspot.com/random_joke'

const JokesContainer = ({ appendJoke }) => {
  const [jokes, setJokes] = useState([])

  const fetchJokes = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setJokes([...jokes, data])
      })
  }

  useEffect(() => {
    fetchJokes(link)
  }, [appendJoke])

  if (jokes) {
    return <JokeList jokes={jokes}></JokeList>
  }
}

const JokeList = ({ jokes }) => {
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

  return (
    <div>
      {jokes.map((joke, idx) => {
        //handles undefined joke in jokes prop
        if (joke) {
          return (
            <div key={idx} style={jokeCardStyle}>
              <span style={setupStyle}>{joke.setup}</span>
              <span style={punchlineStyle}>{joke.punchline}</span>
            </div>
          )
        }
      })}
    </div>
  )
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
      <JokesContainer appendJoke={appendJoke}></JokesContainer>
    </div>
  )
}
