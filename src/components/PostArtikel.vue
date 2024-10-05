<template>
  <div>
    <h1>Artikel</h1>
    <div v-for="post in posts" :key="post.id">
      <h2>
        <RouterLink :to="`/posts/${post.id}`">{{ post.title }}</RouterLink>
      </h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import api from '../api'

export default {
  data() {
    return {
      posts: []
    }
  },
  async created() {
    await this.fetchPosts()
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await api.get('/posts')
        this.posts = response.data
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }
  }
}
</script>
