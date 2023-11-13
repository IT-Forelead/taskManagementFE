<script setup>
import moment from "moment";
import "moment/dist/locale/ru";
import XIcon from "@/assets/icons/XIcon.vue";
import { useModalStore } from "../../stores/modal.store";
import { useTaskStore } from "../../stores/task.store";
import { computed } from "vue";
import { useUserStore } from "../../stores/user.store";

import DateIcon from "@/assets/icons/DateIcon.vue";
import AddCircleOutlineIcon from "../../assets/icons/AddCircleOutlineIcon.vue";
import UserPlusBrokenIcon from "../../assets/icons/UserPlusBrokenIcon.vue";
import BellOutlineIcon from "../../assets/icons/BellOutlineIcon.vue";
import PencilEditIcon from "../../assets/icons/PencilEditIcon.vue";
import PaperclipIcon from "../../assets/icons/PaperclipIcon.vue";
import ShieldPlusOutlineIcon from "../../assets/icons/ShieldPlusOutlineIcon.vue";
import ShieldCrossOutlineIcon from "../../assets/icons/ShieldCrossOutlineIcon.vue";
import AlarmOutlineIcon from "../../assets/icons/AlarmOutlineIcon.vue";
import ClockCircleOutlineIcon from "../../assets/icons/ClockCircleOutlineIcon.vue";
import UserMinusOutlineIcon from "../../assets/icons/UserMinusOutlineIcon.vue";

moment.locale("ru");
const closeModal = () => {
  useModalStore().closeViewTaskModal();
};
const selectedTask = computed(() => {
  return useTaskStore().selectedTask;
});

const getFullName = (userId) => {
  const user = useUserStore().users.find((u) => u.id === userId);
  if (user) {
    return `${user.firstname} ${user.lastname}`;
  }
  return "Ижрочи тайинланмаган";
};
</script>
<template>
  <div
    v-if="useModalStore().isOpenViewTaskModal"
    class="fixed top-0 left-0 right-0 z-50 w-full max-h-screen overflow-x-hidden overflow-y-auto backdrop-blur bg-gray-900/75 md:inset-0 md:h-full"
  >
    <div
      class="relative w-full h-full max-w-3xl p-4 -translate-x-1/2 -translate-y-1/2 md:h-auto left-1/2 top-1/2 text-gray-500"
    >
      <div class="text-xs relative bg-gray-200 flex flex-col space-y-4">
        <div class="bg-white">
          <header
            class="text-sm p-4 border-b flex justify-between items-center shadow"
          >
            <div class="flex items-center space-x-2">
              <h1>Бажариш муддати:</h1>
              <p class="text-red-500">
                {{ moment(selectedTask?.dueDate).format("DD MMM YYYY") }}
              </p>

              <DateIcon class="text-blue-500 text-base" />
            </div>
            <button
              @click="closeModal()"
              class="text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all duration-300 rounded-full p-1.5 inline-flex items-center"
            >
              <XIcon />
            </button>
          </header>
          <article class="p-4 flex flex-col space-y-4">
            <div class="items-center">
              <h1 class="text-sm">Ким томонидан яратилган</h1>
              <p>{{ getFullName(selectedTask?.userId) }}</p>
            </div>
            <div>
              <h1 class="text-sm">Топширик мазмуни</h1>
              <div class="flex items-center space-x-4">
                <p>{{ selectedTask?.description }}</p>
                <pencil-edit-icon class="text-indigo-500 text-xl" />
              </div>
            </div>
            <div class="flex items-center space-x-1">
              <h1 class="text-sm">Ёрлиқлар</h1>
              <AddCircleOutlineIcon class="text-indigo-500 text-3xl" />
            </div>
            <div class="relative">
              <input type="file" id="fileInput" class="hidden" />
              <label
                for="fileInput"
                class="flex text-indigo-500 space-x-2 items-center px-2 py-2 border-2"
              >
                <PaperclipIcon class="flex items-start text-lg" />
                <p>Файл бириктириш</p>
              </label>
            </div>
            <!---->
            <div class="flex justify-between items-center">
              <div class="flex space-x-4">
                <h1 class="font-bold">Назоратчилар руйхати</h1>
                <p>()</p>
              </div>

              <ShieldPlusOutlineIcon class="text-green-500 text-base" />
            </div>
            <div class="taskUserList flex justify-between items-center">
              <div class="border-l px-2">
                <h1 class="font-bold"></h1>
                <h3></h3>
              </div>
              <ShieldCrossOutlineIcon class="text-green-500 text-base" />
            </div>
            <div class="flex justify-between">
              <div class="flex space-x-4">
                <h1>Ижрочилар руйхати</h1>
                <p>()</p>
              </div>
              <div class="flex space-x-3 text-indigo-700 text-base">
                <AlarmOutlineIcon />
                <UserPlusBrokenIcon />
              </div>
            </div>
            <input
              type="text"
              class="w-full p-3 border-2 border-gray-300"
              placeholder="Қидириш"
            />
            <div class="flex items-center justify-between bg-green-100">
              <div class="flex space-x-2 p-3">
                <ClockCircleOutlineIcon class="text-base text-indigo-700" />
                <div>
                  <h1 class="font-bold"></h1>
                  <p>
                    {{ moment(selectedTask?.dueDate).format("DD MMM YYYY") }}
                  </p>
                </div>
              </div>
              <div class="flex space-x-2">
                <BellOutlineIcon class="text-yellow-500 text-xs w-4 h-4" />
                <p>
                  {{ moment(selectedTask?.dueDate).format("DD MMM YYYY") }}
                </p>
                <UserMinusOutlineIcon class="text-indigo-700 text-base" />
              </div>
            </div>
          </article>
        </div>
        <div class="bg-white w-full items-star">
          <div class="flex items-center border-b">
            <h1 class="p-4">Берилган жавоблар</h1>
          </div>
          <article class="p-4">
            <div class="flex flex-col space-y-4">
              <div class="flex justify-between">
                <div>
                  <button class="p-3 bg-blue-500 text-white rounded-lg">
                    Берилган жавоб
                  </button>
                  <p>
                    {{
                      moment(selectedTask?.dueDate)
                        .locale("ru")
                        .format("DD MMM YYYY")
                    }}
                  </p>
                </div>
                <div>
                  <h1 class="font-bold"></h1>
                  <h3></h3>
                </div>
              </div>
              <div class="taskDescriptionList">
                <p class="border-l px-2">{{ selectedTask?.description }}</p>
              </div>
              <div class="w-full">
                <textarea
                  class="p-2 boreder-gray-500 border-2 w-full"
                  placeholder="Жавоб матни"
                  name=""
                  id=""
                  rows="5"
                  cols="60"
                ></textarea>
              </div>

              <div class="flex items-center justify-between">
                <div class="relative">
                  <input type="file" id="fileInput" class="hidden" />
                  <label
                    for="fileInput"
                    class="flex text-indigo-500 space-x-2 items-center px-2 py-2"
                  >
                    <PaperclipIcon class="flex items-start text-lg" />
                    <p>Файл бириктириш</p>
                  </label>
                </div>
                <div class="flex w-3/6 justify-between">
                  <button class="text-base">Бекор қилиш</button>
                  <button class="text-base px-6 py-2 rounded-full bg-gray-200">
                    Сақлаш
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
