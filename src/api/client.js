import axios from 'axios'

const client = axios.create({
	//baseURL: 'http://localhost:8000/api',
	baseURL: 'https://pntd-be-moviereview.herokuapp.com/api',
})

export default client
