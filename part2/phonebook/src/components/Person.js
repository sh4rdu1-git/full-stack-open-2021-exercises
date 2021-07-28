import React from 'react'

const Person = ({ personName, personPhone }) => {
    return (
        <>
            {personName}: {personPhone}
        </>
    )
}

export default Person