<template>
  <div class="max-w-4xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-6">{{ post.title }}</h1>

    <div v-if="loading" class="text-center">Loading...</div>
    <div v-if="errorMessage" class="text-red-500 text-center">{{ errorMessage }}</div>

    <div v-if="post" class="mb-4 p-4 border rounded shadow">
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
      post: null, // Ganti posts menjadi post untuk single post
      loading: true,
      errorMessage: ''
    }
  },
  async created() {
    await this.fetchPost()
  },
  methods: {
    async fetchPost() {
      try {
        const response = await axios.get(`http://larapi.test/api/posts/${this.$route.params.id}`)
        this.post = response.data // Simpan data post ke variabel post
      } catch (error) {
        this.errorMessage = error.response?.data.message || 'Failed to load post.'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
