import React from 'react'

const SearchPerson = ({ searchFor, handleInputChange }) => {
    return (
        <div>
            <h2>Search contact</h2>
            <input value={searchFor} onChange={handleInputChange} />
        </div>
    )
}

export default SearchPerson