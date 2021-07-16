import React from 'react'

const Numbers = ({ search, persons, searchedPersons }) => {
    return (
        <div>
            <h2>Numbers</h2>
            {search === ''
                ? persons.map(person => <p key={person.name}>{person.name}: {person.phone}</p>)
                : searchedPersons.map(person => <p key={person.name}>{person.name}: {person.phone}</p>)
            }
        </div>
    )
}

export default Numbers