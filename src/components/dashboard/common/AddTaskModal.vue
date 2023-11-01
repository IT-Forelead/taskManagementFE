<script setup>
import { useModalStore } from "../../../stores/modal.store";
import MyTeleport from "../../../MyTeleport.vue";
import AttachIcon from "../../../assets/icons/AttachIcon.vue";
import CloseIcon from "../../../assets/icons/CloseIcon.vue";
import { ref } from "vue";

const selectedDate = ref("");

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
          action="index.html"
          method="post"
          class="p-8 border border-gray-300 rounded"
        >
          <div class="flex justify-between mb-6">
            <h1 class="flex items-center text-2xl font-bold ">Add Task</h1>

            <button
              @click="closeTeleport"
              type="button"
              class="text-gray-400  hover:bg-gray-200 hover:text-gray-500 rounded-lg w-10 h-10  inline-flex justify-center items-center"
            >
              <CloseIcon class="w-5 h-5" />
            </button>
          </div>

          <fieldset class="space-y-4">
            <div>
              <label for="name"></label>
              <input
                placeholder="Task title"
                type="text"
                id="name"
                name="user_name"
                class="w-full border border-gray-300 rounded py-2 px-3"
              />
            </div>

            <div class="relative block">
              <label
                for="file"
                class="block resize-none shadow appearance-none border rounded w-full h-min py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >Attach file task</label
              >

              <div class="textarea-container flex-grow relative">
                <input type="file" class="hidden" id="file" placeholder="" />
                <div
                  class="svg-container z-[-10] absolute bottom-2 right-3 flex items-center"
                >
                  <AttachIcon class="bg-white hover:bg-gray-500" />
                </div>
              </div>
            </div>

            <!-- <Calendar /> -->

            <div class="relative">
              <label for=""></label>
              <input
                placeholder="DD.MM.YYYY"
                type="date"
                v-model="selectedDate"
                class="w-full z-[-10] appearance-none border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
              />
              <span
                class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
              >
                <!-- <CalendarIcon /> -->
              </span>
            </div>

            <label for="job" class="block"></label>
            <select
              id="job"
              name="user_job"
              class="w-full border border-gray-300 rounded py-2 px-3"
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

            <label for="" class="block"></label>
            <textarea
              placeholder="Comment here"
              id="comment"
              name="user_bio"
              class="w-full border border-gray-300 rounded py-2 px-3"
            ></textarea>
          </fieldset>

          <button
            type="submit"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-6 rounded"
          >
            Create task
          </button>
        </form>
      </div>
    </div>
  </MyTeleport>
</template>
