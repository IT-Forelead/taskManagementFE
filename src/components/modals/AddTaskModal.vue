<script setup>
import { useModalStore } from '../../stores/modal.store'
import { useTaskStore } from '../../stores/task.store'
import SpinnerIcon from '../../assets/icons/SpinnerIcon.vue'
import XIcon from '../../assets/icons/XIcon.vue'
import { ref, reactive } from 'vue'
import TaskService from '../../services/task.service'
import UploadService from '../../services/upload.service'
import { toast } from 'vue-sonner'

const isLoading = ref(false)

const taskForm = reactive({
  title: '',
  filename: '',
  dueDate: '',
  description: '',
})

const clearForm = () => {
  taskForm.title = ''
  taskForm.filename = ''
  taskForm.dueDate = ''
  taskForm.description = ''
}

const closeModal = () => {
  useModalStore().closeAddTaskModal()
  clearForm()
}

function getFile(e) {
  if (e.target.files[0].type.includes('pdf')) {
    taskForm.filename = e.target.files[0]
  } else {
    toast.error("File isn't upload")
  }
}

const createTask = (id) => {
  TaskService.createTask({
    title: taskForm.title,
    assetId: id,
    dueDate: taskForm.dueDate,
    description: taskForm.description
  }).then(() => {
    toast.success("Successfully created task")
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
    toast.error("Error creating task")
    isLoading.value = false
  })
}

const uploadFile = () => {
  const formData = new FormData()
  formData.append('file', taskForm.filename)
  formData.append('public', true)
  UploadService.upload(formData)
    .then((res) => {
      console.log("asset id: " + res)
      createTask(res)
    })
    .catch((err) => {
      toast.error("File isn't upload")
      isLoading.value = false
    })
}

const submitData = () => {
  if (!taskForm.title) {
    toast.error("Please enter title")
  } else if (!taskForm.filename) {
    toast.error("Please select file")
  } else if (!taskForm.dueDate) {
    toast.error("Please enter dueDate")
  } else if (!taskForm.description) {
    toast.error("Please enter description")
  } else {
    isLoading.value = true
    uploadFile()
  }
}
</script>
<template>
  <div v-if="useModalStore().isOpenAddTaskModal"
    class="fixed top-0 left-0 right-0 z-50 w-full max-h-screen overflow-x-hidden overflow-y-auto backdrop-blur bg-gray-900/75 md:inset-0 md:h-full">
    <div class="relative w-full h-full max-w-xl p-4 -translate-x-1/2 -translate-y-1/2 md:h-auto left-1/2 top-1/2">
      <div class="relative p-4 bg-white border rounded-lg shadow">
        <div class="flex items-center justify-between mb-6">
          <h1 class="flex items-center text-2xl font-bold">Топшириқ яратиш</h1>
          <button @click="closeModal()"
            class="text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all duration-300 rounded-full text-sm p-1.5 inline-flex items-center">
            <XIcon />
          </button>
        </div>
        <div class="space-y-3">
          <div>
            <label for="title" class="mb-1 text-sm font-medium leading-6 text-gray-900">
              Title
            </label>
            <input v-model="taskForm.title" id="title" type="text" placeholder="Task title"
              class="block w-full rounded border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
          <div>
            <label for="file" class="mb-1 text-sm font-medium leading-6 text-gray-900">
              <span class="inline-block">
                Номини киритинг
              </span>
              <input @change="getFile" id="file" type="file" placeholder="Task title"
                class="block w-full rounded border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </label>
          </div>
          <div>
            <label for="due-date" class="mb-1 text-sm font-medium leading-6 text-gray-900">
              Бажарилиши керак бўлган сана
            </label>
            <input v-model="taskForm.dueDate" id="due-date" type="date"
              class="block w-full rounded border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
          <!-- <div>
            <label for="assign" class="mb-1 text-sm font-medium leading-6 text-gray-900">Ижрочиларни танлаш</label>
            <select id="assign"
              class="block w-full px-2 py-2 text-gray-900 bg-white border-0 rounded shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div> -->
          <div>
            <label for="description" class="mb-1 text-sm font-medium leading-6 text-gray-900">Хужжат мазмуни</label>
            <textarea v-model="taskForm.description" id="description" rows="4" placeholder="Мазмунини киритиш..."
              class="block w-full rounded border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
        </div>
        <div class="mt-6">
          <button v-if="!isLoading" @click="submitData()" type="button"
            class="w-full px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Топшириқни яратиш
          </button>
          <button v-else type="button"
            class="flex items-center justify-center w-full px-3 py-2 space-x-1 text-sm font-semibold text-white bg-indigo-600 rounded shadow-sm cursor-default">
            <SpinnerIcon class="w-5 h-5" />
            <span>Топшириқни яратиш</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>