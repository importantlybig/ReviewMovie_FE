import axios from 'axios'

const client = axios.create({
	//baseURL: 'http://localhost:8000/api',
	baseURL: process.env.BE_URL,
})

export default client
