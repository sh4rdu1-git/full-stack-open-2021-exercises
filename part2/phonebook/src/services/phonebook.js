import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

// Get all contacts saved on server
const getAllContacts = () => {
    const request = axios.get(baseUrl)
    return request.then(res => res.data)
}

// Create a new contact entry on the server
const createContact = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(res => res.data)
}

// Update an existing contact
const updateContact = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(res => res.data)
}

// Delete a contact
const deleteContact = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(res => console.log('Contact deleted', res))
}

const phonebook = {
    getAllContacts,
    createContact,
    updateContact,
    deleteContact
}

export default phonebook