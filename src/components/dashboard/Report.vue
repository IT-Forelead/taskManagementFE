<script setup>
import moment from 'moment';
import { computed, onMounted } from 'vue';
import { toast } from 'vue-sonner';
import CaretLeftIcon from '../../assets/icons/CaretLeftIcon.vue';
import CaretRightIcon from '../../assets/icons/CaretRightIcon.vue';
import EyeOutlineIcon from '../../assets/icons/EyeOutlineIcon.vue';
import UserPlusOutlineIcon from '../../assets/icons/UserPlusOutlineIcon.vue';
import FileIcon from "@/assets/icons/FileIcon.vue";
import TaskService from '../../services/task.service';
import { useTaskStore } from '../../stores/task.store';
import { useModalStore } from '../../stores/modal.store';
import { useFileStore } from "@/stores/file.store.js";
import UploadService from "@/services/upload.service.js";

const tasks = computed(() => {
  return useTaskStore().tasks
})

const selectedFile = computed(() => {
  return useFileStore().selectedFile
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
      useTaskStore().setTasks(result?.data)
    })
    .catch(() => {
      toast.error('Фойдаланувчиларни олишда хатолик юз берди!')
    })
}

onMounted(() => {
  useTaskStore().clearStore()
  loadReports()
})

const openViewTaskModal = (data) => {
  useTaskStore().setSelectedTask(data)
  useModalStore().openViewTaskModal()
}

const openAssignExecutorModal = (taskId) => {
  useTaskStore().setSelectedTaskId(taskId)
  useModalStore().openAssignExecutorModal()
}

// const openViewUploadedFile = async (assetId) => {
//   try {
//     const fileData = await UploadService.getUploadedFile(assetId);
//     if (fileData) {
//       const selectedFile = {
//         filename: fileData.filename,
//         url: fileData.url,
//         title: useTaskStore().tasks.find(task => task.assetId === assetId)?.title,
//       };
//       useFileStore().setSelectedFile(selectedFile);
//       useModalStore().openViewUploadedFileModal();
//     } else {
//       toast.error('File not exist.');
//     }
//   } catch (error) {
//     toast.error('Error while fetching file data.');
//   }
// };

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

</script>

<template>
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
                {{ data?.executors.join(', ') }}
              </div>
            </td>
            <td class="px-4 py-4 text-sm leading-5 text-left text-gray-900">
              <div v-if="data?.controllers.length === 0">
                -
              </div>
              <div v-else>
                {{ data?.controllers.join(', ') }}
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
              <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                <span class="absolute inset-0 bg-green-200 rounded-full opacity-50"></span>
                <span class="relative text-xs">{{ makePrettyStatus(data?.status) }}</span>
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
</template>


<style scoped></style>