<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Create New Post</h2>
    <form @submit.prevent="createPost">
      <input
        v-model="post.title"
        placeholder="Title"
        class="mb-4 w-full border border-gray-300 p-2 rounded"
      />
      <textarea
        v-model="post.body"
        placeholder="Content"
        class="mb-4 w-full border border-gray-300 p-2 rounded"
      ></textarea>
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Create Post
      </button>
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
      }
    }
  },
  methods: {
    async createPost() {
      try {
        await api.post('/posts', this.post)
        this.$router.push('/posts') // Redirect to posts list after creation
      } catch (error) {
        console.error('Error creating post:', error)
      }
    }
  }
}
</script>
