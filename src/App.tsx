import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/quotes')
      .then(resp => resp.json())
      .then(quotes => setQuotes(quotes))
  }, []
  )

  const [qouteOftheweek, setQuoteOftheweek] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/quoteoftheweek')
      .then(getquote => getquote.json())
      .then(qouteOftheweek => setQuoteOftheweek(qouteOftheweek))
  })
  return (
    <div className="App">
      <h1>Daily Quotes</h1>
      <ul>

        {quotes.map(quotes => (
          <li>{quotes.quote}</li>
        ))}
      </ul>
      <a href='http://localhost:3001/quoteoftheweek'>Qoute of the week</a>
    </div>
  )
}

export default App
