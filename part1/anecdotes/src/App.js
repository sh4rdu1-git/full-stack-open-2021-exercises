import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <div>
      <button onClick={handleClick}>
        {text}
      </button>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]

  const voteArray = new Array(anecdotes.length).fill(0) // Array for storing the votes for anecdotes

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(voteArray)

  const handleRandomizer = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)
  }

  const handleVote = () => {
    const vote = [...votes]
    vote[selected] += 1
    setVotes(vote)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>This anecdote has {votes[selected]} votes.</p>
      <Button handleClick={handleRandomizer} text="Randomize" />
      <Button handleClick={handleVote} text="Vote" />
    </div>
  )
}

export default App