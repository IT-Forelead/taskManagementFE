<script setup>
import { ref } from "vue";
import TaskTabMenu from '../components/tasks/TaskTabMenu.vue'
import TaskCountReport from '../components/tasks/TaskCountReport.vue'

const tab = ref(1);
const currentTab = (tabNumber) => (tab.value = tabNumber);
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

      <TaskTabMenu />
      <TaskCountReport />

      <div class="h-auto bg-white rounded shadow">
        <ul class="flex w-full space-x-2 text-black">
          <li class="p-3 text-red-600 border-b-2 border-transparent hover:border-red-500">
            <button @click="currentTab(1)">
              Ходимлар кесимида
            </button>
          </li>
          <li class="p-3 text-indigo-600 border-b-2 border-transparent hover:border-indigo-500">
            <button @click="currentTab(2)">
              Қуйи ташкилотлар кесимида
            </button>
          </li>
        </ul>
      </div>
      <div class="rounded shadow">
        <div class="p-3 bg-white">
          <div v-if="tab === 1">
            Ходимлар кесимида
          </div>
          <div v-if="tab === 2">
            Қуйи ташкилотлар кесимида
          </div>
        </div>
        <div class="table-responsive ">
          <table class="items-center table w-full text-center border-2 border-solid table-fixed b ">
            <thead class="h-20">
              <tr>
                <th scope="col">ФИШ</th>
                <th scope="col">Топшириқлар сони</th>
                <th scope="col">Бажарилмоқда</th>
                <th class="text-red-500" scope="col">Бажарилмаган</th>
                <th scope="col">Бажарилган</th>
                <th scope="col">Муддитидан кеч бажарилган</th>
                <th scope="col">Рад этилган</th>
                <th scope="col">Қайта назоратга олинган</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-gray-200 dark:divide-gray-700">
              <tr class="border">
                <td class="py-4">Жами</td>
                <td class="py-4">1</td>
                <td class="py-4">0</td>
                <td class="py-4 text-red-500">0</td>
                <td class="py-4">1</td>
                <td class="py-4">0</td>
                <td class="py-4">0</td>
                <td class="py-4 text-yellow-500">0</td>
              </tr>
              <tr class="border">
                <td class="py-4 uppercase">Matchanov Sanjarber Ruzmetovich</td>
                <td class="py-4">1</td>
                <td class="py-4">0</td>
                <td class="py-4 text-red-500">0</td>
                <td class="py-4">1</td>
                <td class="py-4">0</td>
                <td class="py-4">0</td>
                <td class="py-4 text-yellow-500">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>