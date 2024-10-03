<template>
  <div class="max-w-4xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-6">Blog Posts</h1>

    <div v-if="loading" class="text-center">Loading...</div>
    <div v-if="errorMessage" class="text-red-500 text-center">{{ errorMessage }}</div>

    <div v-for="post in posts" :key="post.id" class="mb-4 p-4 border rounded shadow">
      <h2 class="text-xl font-semibold">{{ post.title }}</h2>
      <p class="text-gray-700">{{ post.body }}</p>
      <p class="text-sm text-gray-500">
        Published on: {{ new Date(post.created_at).toLocaleDateString() }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: [],
      loading: true,
      errorMessage: ''
    }
  },
  async created() {
    await this.fetchPosts()
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get('http://larapi.test/api/posts')
        this.posts = response.data
      } catch (error) {
        this.errorMessage = error.response?.data.message || 'Failed to load posts.'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
