<script setup>
import { useModalStore } from "../../../stores/modal.store";
import MyTeleport from "../../../MyTeleport.vue";
import AttachIcon from "../../../assets/icons/AttachIcon.vue";
import CloseIcon from "../../../assets/icons/CloseIcon.vue";
import { ref, reactive } from "vue";


const successMessage = ref('')
const attachedFileName = ref('')
const success = (msg) => {
  successMessage.value = msg
  setTimeout(() => {
    successMessage.value = ''
  }, 8000)
}

const onFileSelected = (e) => {
  var files = e.target.files || e.dataTransfer.files;
  if (!files.length) {
    return;
  }
  addTaskForm.attachedFile = files[0];
  attachedFileName.value = files[0].name;
}

const errorMessage = ref('')
const error = (msg) => {
  errorMessage.value = msg
  setTimeout(() => {
    errorMessage.value = ''
  }, 5000)
}

const closeModal = () => {
  addTaskForm.title = ''
  addTaskForm.attachedFile = ''
  addTaskForm.date = ''
  addTaskForm.job = ''
  addTaskForm.comment = ''
  
}


const addTask = () => {
  if (!addTaskForm.title) {
    error('Please enter title')
  } else if (!addTaskForm.attachedFile) {
    error('Please select file')
  } else if (!addTaskForm.date) {
    error('Please enter date')
  } else if (!addTaskForm.job) {
    error('Please select job')
  } else if (!addTaskForm.comment) {
    error('Please enter comment')
  } else {
    success('Successfully created Task')
    closeModal()
  }
}


const addTaskForm = reactive({
  title: '',
  attachedFile: '',
  date: '',
  job: '',
  comment: '',
})

const closeTeleport = () => {
  useModalStore().closeTeleport();
};
const props = defineProps({
  show: Boolean,
});
</script>
<template>
  <MyTeleport>
    <div>
      <div class="w-full h-full">
        <form
          class="p-8 border border-gray-300 rounded"
        >
          <div class="flex justify-between mb-6">
            <h1 class="flex items-center text-2xl font-bold ">Add Task</h1>

            <button
              @click="closeTeleport"
              type="button"
              class="text-black  hover:bg-gray-200 hover:text-gray-500 rounded-lg w-10 h-10  inline-flex justify-center items-center"
            >
              <CloseIcon class="w-7 h-7" />
            </button>
          </div>

          <fieldset class="space-y-3 text-gray-500">
            <div>
              <label for="task">Task title</label>
              <input
                placeholder="Task title"
                type="text"
                id="task"
                name="task"
                class="w-full border border-gray-300 rounded py-2 px-3" v-model="addTaskForm.title"
              />
            </div>

            <div class="relative block">
              <label>Attach file task</label>
              <label
                for="file" v-if="!addTaskForm.attachedFile"
                class="block resize-none shadow appearance-none border rounded w-full h-min py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                >Attach file task</label
              >
              <label class="block resize-none shadow appearance-none border rounded w-full h-min py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
 v-if="addTaskForm.attachedFile" v-text="attachedFileName"></label>
              <div class="textarea-container flex-grow relative" >
                
                <input type="file" class="hidden" id="file" placeholder="" @change="onFileSelected"/>
                <div
                  class="svg-container z-[-10] absolute bottom-2 right-3 flex items-center "  
                >
                  <AttachIcon class="bg-white hover:bg-gray-500" />
                </div>
              </div>
            </div>

            <div class="relative">
              <label for="date">Date</label>
              <input
                placeholder="DD.MM.YYYY"
                type="date"
                name="date"
                v-model="addTaskForm.date"
                class="w-full z-[-10] appearance-none border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
              />
              <!-- <span
                class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
              > -->
                <!-- <CalendarIcon /> -->
              <!-- </span> -->
            </div>

            <label for="job" class="block">Assign task to user</label>
            <select
              id="job"
              name="user_job"
              class="w-full border border-gray-300 rounded py-2 px-3"                 v-model="addTaskForm.job"

            >
              <optgroup label="Web">
                <option value="frontend_developer">Front-End Developer</option>
              </optgroup>
              <optgroup label="Mobile">
                <option value="android_developer">Android Developer</option>
              </optgroup>
              <optgroup label="Business">
                <option value="business_owner">Business Owner</option>
                <option value="freelancer">Freelancer</option>
              </optgroup>
            </select>

            <label for="" class="block">Comment</label>
            <textarea
              placeholder="Comment here"
              id="comment"
              name="comment"
              v-model="addTaskForm.comment"

              class="w-full border border-gray-300 rounded py-2 px-3"
            ></textarea>
          </fieldset>
          <div>
              <p v-if="errorMessage" class="mr-2 text-red-600">{{ errorMessage }}</p>
              <p v-if="successMessage" class="mr-2 text-green-600">{{ successMessage }}</p>
            </div>
          <button  @click="addTask" type="button"
            
            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-6 rounded"
          >
            Create task
          </button>
        </form>
      </div>
    </div>
  </MyTeleport>
</template>
