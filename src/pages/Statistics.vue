<script setup>
import TrashBinTrashOutlineIcon from "@/assets/icons/TrashBinTrashOutlineIcon.vue";
import SearchIcon from "@/assets/icons/SearchIcon.vue";
</script>

<template>
  <div class="container pb-10 m-auto">
    <div class="space-y-8">
      <div class="p-4 bg-white border border-gray-200 rounded shadow">
        <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <label class="text-sm font-medium leading-6 text-gray-900">
              Хужжат тури
            </label>
            <select
              class="block w-full px-2 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6">
              <option>Барчаси</option>
              <option>Шартнома</option>
              <option>Ишончнома</option>
              <option>Далолатнома</option>
            </select>
          </div>
          <div>
            <label class="text-sm font-medium leading-6 text-gray-900">
              Ижрочи
            </label>
            <select
              class="block w-full px-2 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6">
              <option>Барчаси</option>
              <option>Шартнома</option>
              <option>Ишончнома</option>
              <option>Далолатнома</option>
            </select>
          </div>
          <div>
            <label class="text-sm font-medium leading-6 text-gray-900">
              Масъул
            </label>
            <select
              class="block w-full px-2 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6">
              <option>Барчаси</option>
              <option>Шартнома</option>
              <option>Ишончнома</option>
              <option>Далолатнома</option>
            </select>
          </div>
          <div>
            <label class="text-sm font-medium leading-6 text-gray-900">
              Топшириқ тури
            </label>
            <select
              class="block w-full px-2 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6">
              <option>Барчаси</option>
              <option>Шартнома</option>
              <option>Ишончнома</option>
              <option>Далолатнома</option>
            </select>
          </div>
          <div>
            <label class="text-sm font-medium leading-6 text-gray-900">
              Муддат тури
            </label>
            <select
              class="block w-full px-2 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6">
              <option>Барчаси</option>
              <option>Шартнома</option>
              <option>Ишончнома</option>
              <option>Далолатнома</option>
            </select>
          </div>
          <div>
            <label class="text-sm font-medium leading-6 text-gray-900">
              Саналар бўйича
            </label>
            <input type="date"
              class="block w-full rounded-md py-1.5 px-2 text-gray-900 shadow-sm border border-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
          </div>
          <div>
            <label class="text-sm font-medium leading-6 text-gray-900">
              Бошланғич сана
            </label>
            <input type="date"
              class="block w-full rounded-md py-1.5 px-2 text-gray-900 shadow-sm border border-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
          </div>
          <div>
            <label class="text-sm font-medium leading-6 text-gray-900">
              Тугатиш санаси
            </label>
            <input type="date"
              class="block w-full rounded-md py-1.5 px-2 text-gray-900 shadow-sm border border-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
          </div>
          <div class="flex items-center space-x-3">
            <input id="comments" type="checkbox"
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600">
            <label for="comments" class="text-sm font-medium leading-6 text-gray-900 cursor-pointer">
              Бўлим ходимлари
            </label>
          </div>
        </div>
        <div class="flex items-center justify-end py-2 space-x-4">
          <button
            class="flex items-center justify-center px-3 py-1.5 space-x-1 text-sm bg-blue-500 font-normal leading-6 text-white border border-blue-300 rounded-md hover:bg-blue-600">
            <SearchIcon class="w-5 h-5" />
            <span>Кидириш</span>
          </button>
          <button type="button"
            class="flex items-center justify-center px-3 py-1.5 space-x-1 text-sm font-normal leading-6 text-red-500 border border-red-300 rounded-md hover:bg-red-100">
            <TrashBinTrashOutlineIcon class="w-5 h-5" />
            <span>Тозалаш</span>
          </button>
        </div>
      </div>

      <div class="overflow-auto border border-gray-200 rounded shadow">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="font-medium bg-gray-50">
            <tr>
              <th scope="col" class="px-4 py-3 text-sm leading-4 tracking-wider text-left text-gray-500">
                F.I.Sh
              </th>
              <th scope="col" class="px-4 py-3 text-sm leading-4 tracking-wider text-center text-gray-500">
                Топшириқлар сони
              </th>
              <th scope="col" class="px-4 py-3 text-sm leading-4 tracking-wider text-center text-gray-500">
                Бажарилган
              </th>
              <th scope="col" class="px-4 py-3 text-sm leading-4 tracking-wider text-center text-gray-500">
                Бажарилмокда
              </th>
              <th scope="col" class="px-4 py-3 text-sm leading-4 tracking-wider text-center text-gray-500">
                Тасдиклашда
              </th>
              <th scope="col" class="px-4 py-3 text-sm leading-4 tracking-wider text-center text-gray-500">
                Бажарилган
              </th>
              <th scope="col" class="px-4 py-3 text-sm leading-4 tracking-wider text-center text-gray-500">
                Муддати кеч бажарилган
              </th>
              <th scope="col" class="px-4 py-3 text-sm leading-4 tracking-wider text-center text-gray-500">
                Рад етилган
              </th>
              <th scope="col" class="px-4 py-3 text-sm leading-4 tracking-wider text-center text-gray-500">
                Қайта назоратга олинган
              </th>
              <th scope="col" class="px-4 py-3 text-sm leading-4 tracking-wider text-center text-gray-500">
                Топширилмаган топшириклар
              </th>
            </tr>
          </thead>
          <tbody class="font-medium bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-4 py-4 text-sm leading-5 text-gray-900 whitespace-nowrap">
                Jumaniyozov SurojIddin
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
            </tr>
            <tr>
              <td class="px-4 py-4 text-sm leading-5 text-gray-900">
                Yuldashev Bekturdi
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
            </tr>
            <tr>
              <td class="px-4 py-4 text-sm leading-5 text-gray-900">
                Rahmatov Maftunbek
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
            </tr>
            <tr>
              <td class="px-4 py-4 text-sm leading-5 text-gray-900">
                Rahmatov Maftunbek
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
            </tr>
            <tr>
              <td class="px-4 py-4 text-sm leading-5 text-gray-900">
                Rahmatov Maftunbek
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
            </tr>
            <tr>
              <td class="px-4 py-4 text-sm leading-5 text-gray-900">
                Rahmatov Maftunbek
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
            </tr>
            <tr>
              <td class="px-4 py-4 text-sm leading-5 text-gray-900">
                Rahmatov Maftunbek
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
              <td class="px-4 py-4 text-sm leading-5 text-center text-gray-900">
                0
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped></style>