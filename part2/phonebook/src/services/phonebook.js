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

export default { getAllContacts, createContact }