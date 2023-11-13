<script setup>
import Navbar from '../components/common/Navbar.vue'
import Sidebar from '../components/common/Sidebar.vue'
import { useDropdownStore } from '../stores/dropdown.store';
import Sidebar2 from '../components/common/Sidebar2.vue'
</script>
<template>
  <div class="flex h-screen overflow-hidden">
    <Sidebar2 />
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Navbar />
      <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <router-view></router-view>
      </div>
    </div>
  </div>







<!-- <div class="flex h-screen overflow-hidden">
    <Sidebar />
    <div class="relativ flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Navbar />
        <div :class="{'ml-36': useDropdownStore().isOpenSidebar, 'ml-0 overflow-y-auto': !useDropdownStore().isOpenSidebar} " class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <router-view></router-view>
        </div>
      </div>
    </div> -->
</template>

<style scoped></style>