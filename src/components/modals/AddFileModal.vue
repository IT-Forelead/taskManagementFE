<script setup>
import { useModalStore } from '../../stores/modal.store'
import { useUploadStore } from '../../stores/upload.store'
import SpinnerIcon from '../../assets/icons/SpinnerIcon.vue'
import XIcon from '../../assets/icons/XIcon.vue'
import CheckCircleOutlineIcon from '../../assets/icons/CheckCircleOutlineIcon.vue'
import { ref } from 'vue'
import { toast } from 'vue-sonner'
import UploadService from '../../services/upload.service'

const isLoading = ref(false)
const file = ref('')

function getFile(e) {
    file.value = e.target.files[0]
}

const uploadFile = () => {
    isLoading.value = true
    const formData = new FormData()
    formData.append('file', file.value)
    formData.append('public', false)
    UploadService.upload(formData)
        .then((res) => {
            toast.success("Файлни муваффақиятли қўшилди")
            isLoading.value = false
            useUploadStore().clearStore()
            useUploadStore().setAssetId(res)
            closeModal()
        })
        .catch((err) => {
            toast.error("Файл қўшишда хатолик юз берди!")
            isLoading.value = false
        })
}

const closeModal = () => {
    file.value = ''
    useModalStore().closeAddFileModal()
}

</script>
<template>
    <div v-if="useModalStore().isOpenAddFileModal"
        class="fixed top-0 left-0 right-0 z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full min-h-screen overflow-x-hidden overflow-y-auto backdrop-blur bg-gray-900/75 md:h-full">
        <div class="relative w-full max-w-xl p-4 -translate-x-1/2 -translate-y-1/2 md:h-auto left-1/2 md:top-1/2 top-1/3">
            <div class="relative p-4 bg-white border rounded-lg shadow">
                <div class="flex items-center justify-between pb-4 mb-4 border-b border-gray-200">
                    <h1 class="flex items-center text-xl font-semibold">
                        Файл бириктириш
                    </h1>
                    <button @click="closeModal()"
                        class="text-gray-600 bg-gray-50 hover:bg-gray-100 transition-all duration-300 rounded-full text-sm p-1.5 inline-flex items-center">
                        <XIcon />
                    </button>
                </div>
                <div class="pb-6 space-y-3 border-b border-gray-300">
                    <div>
                        <label for="file" class="mb-1 text-sm font-medium leading-6 text-gray-900">
                            Файлни танланг
                        </label>
                        <input @change="getFile" id="file" type="file"
                            class="block w-full rounded border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
                <div class="flex items-center justify-end pt-4 gap-x-4">
                    <button @click="closeModal()"
                        class="flex justify-center px-3 py-1.5 text-sm bg-transparent font-normal leading-6 text-gray-900 rounded-md hover:bg-gray-100">
                        Бекор қилиш
                    </button>
                    <button v-if="!isLoading" @click="uploadFile()"
                        class="flex items-center justify-center px-3 py-1.5 space-x-1 text-sm bg-indigo-600 font-normal leading-6 text-white border border-indigo-300 rounded-md hover:bg-indigo-700">
                        <CheckCircleOutlineIcon class="w-5 h-5" />
                        <span>Сақлаш</span>
                    </button>
                    <button v-else
                        class="flex items-center justify-center px-3 py-1.5 space-x-1 text-sm bg-indigo-700 font-normal cursor-default leading-6 text-white border border-indigo-300 rounded-md">
                        <SpinnerIcon class="w-5 h-5" />
                        <span>Сақлаш</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>