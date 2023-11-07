<script setup>
import Navbar from '../components/common/Navbar.vue'
import Sidebar from '../components/common/Sidebar.vue'

</script>
<template>
  <div class="w-full h-screen">
    <Sidebar />
    <div class="flex-1 ml-80">
      <Navbar />
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>