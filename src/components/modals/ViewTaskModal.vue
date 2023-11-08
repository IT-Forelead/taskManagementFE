<script setup>
import moment from 'moment';
import UserIcon from "@/assets/icons/UserIcon.vue";
import XIcon from "@/assets/icons/XIcon.vue";
import { useModalStore } from "../../stores/modal.store";
import { useTaskStore } from '../../stores/task.store'
import { computed } from "vue";
import { useUserStore } from "../../stores/user.store";
import TaskIcon from "@/assets/icons/TaskIcon.vue";
import DateIcon from "@/assets/icons/DateIcon.vue";
import EndDateIcon from "@/assets/icons/EndDateIcon.vue";
import DescriptionIcon from "@/assets/icons/DescriptionIcon.vue";
const closeModal = () => {
  useModalStore().closeViewTaskModal()
}
const selectedTask = computed(() => {
  return useTaskStore().selectedTask
})

const getFullName = (userId) => {
  const user = useUserStore().users.find(u => u.id === userId);
  if (user) {
    return `${user.firstname} ${user.lastname}`;
  }
  return "Ижрочи тайинланмаган";
}
</script>
<template>
  <div v-if="useModalStore().isOpenViewTaskModal"
    class="fixed top-0 left-0 right-0 z-50 w-full max-h-screen overflow-x-hidden overflow-y-auto backdrop-blur bg-gray-900/75 md:inset-0 md:h-full">
    <div class="relative w-full h-full max-w-xl p-4 -translate-x-1/2 -translate-y-1/2 md:h-auto left-1/2 top-1/2">
      <div class="relative bg-white border rounded-lg shadow">
        <div class="flex justify-between items-start p-4 rounded-t border-b">
          <div class="flex items-center text-xl font-bold">Топшириқ ҳақида</div>
          <button @click="closeModal()"
            class="text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all duration-300 rounded-full text-sm p-1.5 inline-flex items-center">
            <XIcon />
          </button>
        </div>
        <div class="bg-white rounded-lg overflow-hidden my-4">
          <div class="py-2 px-6">
            <div class="flex items-center text-gray-700">
              <TaskIcon class="w-5 h-5" />
              <h1 class="px-1 font-bold">Топшириқ номи:</h1>
              <p>{{ selectedTask?.title }}</p>
            </div>
            <div class="flex items-center mt-4 text-gray-700">
              <DateIcon class="w-5 h-5" />
              <h1 class="px-1 font-bold">Яратилган сана:</h1>
              <p>{{ moment(selectedTask?.createdAt).format('DD/MM/YYYY H:mm') }}</p>
            </div>
            <div class="flex items-center mt-4 text-gray-700">
              <EndDateIcon class="w-5 h-5" />
              <h1 class="px-1 font-bold">Бажариш санаси:</h1>
              <p>{{ moment(selectedTask?.dueDate).format('DD/MM/YYYY') }}</p>
            </div>
            <div class="flex  flex-wrap items-center mt-4 text-gray-700">
              <DescriptionIcon class="w-5 h-5" />
              <h1 class="px-1 font-bold">Топшириқ мазмуни:</h1>
              <p class="text-lg text-left"> {{ selectedTask?.description }}</p>
            </div>
            <div class="flex items-center mt-4 text-gray-700">
              <UserIcon class="w-5 h-5" />
              <h1 class="px-2 font-bold">Ижрочи:</h1>
              <p>
              <p>{{ getFullName(selectedTask?.userId) }}</p>
              </p>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-end p-4 space-x-2 border-t">
          <button @click="closeModal"
            class="w-36 py-2 px-4 rounded-md text-white text-base bg-gray-500 cursor-pointer hover:bg-gray-600">
            Ёпиш
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>