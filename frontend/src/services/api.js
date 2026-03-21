import axios from 'axios'

// 🔍 debug
console.log("API BASE URL:", '/api')

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export default api