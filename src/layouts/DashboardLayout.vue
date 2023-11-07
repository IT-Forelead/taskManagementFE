<script setup>
import Navbar from '../components/common/Navbar.vue'
import Sidebar from '../components/common/Sidebar.vue'

</script>
<template>
  <div class="w-full h-screen">
    <Sidebar />
    <div class="flex-1 ml-80">
      <Navbar />
      <div class="px-8 pt-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped></style>