<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <button @click="editPost">Edit Post</button>
  </div>
</template>

<script>
import api from '../../api'

export default {
  data() {
    return {
      post: null
    }
  },
  async created() {
    const postId = this.$route.params.id
    await this.fetchPost(postId)
  },
  methods: {
    async fetchPost(postId) {
      try {
        const response = await api.get(`/posts/${postId}`)
        this.post = response.data
      } catch (error) {
        console.error('Error fetching post:', error)
      }
    },
    editPost() {
      this.$router.push(`/posts/${this.$route.params.id}/edit`)
    }
  }
}
</script>
