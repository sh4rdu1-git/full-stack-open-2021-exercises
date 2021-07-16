import React, { useState } from 'react'

const App = () => {
  // contacts are stored in array 'persons'
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppins', phone: '39-23-6423122' },
  ])

  const [newName, setNewName] = useState('') // for name text input
  const [newPhone, setNewPhone] = useState('') // for phone number input

  const [search, setSearch] = useState('')
  const [searchPersons, setSearchPersons] = useState(persons)

  // updates state on every change in input
  const handleNameTextChange = (e) => setNewName(e.target.value)
  const handlePhoneNumberChange = (e) => setNewPhone(e.target.value)

  // Search phonebook
  const handleSearchChange = (e) => {
    setSearch(e.target.value)
    setSearchPersons(
      persons.filter((person) =>
        (person.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1)
      )
    )
  }

  // Add new contact
  const handleAddPerson = (e) => {
    e.preventDefault()

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
      <div>
        <h2>Search contact</h2>
        <input value={search} onChange={handleSearchChange} />
      </div>
      <h2>Add a new contact</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameTextChange} />
        </div>
        <div>
          phone: <input value={newPhone} onChange={handlePhoneNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={handleAddPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {search === ''
        ? persons.map(person => <p key={person.name}>{person.name}: {person.phone}</p>) // if search is empty, show all
        : searchPersons.map(person => <p key={person.name}>{person.name}: {person.phone}</p>) // else show searched names
      }
    </div>
  )
}

export default App