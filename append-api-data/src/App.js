import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import 'style.css'

const link = 'https://example.gcommer.com/users'

//original link, https://official-joke-api.appspot.com/random_joke, stopped letting me fetch until the next day

const GetNewJoke = ({ fetchMe }) => {
  const [randomJoke, setRandomJoke] = useState('')

  const fetchJokes = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRandomJoke(data)
      })
  }

  useEffect(() => {
    console.log('randomJoke: ', randomJoke)

    fetchJokes(link)
  }, [fetchMe])

  if (randomJoke) {
    return <>{JSON.stringify(randomJoke)}</>
  }
}

export default function App() {
  const [fetchMe, setFetchMe] = useState('')

  return (
    <div id="jokeBox">
      <button
        onClick={() => {
          setFetchMe(fetchMe + 1)
        }}
      >
        Fetch Again
      </button>
      <GetNewJoke fetchMe={fetchMe}></GetNewJoke>
    </div>
  )
}
