import React from 'react'

const Person = ({ personName, personPhone }) => {
    // console.log(personName, personPhone)
    return (
        <>
            {personName}: {personPhone}
        </>
    )
}

export default Person