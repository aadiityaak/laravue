<template>
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto flex items-center justify-between p-4">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <nav class="relative flex space-x-4">
        <RouterLink to="/" class="text-gray-700 hover:text-indigo-600">Home</RouterLink>
        <RouterLink to="/artikel" class="text-gray-700 hover:text-indigo-600">Artikel</RouterLink>

        <!-- Menu Profile dengan Submenu -->
        <div class="relative group">
          <button class="text-gray-700 hover:text-indigo-600 focus:outline-none">Profile</button>
          <div
            class="absolute left-0 mt-0 w-48 bg-white border border-gray-300 rounded shadow-lg hidden group-hover:block transition-opacity duration-200 ease-in-out"
          >
            <RouterLink to="/posts" class="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >Manage Posts</RouterLink
            >
            <RouterLink to="/login" class="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >Login</RouterLink
            >
            <RouterLink to="/register" class="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >Register</RouterLink
            >
          </div>
        </div>
      </nav>
    </div>
  </header>

  <div class="container mx-auto p-4 max-w-4xl">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
