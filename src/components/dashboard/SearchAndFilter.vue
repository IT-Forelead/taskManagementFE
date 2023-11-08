<script setup>
import { ref } from 'vue';
import SearchIcon from '../../assets/icons/SearchIcon.vue'
import FunnelIcon from '../../assets/icons/FunnelIcon.vue';
import TaskService from '../../services/task.service';
import { toast } from 'vue-sonner';
import { useTaskStore } from '../../stores/task.store';
import { cleanObjectEmptyFields } from '../../helpers/cleanEmptyFields';
const sortBy = ref('dashboard')

const searchInput = ref('')

const getTasksByStatus = (status) => {
  if (status == "all") {
    TaskService.getTasks({})
    .then((result) => {
      useTaskStore().setTasks(result)
    })
    .catch(() => {
      toast.error('Error occurred while getting response')
    })
  } else {
    TaskService.getTasks(
      cleanObjectEmptyFields({
        status: status
      })
    )
    .then((result) => {
      useTaskStore().setTasks(result)
    })
    .catch(() => {
      toast.error('Error occurred while getting response')
    })
  } 
}

</script>
<template>
  <div class="relative z-40 w-full py-5 bg-white sm:py-0">
    <div class="container mx-auto">
      <div class="bg-white border-b border-gray-200 rounded shadow">
        <ul class="flex flex-wrap">
          <li @click="getTasksByStatus('all')"
            class="inline-flex items-center justify-center px-6 py-4 text-blue-600 border-b-2 border-transparent hover:border-blue-600 cursor-pointer">
            Xаммаси
          </li>
          <li @click="getTasksByStatus('new')"
            class="inline-flex items-center justify-center px-6 py-4 text-blue-600 border-b-2 border-transparent hover:border-blue-500 cursor-pointer">
            Янги
          </li>
          <li @click="getTasksByStatus('in_progress')"
            class="inline-flex items-center justify-center px-6 py-4 text-blue-600 border-b-2 border-transparent hover:border-blue-500 cursor-pointer">
            Бажарилаётганлар
          </li>
          <li @click="getTasksByStatus('complete')"
            class="inline-flex items-center justify-center px-6 py-4 text-blue-600 border-b-2 border-transparent hover:border-blue-500 cursor-pointer">
            Бажарилганлар
          </li>
          <li @click="getTasksByStatus('on_hold')"
            class="inline-flex items-center justify-center px-6 py-4 text-blue-600 border-b-2 border-transparent hover:border-blue-500 cursor-pointer ">
            Муддати утганлар
          </li>
        </ul>
      </div>
      <!-- <div class="flex items-center flex-col sm:flex-row justify-between h-[88px]">
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
              <SearchIcon class="w-5 h-5 text-[#B1B1B8]" />
            </label>
            <input v-model="searchInput" id="search" placeholder="Izlash"
              class="h-10 custom-input-bg w-full bg-[#E8E8E8] px-3 pl-10 outline-none rounded-md">
          </div>
          <div
            class="h-10 cursor-pointer bg-[#EDF1FD] rounded-md px-3 md:px-8 py-2 flex items-center justify-center space-x-2">
            <FunnelIcon class="w-5 h-5 text-[#3365FC]" />
            <p class="text-[#3365FC] text-[14px]">Filter</p>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>


<style scoped></style>