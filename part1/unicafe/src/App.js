import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => setGood(good + 1)
  const incrementNeutral = () => setNeutral(neutral + 1)
  const incrementBad = () => setBad(bad + 1)
  const total = good + neutral + bad
  const average = (good - bad) / total
  const percentPositive = (good / total) * 100

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={incrementGood}>Good</button>
      <button onClick={incrementNeutral}>Neutral</button>
      <button onClick={incrementBad}>Bad</button>

      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {total}</p>
      <p>Average {average}</p>
      <p>Positive {percentPositive}%</p>
    </div>
  )
}

export default App