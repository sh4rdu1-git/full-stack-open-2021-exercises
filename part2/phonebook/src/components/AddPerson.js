import React from 'react'

const AddPerson = ({ newName, newPhone, handleNameChange, handlePhoneChange, handleAddPerson }) => {
    return (
        <div>
            <h2>Add a new contact</h2>
            <form>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                    phone: <input value={newPhone} onChange={handlePhoneChange} />
                </div>
                <div>
                    <button type="submit" onClick={handleAddPerson}>Add contact</button>
                </div>
            </form>
        </div>
    )
}

export default AddPerson