<script setup>
import Navbar from '../components/common/Navbar.vue'
import Sidebar from '../components/common/Sidebar.vue'
</script>
<template>
  <div class="flex h-screen overflow-hidden">
    <Sidebar />
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Navbar />
      <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped></style>