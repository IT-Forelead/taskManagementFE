<script setup>
import AddCircleOutlineIcon from '../assets/icons/AddCircleOutlineIcon.vue'
import UserPlusBrokenIcon from '../assets/icons/UserPlusBrokenIcon.vue'
import UserCheckBrokenIcon from '../assets/icons/UserCheckBrokenIcon.vue'
import TrashBinTrashOutlineIcon from '../assets/icons/TrashBinTrashOutlineIcon.vue'
import SpinnerIcon from '../assets/icons/SpinnerIcon.vue'
import PaperclipOutlineIcon from '../assets/icons/PaperclipOutlineIcon.vue'
import CheckCircleOutlineIcon from '../assets/icons/CheckCircleOutlineIcon.vue'
import DownloadSquareOutlineIcon from '../assets/icons/DownloadSquareOutlineIcon.vue'
import FileCheckOutlineIcon from '../assets/icons/FileCheckOutlineIcon.vue'
import { useModalStore } from '../stores/modal.store'
import { useMultipleSelectStore } from '../stores/multipleSelect.store'
import { useUploadStore } from '../stores/upload.store'
import { computed, reactive, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import { cleanObjectEmptyFields } from '../helpers/cleanEmptyFields'
import UploadService from '../services/upload.service'
import TaskService from '../services/task.service'

const isLoading = ref(false)

const submitForm = reactive({
    title: '',
    filename: '',
    dueDate: '',
    description: '',
})

const clearForm = () => {
    submitForm.title = ''
    submitForm.filename = ''
    submitForm.dueDate = ''
    submitForm.description = ''
}

const closeData = () => {
    useMultipleSelectStore().clearStore()
    deleteFile()
    clearForm()
}

const assetId = computed(() => {
    return useUploadStore().assetId
})

const selectedAsset = computed(() => {
    return useUploadStore().selectedAsset
})

watch(
    () => assetId.value,
    (data) => {
        if (data) {
            UploadService.getUploadedFile(data).then((res) => {
                useUploadStore().setSelectedAsset(res)
            })
        }
    }
)

const deleteFile = () => {
    useUploadStore().setAssetId('')
    useUploadStore().setSelectedAsset({})
}

const submitData = () => {
    if (!submitForm.title) {
        toast.error("Илтимос, топшириқ номини киритинг!")
    } else if (!submitForm.dueDate) {
        toast.error("Илтимос, бажарилиш муддатини киритинг!")
    } else if (!submitForm.description) {
        toast.error("Илтимос, топшириқ мазмунини киритинг!")
    } else {
        isLoading.value = true
        TaskService.createTask(
            cleanObjectEmptyFields({
                title: submitForm.title,
                assetId: assetId.value,
                dueDate: submitForm.dueDate,
                assigned: useMultipleSelectStore().selectedExecuters.length === 0 ? '' : useMultipleSelectStore().selectedExecuters.map((executer) => executer?.id),
                description: submitForm.description
            })
        ).then(() => {
            toast.success("Топшириқ муваффақиятли қўшилди!")
            isLoading.value = false
            closeData();
        }).catch((err) => {
            toast.error("Топшириқ қўшишда хатолик юз берди!")
            isLoading.value = false
        })
    }
}

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
                <div class="grid max-w-5xl grid-cols-1 pb-8 border-b gap-x-6 gap-y-4 sm:grid-cols-4 border-gray-900/10">
                    <div class="sm:col-span-2">
                        <label for="title" class="block mb-1 text-sm font-medium leading-6 text-gray-900">
                            Топшириқ номи
                        </label>
                        <input v-model="submitForm.title" id="title" type="text"
                            class="block w-full rounded-md py-1.5 px-2 text-gray-900 shadow-sm border border-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            placeholder="Топшириқ номини киритинг">
                    </div>
                    <div class="sm:col-span-2">
                        <label for="due-date" class="block mb-1 text-sm font-medium leading-6 text-gray-900">
                            Бажариш муддати
                        </label>
                        <input v-model="submitForm.dueDate" id="due-date" type="date"
                            class="block w-full rounded-md py-1.5 px-2 text-gray-900 shadow-sm border border-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                    </div>
                    <div class="col-span-full">
                        <label for="about" class="block text-sm font-medium leading-6 text-gray-900">
                            Топшириқ мазмуни
                        </label>
                        <textarea v-model="submitForm.description" id="about" rows="6"
                            class="block w-full rounded-md border px-2 py-1.5 text-gray-900 shadow-sm border-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"></textarea>
                    </div>
                    <div v-if="selectedAsset?.url && assetId" class="sm:col-span-full">
                        <div
                            class="flex items-center justify-between w-full max-w-lg px-3 py-2 space-x-4 border border-gray-300 rounded-md shadow-sm">
                            <div class="flex items-center space-x-4">
                                <div class="flex items-center justify-center w-12 h-12 rounded-md bg-rose-500">
                                    <FileCheckOutlineIcon class="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div class="text-sm leading-6 text-blue-600">
                                        Бириктирилган файл
                                    </div>
                                    <p class="text-xs leading-5 text-gray-600">
                                        Файл тури:
                                        <span class="ml-1 font-medium uppercase">
                                            {{ selectedAsset?.extension }}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-center space-x-2">
                                <a :href="selectedAsset?.url"
                                    class="text-indigo-500 transform cursor-pointer hover:text-indigo-500 hover:scale-110">
                                    <DownloadSquareOutlineIcon class="w-6 h-6" />
                                </a>
                                <div @click="deleteFile()"
                                    class="text-red-500 transform cursor-pointer hover:text-red-500 hover:scale-110">
                                    <TrashBinTrashOutlineIcon class="w-6 h-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="flex items-start space-x-2 sm:col-span-2">
                        <div class="block mb-1 text-sm font-medium leading-6 text-gray-900">
                            Ерлиқлар
                        </div>
                        <AddCircleOutlineIcon class="text-blue-500 w-7 h-7" />
                    </div> -->
                    <div v-if="useMultipleSelectStore().selectedExecuters.length > 0" class="sm:col-span-2">
                        <div class="block text-sm font-medium leading-6 text-gray-900">
                            Ижрочилар
                        </div>
                        <div class="divide-y divide-gray-100">
                            <div v-for="(executor, idx) in useMultipleSelectStore().selectedExecuters" :key="idx"
                                class="flex items-center p-2 space-x-2 cursor-pointer hover:bg-gray-100">
                                <div
                                    class="flex items-center justify-center w-8 h-8 p-2 text-sm uppercase bg-blue-200 rounded-full">
                                    {{ executor?.firstname.charAt(0) + executor?.lastname.charAt(0) }}
                                </div>
                                <span class="text-base capitalize">
                                    {{ executor?.firstname + ' ' + executor?.lastname }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="hidden sm:col-span-2">
                        <div class="block text-sm font-medium leading-6 text-gray-900">
                            Назоратчилар
                        </div>
                        <div class="divide-y divide-gray-100">
                            <div class="flex items-center p-2 space-x-2 cursor-pointer hover:bg-gray-100">
                                <div
                                    class="flex items-center justify-center w-8 h-8 p-2 text-sm uppercase bg-blue-200 rounded-full">
                                    JS
                                </div>
                                <span class="text-base capitalize">
                                    Jumaniyozov Suroj
                                </span>
                            </div>
                            <div class="flex items-center p-2 space-x-2 cursor-pointer hover:bg-gray-100">
                                <div
                                    class="flex items-center justify-center w-8 h-8 p-2 text-sm uppercase bg-blue-200 rounded-full">
                                    JS
                                </div>
                                <span class="text-base capitalize">
                                    Jumaniyozov Suroj
                                </span>
                            </div>
                            <div class="flex items-center p-2 space-x-2 cursor-pointer hover:bg-gray-100">
                                <div
                                    class="flex items-center justify-center w-8 h-8 p-2 text-sm uppercase bg-blue-200 rounded-full">
                                    JS
                                </div>
                                <span class="text-base capitalize">
                                    Jumaniyozov Suroj
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-between mt-6 gap-x-6">
                    <div class="flex items-center space-x-4">
                        <button @click="useModalStore().openAddExecutorModal()"
                            class="flex items-center justify-center px-3 py-1.5 space-x-1 text-sm font-normal leading-6 text-green-600 border border-green-300 rounded-md hover:bg-green-100">
                            <UserPlusBrokenIcon class="w-5 h-5" />
                            <span>Ижрочи қўшиш</span>
                        </button>
                        <!-- <button
                            class="flex items-center justify-center px-3 py-1.5 space-x-1 text-sm font-normal leading-6 text-blue-600 border border-blue-300 rounded-md hover:bg-blue-100">
                            <UserCheckBrokenIcon class="w-5 h-5" />
                            <span>Назоратчи қўшиш</span>
                        </button> -->
                        <div @click="useModalStore().openAddFileModal()"
                            class="flex items-center justify-center space-x-1 px-3 py-1.5 font-medium text-indigo-500 bg-white rounded-md cursor-pointer hover:bg-indigo-100">
                            <PaperclipOutlineIcon class="w-5 h-5" />
                            <span>Файл бириктириш</span>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <button v-if="!isLoading" @click="submitData()" type="button"
                            class="flex items-center justify-center px-3 py-1.5 space-x-1 text-sm bg-green-500 font-normal leading-6 text-white border border-green-300 rounded-md hover:bg-green-600">
                            <CheckCircleOutlineIcon class="w-5 h-5" />
                            <span>Сақлаш</span>
                        </button>
                        <button v-else type="button"
                            class="flex items-center justify-center px-3 py-1.5 space-x-1 text-sm bg-green-600 font-normal leading-6 cursor-default text-white border border-green-300 rounded-md">
                            <SpinnerIcon class="w-5 h-5" />
                            <span>Сақлаш</span>
                        </button>
                        <button @click="closeData()" type="button"
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