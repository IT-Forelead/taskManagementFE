<script setup>
import AddCircleOutlineIcon from '../assets/icons/AddCircleOutlineIcon.vue'
import UserPlusBrokenIcon from '../assets/icons/UserPlusBrokenIcon.vue'
import UserCheckBrokenIcon from '../assets/icons/UserCheckBrokenIcon.vue'
import TrashBinTrashOutlineIcon from '../assets/icons/TrashBinTrashOutlineIcon.vue'
import PaperclipOutlineIcon from '../assets/icons/PaperclipOutlineIcon.vue'
import CheckCircleOutlineIcon from '../assets/icons/CheckCircleOutlineIcon.vue'

</script>

<template>
    <div class="container mx-auto">
        <div class="space-y-8">
            <div>
                <h2 class="text-base font-semibold leading-7 text-gray-900">
                    Шахсий топшириқ яратиш
                </h2>
                <p class="text-sm leading-6 text-gray-600">
                    Шахсий топшириқларни яратиш ва уларга ижрочиларни белгилаш
                </p>
            </div>

            <div class="p-4 bg-white rounded shadow">
                <div class="grid grid-cols-1 pb-8 border-b gap-x-6 gap-y-4 sm:grid-cols-6 border-gray-900/10">
                    <div class="sm:col-span-2">
                        <label for="dueDate" class="block mb-1 text-sm font-medium leading-6 text-gray-900">
                            Бажариш муддати
                        </label>
                        <input id="due-date" type="date"
                            class="block w-full rounded-md py-1.5 px-2 text-gray-900 shadow-sm border border-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                    </div>
                    <div class="col-span-full">
                        <label for="about" class="block text-sm font-medium leading-6 text-gray-900">
                            Топшириқ мазмуни
                        </label>
                        <textarea id="about" rows="6"
                            class="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm border-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"></textarea>
                    </div>
                    <div class="flex items-start space-x-2 sm:col-span-2">
                        <div class="block mb-1 text-sm font-medium leading-6 text-gray-900">
                            Ерлиқлар
                        </div>
                        <AddCircleOutlineIcon class="text-blue-500 w-7 h-7" />
                    </div>
                </div>

                <div class="flex items-center justify-between mt-6 gap-x-6">
                    <div class="flex items-center space-x-4">
                        <button
                            class="flex items-center justify-center px-3 py-1.5 space-x-1 text-sm font-normal leading-6 text-green-600 border border-green-300 rounded-md hover:bg-green-100">
                            <UserPlusBrokenIcon class="w-5 h-5" />
                            <span>Ижрочи қўшиш</span>
                        </button>
                        <button
                            class="flex items-center justify-center px-3 py-1.5 space-x-1 text-sm font-normal leading-6 text-blue-600 border border-blue-300 rounded-md hover:bg-blue-100">
                            <UserCheckBrokenIcon class="w-5 h-5" />
                            <span>Назоратчи қўшиш</span>
                        </button>
                        <label for="file-upload"
                            class="flex items-center justify-center space-x-1 px-3 py-1.5 font-medium text-indigo-500 bg-white rounded-md cursor-pointer hover:bg-indigo-100">
                            <PaperclipOutlineIcon class="w-5 h-5" />
                            <span>Файл бириктириш</span>
                            <input id="file-upload" name="file-upload" type="file" class="sr-only">
                        </label>
                    </div>
                    <div class="flex items-center space-x-4">
                        <button
                            class="flex items-center justify-center px-3 py-1.5 space-x-1 text-sm bg-green-500 font-normal leading-6 text-white border border-green-300 rounded-md hover:bg-green-600">
                            <CheckCircleOutlineIcon class="w-5 h-5" />
                            <sapn>Сақлаш</sapn>
                        </button>
                        <button type="button"
                            class="flex items-center justify-center px-3 py-1.5 space-x-1 text-sm font-normal leading-6 text-red-500 border border-red-300 rounded-md hover:bg-red-100">
                            <TrashBinTrashOutlineIcon class="w-5 h-5" />
                            <span>Тозалаш</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>