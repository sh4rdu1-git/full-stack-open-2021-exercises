import React, { useState } from 'react'

const App = () => {
  // contacts are stored in array 'persons'
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
    }
  ])

  const [newName, setNewName] = useState('') // for name text input

  // updates state on every change in input
  const handleNameTextChange = (event) => setNewName(event.target.value)

  // adds new contact to array 'persons'
  const handleAddPerson = (event) => {
    event.preventDefault()
    const newPersonObject = {
      id: persons.length + 1,
      name: newName
    }
    setPersons(persons.concat(newPersonObject))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameTextChange} />
        </div>
        <div>
          <button type="submit" onClick={handleAddPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name}</p>)}
      {/* in above map function, we have used person's name as the key */}
    </div>
  )
}

export default App