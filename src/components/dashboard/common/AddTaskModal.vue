<script setup>
import { useModalStore } from "../../../stores/modal.store";
import MyTeleport from "../../../MyTeleport.vue";
import AttachIcon from "../../../assets/icons/AttachIcon.vue";
import CloseIcon from "../../../assets/icons/CloseIcon.vue";
import { ref, reactive } from "vue";
import TaskService from "../../../services/task.service";

const successMessage = ref("");
const filename = ref("");
const success = (msg) => {
  successMessage.value = msg;
  setTimeout(() => {
    successMessage.value = "";
  }, 8000);
};

const onFileSelected = (e) => {
  console.log("---------------------");
  var files = e.target.files || e.dataTransfer.files;
  if (!files.length) {
    return;
  }
  addTaskForm.filename = files[0].name;
  filename.value = files[0].name;
};

const errorMessage = ref("");
const error = (msg) => {
  errorMessage.value = msg;
  setTimeout(() => {
    errorMessage.value = "";
  }, 5000);
};

const closeModal = () => {
  addTaskForm.title = "";
  addTaskForm.filename = "";
  addTaskForm.dueDate = "";
  //  addTaskForm.job = "";
  addTaskForm.description = "";
};

const addTask = () => {
  if (!addTaskForm.title) {
    error("Please enter title");
  } else if (!addTaskForm.filename) {
    error("Please select file");
  } else if (!addTaskForm.dueDate) {
    error("Please enter dueDate");
    // } else if (!addTaskForm.job) {
    //   error("Please select job");
  } else if (!addTaskForm.description) {
    error("Please enter description");
  } else {
    TaskService.createTask(addTaskForm)
      .then(() => {
        success("Successfully created Task");
        closeModal();
      })
      .catch((err) => {
        error("Error creating task");
      });
  }
};

const addTaskForm = reactive({
  title: "",
  filename: "",
  dueDate: "",
  // job: "",
  description: "",
});

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
        <form class="p-8 border border-gray-300 rounded">
          <div class="flex justify-between mb-6">
            <h1 class="flex items-center text-2xl font-bold">Add Task</h1>

            <button
              @click="closeTeleport"
              type="button"
              class="text-black hover:bg-gray-200 hover:text-gray-500 rounded-lg w-10 h-10 inline-flex justify-center items-center"
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
                id="title"
                name="title"
                class="w-full border border-gray-300 rounded py-2 px-3"
                v-model="addTaskForm.title"
              />
            </div>

            <div class="relative block">
              <label>Attach file task</label>
              <label
                for="filename"
                v-if="!addTaskForm.filename"
                class="block resize-none shadow appearance-none border rounded w-full h-min py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                >Attach file task</label
              >
              <label
                class="block resize-none shadow appearance-none border rounded w-full h-min py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                v-if="addTaskForm.filename"
                v-text="filename"
              ></label>
              <div class="textarea-container flex-grow relative">
                <input
                  type="file"
                  class="hidden"
                  id="filename"
                  name="filename"
                  placeholder=""
                  @change="onFileSelected"
                />
                <div
                  class="svg-container z-[-10] absolute bottom-2 right-3 flex items-center"
                >
                  <AttachIcon class="bg-white hover:bg-gray-500" />
                </div>
              </div>
            </div>

            <div class="relative">
              <label for="dueDate">Date</label>
              <input
                placeholder="DD.MM.YYYY"
                type="date"
                id="dueDate"
                name="dueDate"
                v-model="addTaskForm.dueDate"
                class="w-full z-[-10] appearance-none border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
              />
            </div>
            <div class="relative">
              <label for="job" class="block">Assign task to user</label>
              <select
                id="job"
                name="job"
                class="w-full border border-gray-300 rounded py-2 px-3"
              >
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
            <div class="relative">
              <label for="" class="block">Description</label>
              <textarea
                placeholder="comment here"
                id="description"
                name="description"
                v-model="addTaskForm.description"
                class="w-full border border-gray-300 rounded py-2 px-3"
              ></textarea>
            </div>
          </fieldset>
          <div>
            <p v-if="errorMessage" class="mr-2 text-red-600">
              {{ errorMessage }}
            </p>
            <p v-if="successMessage" class="mr-2 text-green-600">
              {{ successMessage }}
            </p>
          </div>
          <button
            @click="addTask"
            type="button"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-6 rounded"
          >
            Create task
          </button>
        </form>
      </div>
    </div>
  </MyTeleport>
</template>
