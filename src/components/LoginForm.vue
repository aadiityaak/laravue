<template>
  <div class="max-w-md mx-auto bg-white p-8 shadow-md rounded-lg">
    <form @submit.prevent="login" class="space-y-6">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
        <input
          type="email"
          id="email"
          v-model="email"
          required
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          required
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <button
        type="submit"
        class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Login
      </button>

      <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://larapi.test/api/login', {
          email: this.email,
          password: this.password
        })

        // Menyimpan token di local storage
        localStorage.setItem('token', response.data.token)

        // Menyimpan informasi pengguna jika diperlukan
        localStorage.setItem('user', JSON.stringify(response.data.user))

        // Mengalihkan ke halaman utama
        this.$router.push('/')
      } catch (error) {
        this.errorMessage = error.response.data.message || 'Login failed'
      }
    }
  }
}
</script>
