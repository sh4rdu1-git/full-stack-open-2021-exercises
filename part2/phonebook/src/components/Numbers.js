import React from 'react'

import Person from './Person'

const Numbers = ({ search, persons, searchedPersons }) => {
    return (
        <div>
            <h2>Numbers</h2>
            {search === ''
                ? persons.map(person => (
                    <p key={person.name}>
                        <Person personName={person.name} personPhone={person.phone} />
                    </p>
                ))
                : searchedPersons.map(person => (
                    <p key={person.name}>
                        <Person personName={person.name} personPhone={person.phone} />
                    </p>
                ))
            }
        </div>
    )
}

export default Numbers