<script setup>
import moment from 'moment';
import { computed, onMounted } from 'vue';
import { toast } from 'vue-sonner';
import CaretLeft from '../../assets/icons/CaretLeft.vue';
import CaretRight from '../../assets/icons/CaretRight.vue';
import EyeIcon from '../../assets/icons/EyeIcon.vue';
import PencilEditIcon from '../../assets/icons/PencilEditIcon.vue';
import TaskService from '../../services/task.service';
import { useTaskStore } from '../../stores/task.store';
import { useModalStore } from '../../stores/modal.store';

const tasks = computed(() => {
  return useTaskStore().tasks
})

const makePrettyStatus = (status) => {
  switch (status) {
    case 'new':
      return 'янги'
    case 'in_progress':
      return 'жараёнда'
    case 'complete':
      return 'бажарилган'
    case 'on_hold':
      return 'кутиш жараёнида'
  }
}

const loadReports = async () => {
  TaskService.getTasks({})
    .then((result) => {
      useTaskStore().setTasks(result)
    })
    .catch(() => {
      toast.error('Error while getting response')
    })
}

onMounted(() => {
  useTaskStore().clearStore()
  loadReports()
})
</script>
<template>
  <div class="container mx-auto">
    <!-- <div v-if="isLoadingCommonData" class="flex items-center w-full space-x-7 my-7">
      <div v-for="i in 3" :key="i" class="flex items-center flex-1 h-24 px-6 space-x-4 bg-white rounded-lg">
        <div class="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-xl animate-pulse">
        </div>
        <div class="space-y-2">
          <div class="w-40 h-3 bg-gray-200 rounded-full animate-pulse"></div>
          <div class="flex items-center space-x-2">
            <div class="w-32 h-5 bg-gray-200 rounded-full animate-pulse"></div>
            <div class="h-5 bg-gray-200 rounded-full w-14 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="w-full py-2">
      <table class="min-w-full">
        <thead class="uppercase">
          <tr>
            <th class="px-4 py-3 text-sm leading-4 tracking-wider text-left text-gray-500">
              #
            </th>
            <th class="px-4 py-3 text-sm leading-4 tracking-wider text-left text-gray-500">
              Топшириқ номи
            </th>
            <th class="px-4 py-3 text-sm leading-4 tracking-wider text-left text-gray-500">
              Ижрочилар
            </th>
            <th class="px-4 py-3 text-sm leading-4 tracking-wider text-left text-gray-500">
              Топшириқ мазмуни
            </th>
            <th class="px-4 py-3 text-sm leading-4 tracking-wider text-left text-gray-500">
              Яратилган сана
            </th>
            <th class="px-4 py-3 text-sm leading-4 tracking-wider text-left text-gray-500">
              Бажариш санаси
            </th>
            <th class="px-4 py-3 text-sm leading-4 tracking-wider text-left text-gray-500">
              Холати
            </th>
            <th class="px-4 py-3 text-sm leading-4 tracking-wider text-center text-gray-500">
              Амаллар
            </th>
          </tr>
        </thead>
        <tbody class="divide-y-4 divide-[#F5F5F7] bg-white overflow-hidden">
          <tr v-for="(data, idx) in tasks" :key="idx" class="">
            <td class="px-6 py-3 whitespace-no-wrap rounded-l-md">
              <div class="flex items-center">
                <div class="text-sm leading-5 text-gray-800">{{ idx + 1 }}</div>
              </div>
            </td>
            <td class="px-6 py-3 whitespace-no-wrap">
              <div class="text-sm leading-5 text-gray-900">{{ data?.title }}</div>
            </td>
            <td class="px-6 py-3 text-sm leading-5 text-gray-900 whitespace-no-wrap">
              -
            </td>
            <td class="px-6 py-3 text-sm leading-5 text-gray-900 whitespace-no-wrap">
              {{ data?.description }}
            </td>
            <td class="px-6 py-3 text-sm leading-5 text-gray-900 whitespace-no-wrap">
              {{ moment(data?.createdAt).format('DD/MM/YYYY H:mm') }}
            </td>
            <td class="px-6 py-3 text-sm leading-5 text-gray-900 whitespace-no-wrap">
              {{ moment(data?.dueDate).format('DD/MM/YYYY') }}
            </td>
            <td class="px-4 py-3 text-sm leading-5 text-gray-900 whitespace-no-wrap">
              <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                <span aria-hidden class="absolute inset-0 bg-green-200 rounded-full opacity-50"></span>
                <span class="relative text-xs">{{ makePrettyStatus(data?.status) }}</span>
              </span>
            </td>
            <td class="px-6 py-3 text-center whitespace-no-wrap rounded-r-md">
              <div class="flex justify-center item-center">
                <div class="w-4 mr-3 text-blue-500 transform cursor-pointer hover:text-purple-500 hover:scale-110">
                  <EyeIcon class="w-6 h-6" />
                </div>
                <div @click="useModalStore().openEditTaskModal()" class="w-4 mr-3 text-blue-500 transform cursor-pointer hover:text-purple-500 hover:scale-110">
                  <PencilEditIcon class="w-6 h-6" />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="mt-4 sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div class="text-base leading-5 text-gray-700">
          Хаммаси: <b>{{ tasks.length }}</b>
        </div>
        <nav class="relative z-0 inline-flex shadow-sm">
          <div>
            <a href="#"
              class="relative inline-flex items-center px-2 py-2 text-gray-600 transition duration-150 ease-in-out bg-white border-2 border-[#F5F5F7] rounded-l-md hover:text-gray-400">
              <CaretLeft class="w-5 h-5" />
            </a>
          </div>
          <div>
            <a href="#"
              class="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-semibold leading-5 text-gray-600 transition duration-150 ease-in-out bg-white border-2 border-[#F5F5F7]">
              1
            </a>
            <a href="#"
              class="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out bg-white border-2 border-[#F5F5F7]">
              2
            </a>
            <a href="#"
              class="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out bg-white border-2 border-[#F5F5F7]">
              3
            </a>
          </div>
          <div>
            <a href="#"
              class="relative inline-flex items-center px-2 py-2 -ml-px text-gray-600 transition duration-150 ease-in-out bg-white border-2 border-[#F5F5F7] rounded-r-md hover:text-gray-400">
              <CaretRight class="w-5 h-5" />
            </a>
          </div>
        </nav>
      </div>

    </div>
  </div>
</template>


<style scoped></style>