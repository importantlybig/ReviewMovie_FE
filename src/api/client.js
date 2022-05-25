import axios from 'axios'

const client = axios.create({
	baseURL: process.env.BE_URL || 'http://localhost:8000/api',
})

export default client
