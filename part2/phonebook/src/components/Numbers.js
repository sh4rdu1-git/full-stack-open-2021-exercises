import React from 'react'

import phonebookService from '../services/phonebook'

import Person from './Person'

const Numbers = ({ search, persons, searchedPersons, setPersons, setSearchPersons }) => {

    // Delete a contact from server
    const handleDeleteContact = (person) => {
        const result = window.confirm(`Delete contact ${person.name}?`)
        if (result) {
            // Use our custom module to perform DELETE request
            phonebookService
                .deleteContact(person.id)
            // Filter out the deleted contact from the states
            setPersons(persons.filter(item => item !== person))
            setSearchPersons(searchedPersons.filter(item => item !== person))
        }
    }

    return (
        <div>
            <h2>Numbers</h2>
            {search === ''
                ? persons.map((person, i) => (
                    <p key={i}>
                        <Person personName={person.name} personPhone={person.number} />
                        <button onClick={() => handleDeleteContact(person)}>delete</button>
                    </p>
                ))
                : searchedPersons.map((person, i) => (
                    <p key={i}>
                        <Person personName={person.name} personPhone={person.number} />
                        <button onClick={() => handleDeleteContact(person)}>delete</button>
                    </p>
                ))
            }
        </div>
    )
}

export default Numbers