<template>
  <div class="max-w-md mx-auto bg-white p-8 shadow-md rounded-lg">
    <form @submit.prevent="register" class="space-y-6">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
        <input
          type="text"
          id="name"
          v-model="name"
          required
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

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

      <div>
        <label for="password_confirmation" class="block text-sm font-medium text-gray-700"
          >Confirm Password:</label
        >
        <input
          type="password"
          id="password_confirmation"
          v-model="password_confirmation"
          required
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <button
        type="submit"
        class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Register
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
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      errorMessage: ''
    }
  },
  methods: {
    async register() {
      try {
        const response = await axios.post('http://localhost:8000/api/register', {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        })

        console.log('Registered successfully:', response.data)
      } catch (error) {
        this.errorMessage = error.response.data.message || 'Registration failed'
      }
    }
  }
}
</script>
