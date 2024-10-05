import axios from 'axios'

const API_URL = 'http://larapi.test/api/posts'

export default {
  getPosts() {
    return axios.get(API_URL)
  },
  getPost(id) {
    return axios.get(`${API_URL}/${id}`)
  },
  createPost(data) {
    return axios.post(API_URL, data)
  },
  updatePost(id, data) {
    return axios.put(`${API_URL}/${id}`, data)
  },
  deletePost(id) {
    return axios.delete(`${API_URL}/${id}`)
  }
}
