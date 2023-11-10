<script setup>
import { ref } from 'vue';
import SearchIcon from '../../assets/icons/SearchIcon.vue'
import FunnelIcon from '../../assets/icons/FunnelIcon.vue';
import TaskService from '../../services/task.service';
import { toast } from 'vue-sonner';
import { useTaskStore } from '../../stores/task.store';
import { cleanObjectEmptyFields } from '../../helpers/cleanEmptyFields';
const sortBy = ref('dashboard')

const statusAction = ref('')

const statusColor = (status) => {
  switch (status) {
    case 'all':
      return 'border-blue-500'
    case 'new':
      return 'border-indigo-500'
    case 'in_progress':
      return 'border-orange-500'
    case 'complete':
      return 'border-green-500'
    case 'on_hold':
      return 'border-red-500'
  }
}

const getTasksByStatus = (status) => {
  if (status == "all") {
    TaskService.getTasks({})
      .then((result) => {
        useTaskStore().clearStore()
        useTaskStore().setTasks(result)
        statusAction.value = status
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
        useTaskStore().clearStore()
        useTaskStore().setTasks(result)
        statusAction.value = status
      })
      .catch(() => {
        toast.error('Error occurred while getting response')
      })
  }
}

</script>

<template>
  <div class="flex items-center justify-between bg-white border-b border-gray-200 rounded shadow">
    <ul class="flex flex-wrap">
      <li @click="getTasksByStatus('all')"
        :class="statusAction.includes('all') ? 'border-blue-600' : 'border-transparent'"
        class="inline-flex items-center justify-center px-6 py-4 text-blue-600 border-b-2 cursor-pointer hover:border-blue-600">
        Xаммаси
      </li>
      <li @click="getTasksByStatus('new')"
        :class="statusAction.includes('new') ? 'border-indigo-600' : 'border-transparent'"
        class="inline-flex items-center justify-center px-6 py-4 text-indigo-600 border-b-2 cursor-pointer hover:border-indigo-500">
        Янги
      </li>
      <li @click="getTasksByStatus('in_progress')"
        :class="statusAction.includes('in_progress') ? 'border-orange-600' : 'border-transparent'"
        class="inline-flex items-center justify-center px-6 py-4 text-orange-600 border-b-2 cursor-pointer hover:border-orange-500">
        Бажарилаётганлар
      </li>
      <li @click="getTasksByStatus('complete')"
        :class="statusAction.includes('complete') ? 'border-green-600' : 'border-transparent'"
        class="inline-flex items-center justify-center px-6 py-4 text-green-600 border-b-2 cursor-pointer hover:border-green-500">
        Бажарилганлар
      </li>
      <li @click="getTasksByStatus('on_hold')"
        :class="statusAction.includes('on_hold') ? 'border-red-600' : 'border-transparent'"
        class="inline-flex items-center justify-center px-6 py-4 text-red-600 border-b-2 cursor-pointer hover:border-red-500">
        Муддати утганлар
      </li>
    </ul>
    
    <!-- <div class="flex items-center px-4 space-x-5">
      <div class="relative w-full">
        <label for="search" class="absolute -translate-y-1/2 top-1/2 left-3">
          <SearchIcon class="w-5 h-5 text-[#B1B1B8]" />
        </label>
        <input id="search" placeholder="Излаш"
          class="block w-full rounded-md py-1.5 px-2 pl-10 text-gray-900 shadow-sm border border-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
      </div>
      <div
        class="h-10 cursor-pointer bg-[#EDF1FD] rounded-md px-3 text-[#3365FC] md:px-8 py-2 flex items-center justify-center space-x-2">
        <FunnelIcon class="w-5 h-5" />
        <span class="text-base">Фильтр</span>
      </div>
    </div> -->
  </div>
</template>

<style scoped></style>