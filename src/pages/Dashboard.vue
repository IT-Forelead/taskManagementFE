<script setup>
import moment from 'moment';
import { computed, onMounted } from 'vue';
import { toast } from 'vue-sonner';
import CaretLeftIcon from '@/assets/icons/CaretLeftIcon.vue';
import CaretRightIcon from '@/assets/icons/CaretRightIcon.vue';
import EyeOutlineIcon from '@/assets/icons/EyeOutlineIcon.vue';
import UserPlusOutlineIcon from '@/assets/icons/UserPlusOutlineIcon.vue';
import FileIcon from "@/assets/icons/FileIcon.vue";
import TaskService from '@/services/task.service';
import { useTaskStore } from '@/stores/task.store';
import { useModalStore } from '@/stores/modal.store';
import UploadService from "@/services/upload.service.js";
import { ref } from 'vue';
import SearchIcon from '@/assets/icons/SearchIcon.vue'
import FunnelIcon from '@/assets/icons/FunnelIcon.vue';
import { cleanObjectEmptyFields } from '../helpers/cleanEmptyFields';

const status = ref('')

const tasks = computed(() => {
  return useTaskStore().tasks
})

const makePrettyStatus = (status) => {
  switch (status) {
    case 'new':
      return 'Янги'
    case 'in_progress':
      return 'Жараёнда'
    case 'complete':
      return 'Бажарилган'
    case 'on_hold':
      return 'Кутиш жараёнида'
    case 'rejected':
      return 'Рад этилган'
    case 'approved':
      return 'Тасдиқланган'
    case 'expired':
      return 'Муддати тугаган'
  }
}

const getTasks = () => {
  TaskService.getTasks(
    cleanObjectEmptyFields({
      status: status.value
    })
  ).then((result) => {
    useTaskStore().clearStore()
    useTaskStore().setTasks(result?.data)
  }).catch(() => {
    toast.error('Фойдаланувчиларни олишда хатолик юз берди!')
  })
}

const getTasksByStatus = (stat) => {
  status.value = stat
  getTasks()
}

const openViewTaskModal = (data) => {
  useTaskStore().setSelectedTask(data)
  useModalStore().openViewTaskModal()
}

const openAssignExecutorModal = (taskId) => {
  useTaskStore().setSelectedTaskId(taskId)
  useModalStore().openAssignExecutorModal()
}

// Add this method to your <script> section
const downloadFile = async (assetId) => {
  try {
    const fileData = await UploadService.getUploadedFile(assetId);
    if (fileData) {
      const fileUrl = fileData.url;
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileData.filename; // Use the filename from the response
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      toast.error('File not exist.');
    }
  } catch (error) {
    toast.error('Error while fetching file data.');
  }
}

const makeStatusColor = (status) => {
  switch (status) {
    case 'new':
      return 'bg-blue-200 text-blue-900'
    case 'in_progress':
      return 'bg-orange-200 text-orange-900'
    case 'complete':
      return 'bg-green-200 text-green-900'
    case 'on_hold':
      return 'bg-teal-200 text-teal-900'
    case 'rejected':
      return 'bg-red-200 text-red-900'
    case 'approved':
      return 'bg-cyan-200 text-cyan-900'
    case 'expired':
      return 'bg-red-200 text-red-900'
  }
}

onMounted(() => {
  useTaskStore().clearStore()
  getTasks()
})
</script>

<template>
  <div class="container pb-10 m-auto">
    <div class="space-y-8">
      <div class="flex items-center justify-between bg-white border-b border-gray-200 rounded shadow">
        <ul class="flex flex-wrap">
          <li @click="getTasksByStatus()" :class="status === '' ? 'border-blue-600' : 'border-transparent'"
            class="inline-flex items-center justify-center px-6 py-4 text-blue-600 border-b-2 cursor-pointer hover:border-blue-600">
            Xаммаси
          </li>
          <li @click="getTasksByStatus('new')" :class="status === 'new' ? 'border-indigo-600' : 'border-transparent'"
            class="inline-flex items-center justify-center px-6 py-4 text-indigo-600 border-b-2 cursor-pointer hover:border-indigo-500">
            Янги
          </li>
          <li @click="getTasksByStatus('in_progress')"
            :class="status === 'in_progress' ? 'border-orange-600' : 'border-transparent'"
            class="inline-flex items-center justify-center px-6 py-4 text-orange-600 border-b-2 cursor-pointer hover:border-orange-500">
            Бажарилаётганлар
          </li>
          <li @click="getTasksByStatus('complete')"
            :class="status === 'complete' ? 'border-green-600' : 'border-transparent'"
            class="inline-flex items-center justify-center px-6 py-4 text-green-600 border-b-2 cursor-pointer hover:border-green-500">
            Бажарилганлар
          </li>
          <li @click="getTasksByStatus('on_hold')" :class="status === 'on_hold' ? 'border-red-600' : 'border-transparent'"
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
      
      <div class="container mx-auto">
        <div class="overflow-auto border border-gray-200 rounded shadow">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="font-medium bg-gray-50">
              <tr>
                <th scope="col" class="px-4 py-3 text-sm leading-4 tracking-wider text-center text-gray-500">
                  #
                </th>
                <th scope="col" class="px-4 py-3 text-sm leading-4 tracking-wider text-left text-gray-500">
                  Топшириқ номи
                </th>
                <th scope="col" class="px-4 py-3 text-sm leading-4 tracking-wider text-left text-gray-500">
                  Ижрочилар
                </th>
                <th scope="col" class="px-4 py-3 text-sm leading-4 tracking-wider text-left text-gray-500">
                  Назоратчилар
                </th>
                <th scope="col" class="px-4 py-3 text-sm leading-4 tracking-wider text-left text-gray-500">
                  Топшириқ мазмуни
                </th>
                <th scope="col" class="px-4 py-3 text-sm leading-4 tracking-wider text-left text-gray-500">
                  Яратилган сана
                </th>
                <th scope="col" class="px-4 py-3 text-sm leading-4 tracking-wider text-left text-gray-500">
                  Бажариш санаси
                </th>
                <th scope="col" class="px-4 py-3 text-sm leading-4 tracking-wider text-center text-gray-500">
                  Холати
                </th>
                <th scope="col" class="px-4 py-3 text-sm leading-4 tracking-wider text-center text-gray-500">
                  Амаллар
                </th>
              </tr>
            </thead>
            <tbody class="font-medium bg-white divide-y divide-gray-200">
              <tr v-for="(data, idx) in tasks" :key="idx">
                <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900 whitespace-nowrap">
                  {{ idx + 1 }}
                </td>
                <td class="px-4 py-4 text-sm leading-5 text-left text-gray-900">
                  {{ data?.title }}
                </td>
                <td class="px-4 py-4 text-sm leading-5 text-left text-gray-900">
                  <div v-if="data?.executors.length === 0">
                    -
                  </div>
                  <div v-else>
                    {{ data?.executors.map((user) => user?.firstname + ' ' + user?.lastname).join(', ') }}
                  </div>
                </td>
                <td class="px-4 py-4 text-sm leading-5 text-left text-gray-900">
                  <div v-if="data?.controllers.length === 0">
                    -
                  </div>
                  <div v-else>
                    {{ data?.controllers.map((user) => user?.firstname + ' ' + user?.lastname).join(', ') }}
                  </div>
                </td>
                <td class="px-4 py-4 text-sm leading-5 text-left text-gray-900">
                  {{ data?.description }}
                </td>
                <td class="px-4 py-4 text-sm leading-5 text-left text-gray-900">
                  {{ moment(data?.createdAt).format('DD/MM/YYYY H:mm') }}
                </td>
                <td class="px-4 py-4 text-sm leading-5 text-left text-gray-900">
                  {{ moment(data?.dueDate).format('DD/MM/YYYY') }}
                </td>
                <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900 whitespace-nowrap">
                  <span class="inline-block px-3 py-1 font-semibold leading-tight rounded-full"
                    :class="makeStatusColor(data?.status)">
                    {{ makePrettyStatus(data?.status) }}
                  </span>
                </td>
                <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900 whitespace-nowrap">
                  <div class="flex justify-center space-x-4 item-center">
                    <div @click="openViewTaskModal(data)"
                      class="w-4 text-blue-500 transform cursor-pointer hover:text-purple-500 hover:scale-110">
                      <EyeOutlineIcon class="w-6 h-6" />
                    </div>
                    <div @click="openAssignExecutorModal(data.id)"
                      class="w-4 text-blue-500 transform cursor-pointer hover:text-purple-500 hover:scale-110">
                      <UserPlusOutlineIcon class="w-6 h-6" />
                    </div>
                    <div v-if="data?.assetId" @click="downloadFile(data.assetId)"
                      class="w-4 mr-3 text-blue-500 transform cursor-pointer hover:text-purple-500 hover:scale-110">
                      <FileIcon class="w-6 h-6" />
                    </div>
                    <!-- <div @click="openViewUploadedFile(data.assetId)"
                  class="w-4 mr-3 text-blue-500 transform cursor-pointer hover:text-purple-500 hover:scale-110">
                  <FileIcon class="w-6 h-6" />
                </div> -->
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-4 sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div class="text-base leading-5 text-gray-700">
            Хаммаси: <b>{{ tasks.length }}</b>
          </div>
          <nav class="relative z-0 inline-flex shadow-sm">
            <div>
              <a href="#"
                class="relative inline-flex items-center px-2 py-2 text-gray-600 transition duration-150 ease-in-out bg-white border-2 border-[#F5F5F7] rounded-l-md hover:text-gray-400">
                <CaretLeftIcon class="w-5 h-5" />
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
                <CaretRightIcon class="w-5 h-5" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>