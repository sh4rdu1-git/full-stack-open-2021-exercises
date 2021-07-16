import React, { useState } from 'react'

const App = () => {
  // contacts are stored in array 'persons'
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      phone: '1800123123',
    }
  ])

  const [newName, setNewName] = useState('') // for name text input
  const [newPhone, setNewPhone] = useState('') // for phone number input

  // updates state on every change in input
  const handleNameTextChange = (event) => setNewName(event.target.value)
  const handlePhoneNumberChange = (event) => setNewPhone(event.target.value)

  // adds new contact to array 'persons'
  const handleAddPerson = (event) => {
    event.preventDefault()

    // check for person already existing in phonebook
    // if exists; show alert and don't add to phonebook
    const found = persons.find(person => person.name === newName)
    if (found) {
      alert(`${newName} is already present in phonebook`)
    } else {
      const newPersonObject = {
        id: persons.length + 1,
        name: newName,
        phone: newPhone,
      }
      setPersons(persons.concat(newPersonObject))
      setNewName('')
      setNewPhone('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameTextChange} />
        </div>
        <div>
          phone: <input type="phone" value={newPhone} onChange={handlePhoneNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={handleAddPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name}: {person.phone}</p>)}
      {/* in above map function, we have used person's name as the key */}
    </div>
  )
}

export default App