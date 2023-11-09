<script setup>
import TrashBinTrashOutlineIcon from "@/assets/icons/TrashBinTrashOutlineIcon.vue";
import SearchIcon from "@/assets/icons/SearchIcon.vue";
</script>

<template>
  <div class="bg-white border-b px-4 border-gray-200 rounded shadow">
        <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div class="items-center justify-center px-2 py-2">
              <label class="text-sm font-medium leading-6 text-gray-900">
                Хужжат тури
              </label>
            <select class="block w-full rounded border-0 py-3 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option >Barchasi</option>
              <option>Shartnoma</option>
              <option>Ishonchnoma</option>
              <option>Dalolatnoma</option>
            </select>
          </div>
          <div class="items-center justify-center px-2 py-2">
              <label class="text-sm font-medium leading-6 text-gray-900">
                Ижрочи
              </label>
              <select disabled class="block w-full rounded border-0 py-3 px-2.5 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <option >Барчаси</option>
                <option>Шартнома</option>
                <option>Ишончнома</option>
                <option>Далолатнома</option>
              </select>
          </div>
          <div class="items-center justify-center px-2 py-2">
              <label class="text-sm font-medium leading-6 text-gray-900">
                Масъул
              </label>
              <select disabled class="block w-full rounded border-0 py-3 px-2.5 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <option >Барчаси</option>
                <option>Шартнома</option>
                <option>Ишончнома</option>
                <option>Далолатнома</option>
              </select>
          </div>
          <div class="items-center justify-center px-2 py-2">
              <label class="text-sm font-medium leading-6 text-gray-900">
                Топшириқ тури
              </label>
              <select disabled class="block w-full rounded border-0 py-3 px-2.5 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <option >Барчаси</option>
                <option>Шартнома</option>
                <option>Ишончнома</option>
                <option>Далолатнома</option>
              </select>
          </div>
          <div class="items-center justify-center px-2 py-2">
              <label class="text-sm font-medium leading-6 text-gray-900">
                Муддат тури
              </label>
              <select disabled class="block w-full rounded border-0 py-3 px-2.5 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <option >Барчаси</option>
                <option>Шартнома</option>
                <option>Ишончнома</option>
                <option>Далолатнома</option>
              </select>
          </div>
          <div class="items-center justify-center px-2 py-2">
              <label class="text-sm font-medium leading-6 text-gray-900">
                Саналар бўйича
              </label>
              <input id="due-date" type="date" class="block w-full rounded border-0 py-2 px-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
          <div class="justify-center px-2 py-2">
              <label for="due-date" class="mb-1 text-sm font-medium leading-6 text-gray-900">
                Бошланғич сана
              </label>
              <input  id="due-date" type="date" class="block w-full rounded border-0 py-2 px-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
          <div class="justify-center px-2 py-2">
              <label for="due-date" class="mb-1 text-sm font-medium leading-6 text-gray-900">
                Тугатиш санаси
              </label>
              <input  id="due-date" type="date" class="block w-full rounded border-0 py-2 px-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
          <div class="justify-center px-2 py-2">
              <input  type="checkbox" class="w-4 h-4 sm:text-sm sm:leading-6">
              <label  class="text-md font-medium text-gray-600">
                Бўлим ходимлари
              </label>
          </div>
        </div>
        <div class="flex items-center space-x-4 mb-4 justify-end">
          <button class="flex items-center justify-center px-3 py-1.5 space-x-1 text-sm bg-blue-500 font-normal leading-6 text-white border border-blue-300 rounded-md hover:bg-blue-600">
                <SearchIcon class="w-5 h-5" />
            <span>Кидириш</span>
          </button>
          <button type="button" class="flex items-center justify-center px-3 py-1.5 space-x-1 text-sm font-normal leading-6 text-red-500 border border-red-300 rounded-md hover:bg-red-100">
            <TrashBinTrashOutlineIcon class="w-5 h-5" />
            <span>Тозалаш</span>
          </button>
        </div>
      </div>
          <table class="bg-white border-b mt-8 items-center border-gray-200 rounded shadow">
            <tr class="text-sm bg-gray-50">
              <th class="text-start pl-4 py-4 text-gray-600"> F.I.SH</th>
              <th class="text-center px-2.5 py-4 text-gray-600"> Топшириқлар сони</th>
              <th class="text-center  px-2.5 py-4 text-green-600 border-b-2 border-transparent">Бажарилган</th>
              <th class="text-center  px-2.5 py-4 text-blue-600 border-b-2 border-transparent">Бажарилмокда</th>
              <th class="ext-center  px-2.5 py-4 text-yellow-600 border-b-2 border-transparent">Тасдиклашда</th>
              <th class="text-center  px-2.5 py-4 text-green-600 border-b-2 border-transparent">Бажарилган</th>
              <th class="text-center px-2.5 py-4 text-yellow-600 ">Муддати кеч Бажарилган</th>
              <th class="text-center  px-2.5 py-4 text-red-600 border-b-2 border-transparent">Рад етилган</th>
              <th class="text-center  px-2.5 py-4 text-blue-600 border-b-2 border-transparent">Қайта  назоратга олинган</th>
              <th class="text-center px-2.5 py-4 text-gray-600 border-b-2 border-transparent">Топширилмаган  топшириклар</th></tr>
            <tr>
              <td class="px-3 py-4 text-md  text-gray-600">Матякубов Нематжон Саидназарович</td>
              <td class="text-center px-3 py-4 text-gray-600 "> 1</td>
              <td class="text-center px-3 py-4 text-green-600">1</td>
              <td class="text-center px-3 py-4 text-blue-600">0</td>
              <td class="text-center px-3 py-4 text-yellow-600">0</td>
              <td class="text-center px-3 py-4 text-green-600 ">1</td>
              <td class="text-center px-3 py-4 text-yellow-600 ">0</td>
              <td class="text-center px-3 py-4 text-red-600 ">0</td>
              <td class="text-center px-3 py-4 text-blue-600 ">1</td>
              <td class="text-center px-3 py-4 text-gray-600 ">1</td>
            </tr>
          </table>
</template>

<style scoped>

</style>