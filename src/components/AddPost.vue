<template>
  <div class="max-w-4xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-6">Add Blog</h1>
    <form @submit.prevent="submitBlog" class="space-y-4">
      <div>
        <label for="title" class="block text-sm font-medium text-gray-700">Title:</label>
        <input
          type="text"
          id="title"
          v-model="title"
          required
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label for="content" class="block text-sm font-medium text-gray-700">Content:</label>
        <textarea
          id="content"
          v-model="content"
          required
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          rows="5"
        ></textarea>
      </div>
      <button
        type="submit"
        class="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
      >
        Submit Blog
      </button>
      <p v-if="successMessage" class="text-green-500 mt-4">{{ successMessage }}</p>
      <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      title: '',
      content: '',
      successMessage: '',
      errorMessage: ''
    }
  },
  methods: {
    async submitBlog() {
      try {
        const response = await axios.post('http://larapi.test/api/posts', {
          title: this.title,
          content: this.content
        })
        this.successMessage = 'Post added successfully!'
        this.title = ''
        this.content = ''
      } catch (error) {
        this.errorMessage = error.response?.data.message || 'Failed to add post.'
      }
    }
  }
}
</script>
