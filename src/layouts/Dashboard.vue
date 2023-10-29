<script setup>
import SearchAndFilter from '../components/dashboard/common/SearchAndFilter.vue';
import Tobbar from '../components/dashboard/common/Tobbar.vue';


</script>
<template>
  <div class="bg-[#F5F5F7] h-screen w-full">
    <Tobbar />
    <SearchAndFilter />
    <router-view></router-view>
  </div>
</template>

<style scoped></style>