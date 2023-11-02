<script setup>
import { useModalStore } from '../../stores/modal.store'
import MyTeleport from '../common/MyTeleport.vue'
import AttachIcon from '../../assets/icons/AttachIcon.vue'
import CloseIcon from '../../assets/icons/CloseIcon.vue'
import { ref, reactive } from 'vue'
import TaskService from '../../services/task.service'
import { toast } from 'vue-sonner'

const isLoading = ref(false)

const taskForm = reactive({
  title: '',
  filename: '',
  dueDate: '',
  description: '',
})

const onFileSelected = (e) => {
  var files = e.target.files || e.dataTransfer.files;
  if (!files.length) {
    return;
  }
  taskForm.filename = files[0].name;
  filename.value = files[0].name;
}

const clearForm = () => {
  taskForm.title = ''
  taskForm.filename = ''
  taskForm.dueDate = ''
  taskForm.description = ''
}

const closeModal = () => {
  useModalStore().closeTeleport()
  clearForm()
}

const addTask = () => {
  if (!taskForm.title) {
    toast.error("Please enter title")
  } else if (!taskForm.filename) {
    toast.error("Please select file")
  } else if (!taskForm.dueDate) {
    toast.error("Please enter dueDate")
  } else if (!taskForm.description) {
    toast.error("Please enter description")
  } else {
    TaskService.createTask(taskForm)
      .then(() => {
        toast.success("Successfully created Task");
        closeModal();
      })
      .catch((err) => {
        toast.error("Error creating task");
      })
  }
}

</script>
<template>
  <MyTeleport>
    <div class="w-full h-full p-4 border border-gray-300 rounded">
      <div class="flex items-center justify-between mb-6">
        <h1 class="flex items-center text-2xl font-bold">Add task</h1>
        <button @click="closeModal()"
          class="text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all duration-300 rounded-full text-sm p-1.5 inline-flex items-center">
          <CloseIcon />
        </button>
      </div>
      <div class="space-y-3 text-gray-500">
        <div>
          <label for="task">Task title</label>
          <input placeholder="Task title" type="text" id="title" class="w-full px-3 py-2 border border-gray-300 rounded"
            v-model="taskForm.title" />
        </div>

        <div class="relative block">
          <label>Attach file task</label>
          <label for="filename" v-if="!taskForm.filename"
            class="block w-full px-3 py-2 leading-tight border rounded shadow appearance-none resize-none h-min focus:outline-none focus:shadow-outline">Attach
            file task</label>
          <label
            class="block w-full px-3 py-2 leading-tight border rounded shadow appearance-none resize-none h-min focus:outline-none focus:shadow-outline"
            v-if="taskForm.filename" v-text="filename"></label>
          <div class="relative flex-grow textarea-container">
            <input type="file" class="hidden" id="filename" name="filename" placeholder="" @change="onFileSelected" />
            <div class="svg-container z-[-10] absolute bottom-2 right-3 flex items-center">
              <AttachIcon class="bg-white hover:bg-gray-500" />
            </div>
          </div>
        </div>

        <div>
          <label for="dueDate">Date</label>
          <input type="date" id="dueDate" v-model="taskForm.dueDate"
            class="w-full px-4 py-2 leading-tight border border-gray-300 rounded appearance-none focus:outline-none" />
        </div>
        <div>
          <label for="job">Assign task to user</label>
          <select id="job" name="job" class="w-full px-3 py-2 border border-gray-300 rounded">
            <optgroup label="Web">
              <option value="frontend_developer">
                Front-End Developer
              </option>
            </optgroup>
            <optgroup label="Mobile">
              <option value="android_developer">Android Developer</option>
            </optgroup>
            <optgroup label="Business">
              <option value="business_owner">Business Owner</option>
              <option value="freelancer">Freelancer</option>
            </optgroup>
          </select>
        </div>
        <div>
          <label for="description">Description</label>
          <textarea rows="4" placeholder="Comment here" id="description" v-model="taskForm.description"
            class="w-full px-3 py-2 border border-gray-300 rounded"></textarea>
        </div>
      </div>
      <button v-if="!isLoading" @click="addTask" type="button"
        class="w-full px-4 py-2 mt-6 font-bold text-white bg-blue-500 rounded hover:bg-blue-600">
        Create task
      </button>
      <button v-else type="button" class="w-full px-4 py-2 mt-6 font-bold text-white bg-blue-500 rounded cursor-default">
        Creating task
      </button>
    </div>
  </MyTeleport>
</template>
