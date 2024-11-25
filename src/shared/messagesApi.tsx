import axios from "axios";

const messages = axios.create({
    baseURL: 'https://7103.api.greenapi.com',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
})

export default messages;