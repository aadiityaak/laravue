<template>
  <div>
    <h1>Posts</h1>
    <PostForm @post-added="fetchPosts" />
    <PostList :posts="posts" @post-deleted="fetchPosts" />
  </div>
</template>

<script>
import PostForm from '@/components/posts/PostForm.vue'
import PostList from '@/components/posts/PostList.vue'
import postService from '@/components/services/postService.js'

export default {
  components: {
    PostForm,
    PostList
  },
  data() {
    return {
      posts: []
    }
  },
  methods: {
    async fetchPosts() {
      try {
        this.posts = await postService.getPosts()
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }
  },
  mounted() {
    this.fetchPosts()
  }
}
</script>

<style scoped>
/* Tambahkan styling di sini jika diperlukan */
</style>
