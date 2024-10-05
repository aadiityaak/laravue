import axios from 'axios'

// Buat instance axios dengan konfigurasi dasar
const api = axios.create({
  baseURL: 'http://larapi.test/api', // Ubah dengan URL API backend Laravel kamu
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})

export default api
