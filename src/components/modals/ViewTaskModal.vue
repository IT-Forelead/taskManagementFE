<script setup>
import moment from "moment";
import UserIcon from "@/assets/icons/UserIcon.vue";
import XIcon from "@/assets/icons/XIcon.vue";
import { useModalStore } from "../../stores/modal.store";
import { useTaskStore } from "../../stores/task.store";
import { computed } from "vue";
import { useUserStore } from "../../stores/user.store";

import TaskIcon from "@/assets/icons/TaskIcon.vue";
import DateIcon from "@/assets/icons/DateIcon.vue";
import EndDateIcon from "@/assets/icons/EndDateIcon.vue";
import DescriptionIcon from "@/assets/icons/DescriptionIcon.vue";
import AddCircleOutlineIcon from "../../assets/icons/AddCircleOutlineIcon.vue";
import ShieldCheckOutlineIcon from "../../assets/icons/ShieldCheckOutlineIcon.vue";
import UserPlusBrokenIcon from "../../assets/icons/UserPlusBrokenIcon.vue";
import BellOutlineIcon from "../../assets/icons/BellOutlineIcon.vue";
import PencilEditIcon from "../../assets/icons/PencilEditIcon.vue";
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
    class="fixed text-xs top-0 text-gray-500 left-0 right-0 z-50 w-full max-h-screen overflow-x-hidden overflow-y-auto backdrop-blur bg-gray-900/75 md:inset-0 md:h-full"
  >
    <div
      class="relative w-full h-full max-w-xl p-4 -translate-x-1/2 -translate-y-1/2 md:h-auto left-1/2 top-1/2"
    >
      <div class="relative bg-white border rounded-lg shadow">
        <div class="flex justify-between items-start p-4 rounded-t border-b">
          <div class="flex h-full items-center space-x-2">
            <h1>Бажариш муддати:</h1>
            <p class="text-red-500">
              {{ moment(selectedTask?.dueDate).format("DD/MM/YYYY") }}
            </p>
            <DateIcon class="text-blue-500 text-base" />
          </div>
          <button
            @click="closeModal()"
            class="text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all duration-300 rounded-full p-1.5 inline-flex items-center"
          >
            <XIcon />
          </button>
        </div>
        <div class="bg-white rounded-lg overflow-hidden my-4">
          <div class="flex flex-col space-y-5 py-2 px-6">
            <div class="items-center">
              <h1 class="font-bold">Ким томонидан яратилган</h1>
              <p>{{ getFullName(selectedTask?.userId) }}</p>
            </div>
            <div class="items-center">
              <h1 class="font-bold">Топширик мазмуни</h1>
              <p>{{ selectedTask?.description }}</p>
              <pencil-edit-icon />
            </div>
            <div class="flex items-center space-x-1">
              <h1 class="font-bold">Ёрлиқлар</h1>
              <AddCircleOutlineIcon class="text-indigo-500 text-3xl" />
            </div>
            <input type="file" />
            <!--<p class="text-indigo-500"></p>Файл бириктириш<p/>-->
            <div class="flex justify-between items-center">
              <h1 class="font-bold">Назоратчилар руйхати (1)</h1>
              <ShieldCheckOutlineIcon class="text-green-500" />
            </div>
            <div class="flex justify-between items-center">
              <div>
                <h1 class="font-bold">Рахимов Улуғбек Джуманиязович</h1>
                <h3>УП "Ургенчтрансгаз"</h3>
              </div>
              <ShieldCheckOutlineIcon class="text-green-500" />
            </div>
            <div class="flex justify-between">
              <h1>Ижрочилар руйхати (1)</h1>
              <div class="flex text-indigo-700">
                <user-plus-broken-icon />
                <user-plus-broken-icon />
              </div>
            </div>
            <input
              type="text"
              class="w-full p-3 border-2 border-gray-300"
              placeholder="Қидириш"
            />
            <div class="bg-green-100 p-3">
              <h1 class="font-bold">Рахимов Улуғбек Джуманиязович</h1>
              <p>{{ moment(selectedTask?.dueDate).format("DD/MM/YYYY") }}</p>
            </div>
          </div>
        </div>
        <div
          class="bg-white flex flex-col space-y-5 rounded-lg overflow-hidden my-4"
        >
          <div class="flex flex-col space-y-5 py-2 px-6">
            <div class="items-start p-4 rounded-t border-b">
              <h1 class="font-bold">Берилган жавоблар</h1>
            </div>
            <div class="flex justify-between">
              <div>
                <button class="p-3 bg-blue-500 text-white rounded-lg">
                  Берилган жавоб
                </button>
                <p>{{ moment(selectedTask?.dueDate).format("DD/MM/YYYY") }}</p>
              </div>
              <div>
                <h1 class="font-bold">Рахимов Улуғбек Джуманиязович</h1>
                <h3>УП "Ургенчтрансгаз"</h3>
              </div>
            </div>
            <div class="w-full">
              <textarea
                class="boreder-gray-500 border-2 resize-none"
                placeholder="Жавоб матни"
                name=""
                id=""
                rows="5"
                cols="67"
              ></textarea>
            </div>

            <div class="flex items-center justify-between space-x-2 border-t">
              <input type="file" />
              <!--<p class="text-indigo-500"></p>Файл бириктириш<p/>-->
              <button
                class="w-36 py-2 px-4 rounded-md text-base cursor-pointer"
              >
                Бекор қилиш
              </button>
              <button>Сақлаш</button>
            </div>
          </div>

          <div class="flex items-center justify-end p-4 space-x-2 border-t">
            <button
              @click="closeModal"
              class="w-36 py-2 px-4 rounded-md text-white text-base bg-red-600 cursor-pointer hover:bg-red-800"
            >
              Ёпиш
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
