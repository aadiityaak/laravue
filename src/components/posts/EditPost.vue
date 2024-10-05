<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Edit Post</h2>
    <form @submit.prevent="updatePost">
      <input
        v-model="post.title"
        placeholder="Title"
        class="mb-4 w-full border border-gray-300 p-2 rounded"
      />
      <textarea
        v-model="post.body"
        placeholder="Content"
        class="mb-4 w-full border border-gray-300 p-2 rounded"
        rows="5"
      ></textarea>
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Update Post
      </button>

      <!-- Pesan Error -->
      <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import api from '../../api'

export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      },
      errorMessage: '' // Menyimpan pesan error
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
    async updatePost() {
      const postId = this.$route.params.id
      try {
        await api.put(`/posts/${postId}`, this.post)
        this.$router.push('/posts') // Redirect ke halaman list post setelah update
      } catch (error) {
        if (error.response && error.response.status === 403) {
          // Jika status error 403 (Access Denied)
          this.errorMessage = 'You can only modify your own posts.'
        } else {
          // Error lainnya
          this.errorMessage = 'An error occurred while updating the post.'
        }
        console.error('Error updating post:', error)
      }
    }
  }
}
</script>
