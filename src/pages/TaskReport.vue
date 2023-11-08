<script setup>
import { onMounted, computed } from "vue";
import { useTaskStore } from "../stores/task.store";
import TaskService from "../services/task.service";
const getTasksCounts = async () => {
  TaskService.getTasksCounts()
    .then((result) => {
      useTaskStore().setTasksCounts(result);
    })
    .catch(() => {
      toast.error("Error while getting response");
    });
};
onMounted(() => {
  getTasksCounts();
});

const tasksCounts = computed(() => {
  return useTaskStore().tasksCounts;
});
</script>

<template>
  <div class="container m-auto">
    <div class="space-y-8">
      <div>
        <h2 class="text-base font-semibold leading-7 text-gray-900">
          Келиб тушган
        </h2>
        <p class="text-sm leading-6 text-gray-600">
          Шахсий топшириқлар ижро ҳолати
        </p>
      </div>
      <div class="bg-white border-b border-gray-200 rounded shadow">
        <ul class="flex flex-wrap">
          <li
            class="inline-flex items-center justify-center px-6 py-4 text-blue-600 border-b-2 border-blue-600 hover:border-blue-600"
          >
            Ҳисобот
          </li>
          <li
            class="inline-flex items-center justify-center px-6 py-4 text-green-600 border-b-2 border-transparent hover:border-green-500"
          >
            Қайта назоратга олинган
          </li>
          <li
            class="inline-flex items-center justify-center px-6 py-4 text-indigo-600 border-b-2 border-transparent hover:border-indigo-500"
          >
            Топшириқлар
          </li>
          <li
            class="inline-flex items-center justify-center px-6 py-4 text-yellow-600 border-b-2 border-transparent hover:border-yellow-500"
          >
            Берилган жавоблар
          </li>
          <li
            class="inline-flex items-center justify-center px-6 py-4 text-red-600 border-b-2 border-transparent hover:border-red-500"
          >
            Қабул қилинмаганлар
          </li>
        </ul>
      </div>
      <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
        <div
          class="flex items-center justify-between p-4 bg-white rounded shadow"
        >
          <div class="text-base text-gray-900">Барча топшириқлар</div>
          <div class="text-lg font-medium text-blue-600">
            {{ tasksCounts.count }}
          </div>
        </div>
        <div
          class="flex items-center justify-between p-4 bg-white rounded shadow"
        >
          <div class="text-base text-gray-900">Бажарилмоқда</div>
          <div class="text-lg font-medium text-orange-600">
            {{ tasksCounts.inProgress }}
          </div>
        </div>
        <div
          class="flex items-center justify-between p-4 bg-white rounded shadow"
        >
          <div class="text-base text-gray-900">Бажарилган</div>
          <div class="text-lg font-medium text-green-600">
            {{ tasksCounts.completed }}
          </div>
        </div>
        <div
          class="flex items-center justify-between p-4 bg-white rounded shadow"
        >
          <div class="text-base text-gray-900">Бажарилмаган</div>
          <div class="text-lg font-medium text-red-500">
            {{ tasksCounts.new }}
          </div>
        </div>
        <div
          class="flex items-center justify-between p-4 bg-white rounded shadow"
        >
          <div class="text-base text-gray-900">Муддатидан кеч бажарилган</div>
          <div class="text-lg font-medium text-indigo-600">
            {{ tasksCounts.onHold }}
          </div>
        </div>
        <div
          class="flex items-center justify-between p-4 bg-white rounded shadow"
        >
          <div class="text-base text-gray-900">Қайта назоратга олинган</div>
          <div class="text-lg font-medium text-yellow-600">
            {{ tasksCounts.approved }}
          </div>
        </div>
        <div
          class="flex items-center justify-between p-4 bg-white rounded shadow"
        >
          <div class="text-base text-gray-900">Берилган жавоблар</div>
          <div class="text-lg font-medium text-green-600">0</div>
        </div>
        <div
          class="flex items-center justify-between p-4 bg-white rounded shadow"
        >
          <div class="text-base text-gray-900">Қабул қилинмаганлар</div>
          <div class="text-lg font-medium text-red-600">
            {{ tasksCounts.rejected }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
