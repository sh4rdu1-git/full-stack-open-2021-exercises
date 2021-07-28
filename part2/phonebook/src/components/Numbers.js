import React from 'react'

import Person from './Person'

const Numbers = ({ search, persons, searchedPersons }) => {
    return (
        <div>
            <h2>Numbers</h2>
            {search === ''
                ? persons.map((person, i) => (
                    <p key={i}>
                        <Person personName={person.name} personPhone={person.number} />
                    </p>
                ))
                : searchedPersons.map((person, i) => (
                    <p key={i}>
                        <Person personName={person.name} personPhone={person.number} />
                    </p>
                ))
            }
        </div>
    )
}

export default Numbers