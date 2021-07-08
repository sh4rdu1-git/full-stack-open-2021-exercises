import React, { useState } from 'react'

// Button component
const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

// Individual Statistic component
const Statistic = ({ text, value }) => {
  return (
    <p>{text} {value}</p>
  )
}

//Statistics component
const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given.</p>
      </div>
    )
  }

  const total = good + neutral + bad
  const average = (good - bad) / total
  const percentPositive = (good / total) * 100

  return (
    <div>
      <h1>Statistics</h1>
      <Statistic text="Good" value={good} />
      <Statistic text="Neutral" value={neutral} />
      <Statistic text="Bad" value={bad} />
      <Statistic text="All" value={total} />
      <Statistic text="Average" value={average} />
      <Statistic text="Positive" value={percentPositive} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => setGood(good + 1)
  const incrementNeutral = () => setNeutral(neutral + 1)
  const incrementBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={incrementGood} text="Good" />
      <Button handleClick={incrementNeutral} text="Neutral" />
      <Button handleClick={incrementBad} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App