<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">All Posts</h2>
    <button
      @click="$router.push('/posts/create')"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Tambah Post
    </button>
    <ul v-if="posts.length" class="list-disc list-inside p-4 shadow mt-4">
      <li v-for="post in posts" :key="post.id" class="mb-4 flex">
        <router-link :to="`/posts/${post.id}`">{{ post.title }}</router-link>
        <div class="ml-auto">
          <button
            @click="editPost(post.id)"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Edit
          </button>
          <button
            @click="deletePost(post.id)"
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
          >
            Delete
          </button>
        </div>
      </li>
    </ul>
    <p v-else>No posts available.</p>
  </div>
</template>

<script>
import api from '../../api'

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
    },
    editPost(postId) {
      this.$router.push(`/posts/${postId}/edit`)
    },
    async deletePost(postId) {
      try {
        await api.delete(`/posts/${postId}`)
        this.fetchPosts() // Refresh the list after deletion
      } catch (error) {
        console.error('Error deleting post:', error)
      }
    }
  }
}
</script>
