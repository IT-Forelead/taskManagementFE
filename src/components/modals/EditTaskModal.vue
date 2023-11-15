<script setup>
import { useModalStore } from '../../stores/modal.store'
import { useTaskStore } from '../../stores/task.store'
import { useUserStore } from '../../stores/user.store'
import SpinnerIcon from '../../assets/icons/SpinnerIcon.vue'
import XIcon from '../../assets/icons/XIcon.vue'
import { computed, onMounted, ref, reactive } from 'vue'
import TaskService from '../../services/task.service'
import UploadService from '../../services/upload.service'
import UserService from '../../services/user.service'
import { toast } from 'vue-sonner'

const users = computed(() => {
  return useUserStore().users
})

const taskId = computed(() => {
  return useTaskStore().selectedTaskId
})

const isLoading = ref(false)

const taskForm = reactive({
  userId: ''
})

const clearForm = () => {
  taskForm.userId = ''
}

const closeModal = () => {
  useModalStore().closeEditTaskModal()
  clearForm()
}

const updateTask = () => {
  TaskService.updateTask(
    taskId.value,
    { userIds: [taskForm.userId] }
  ).then(() => {
    toast.success("Successfully updated task")
    isLoading.value = false
    TaskService.getTasks({})
      .then((res) => {
        useTaskStore().clearStore()
        setTimeout(() => {
          useTaskStore().setTasks(res)
        }, 500)
      })
      .catch(() => {
        toast.error("Error while geting tasks!")
      })
    closeModal();
  }).catch((err) => {
    toast.error("Error updating task")
    isLoading.value = false
  })
}

const submitData = () => {
  isLoading.value = true
  updateTask()
}

const getUsers = async () => {
  UserService.getUsers({})
    .then((result) => {
      useUserStore().clearStore()
      useUserStore().setUsers(result?.data)
    })
    .catch(() => {
      toast.error('Error while getting response')
    })
}

onMounted(() => {
  getUsers()
})
</script>
<template>
  <div v-if="useModalStore().isOpenEditTaskModal"
    class="fixed top-0 left-0 right-0 z-50 w-full max-h-screen overflow-x-hidden overflow-y-auto backdrop-blur bg-gray-900/75 md:inset-0 md:h-full">
    <div class="relative w-full h-full max-w-xl p-4 -translate-x-1/2 -translate-y-1/2 md:h-auto left-1/2 top-1/2">
      <div class="relative p-4 bg-white border rounded-lg shadow">
        <div class="flex items-center justify-between mb-6">
          <h1 class="flex items-center text-2xl font-bold">Ижрочини танлаш</h1>
          <button @click="closeModal()"
            class="text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all duration-300 rounded-full text-sm p-1.5 inline-flex items-center">
            <XIcon />
          </button>
        </div>
        <div class="space-y-3">
          <div>
            <select v-model="taskForm.userId" id="assign"
              class="block w-full px-2 py-2 text-gray-900 bg-white border-0 rounded shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option value="">Ижрочиларни танлаш</option>
              <option :value="user?.id" v-for="(user, idx) in users" :key="idx">{{ user?.firstname + ' ' + user?.lastname
              }}</option>
            </select>
          </div>
        </div>
        <div class="mt-6">
          <button v-if="!isLoading" @click="submitData()" type="button"
            class="w-full px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Сақлаш
          </button>
          <button v-else type="button"
            class="flex items-center justify-center w-full px-3 py-2 space-x-1 text-sm font-semibold text-white bg-indigo-600 rounded shadow-sm cursor-default">
            <SpinnerIcon class="w-5 h-5" />
            <span>Сақлаш</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>