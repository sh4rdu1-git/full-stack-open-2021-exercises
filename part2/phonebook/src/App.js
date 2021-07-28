import React, { useEffect, useState } from 'react'

import phonebookService from './services/phonebook'

import SearchPerson from './components/SearchPerson'
import AddPerson from './components/AddPerson'
import Numbers from './components/Numbers'

const App = () => {
  // contacts are stored in array 'persons'
  const [persons, setPersons] = useState([]) // for data

  const [newName, setNewName] = useState('') // for name text input
  const [newPhone, setNewPhone] = useState('') // for phone number input

  const [search, setSearch] = useState('')
  const [searchPersons, setSearchPersons] = useState(persons)

  useEffect(() => {
    // fetch data from json-server
    phonebookService
      .getAllContacts()
      .then(initialContacts => {
        // console.log(initialContacts);
        setPersons(initialContacts)
      })
  }, [])

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
        name: newName,
        number: newPhone,
      }

      // Send HTTP POST request with contact object to server
      phonebookService
        .createContact(newPersonObject)
        .then(returnedContact => {
          // console.log(returnedContact)
          setPersons(persons.concat(returnedContact))
          setNewName('')
          setNewPhone('')
        })
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <SearchPerson searchFor={search} handleInputChange={handleSearchChange} />
      <AddPerson
        newName={newName}
        newPhone={newPhone}
        handleNameChange={handleNameTextChange}
        handlePhoneChange={handlePhoneNumberChange}
        handleAddPerson={handleAddPerson}
      />
      <Numbers search={search} persons={persons} searchedPersons={searchPersons} />
    </div>
  )
}

export default App