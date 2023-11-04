<script setup>
import { ref } from 'vue';
import SearchIcon from '../../../assets/icons/SearchIcon.vue'
import FilterIcon from '../../../assets/icons/FilterIcon.vue';
const sortBy = ref('dashboard')

const searchInput = ref('')

</script>
<template>
  <div class="relative z-40 w-full py-5 bg-white sm:py-0">
    <div class="container mx-auto">
      <div class="flex items-center flex-col sm:flex-row justify-between h-[88px]">
        <div>
          <div class="flex items-center w-full uppercase">
            <div @click="sortBy = 'dashboard'"
              :class="sortBy.includes('dashboard') ? 'border-[#3366FF] text-white bg-[#3366FF]' : 'border-[#E0E7FF] text-[#3366FF99]'"
              class="uppercase border-l-2 px-3 lg:px-14 cursor-pointer border-y-2  text-xs tracking-[1.13px] font-medium rounded-l-md flex-1 h-10 flex items-center justify-center">
              Янги
            </div>
            <div @click="sortBy = 'sponsors'"
              :class="sortBy.includes('sponsors') ? 'border-[#3366FF] text-white bg-[#3366FF]' : 'border-[#E0E7FF] text-[#3366FF99]'"
              class="uppercase cursor-pointer px-3 lg:px-14 border-2  text-xs tracking-[1.13px] font-medium flex-1 h-10 flex items-center justify-center">
              Бажарилаётганлар
            </div>
            <div @click="sortBy = 'students'"
              :class="sortBy.includes('students') ? 'border-[#3366FF] text-white bg-[#3366FF]' : 'border-[#E0E7FF] text-[#3366FF99]'"
              class="uppercase border-r-2 px-3 lg:px-14 cursor-pointer border-y-2  text-xs tracking-[1.13px] font-medium rounded-r-md flex-1 h-10 flex items-center justify-center">
              Бажарилганлар
            </div>
          </div>
        </div>
        <div class="flex items-center space-x-5">
          <div class="relative w-full">
            <label for="search" class="absolute -translate-y-1/2 top-1/2 left-3">
              <SearchIcon />
            </label>
            <input v-model="searchInput" id="search" placeholder="Izlash"
              class="h-10 custom-input-bg w-full bg-[#E8E8E8] px-3 pl-10 outline-none rounded-md">
          </div>
          <div class="h-10 cursor-pointer bg-[#EDF1FD] rounded-md px-3 md:px-8 py-2 flex items-center justify-center space-x-2">
            <FilterIcon />
            <p class="text-[#3365FC] text-[14px]">Filter</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped></style>