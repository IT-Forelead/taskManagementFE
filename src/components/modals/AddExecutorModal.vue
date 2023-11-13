<script setup>
import { useModalStore } from '../../stores/modal.store'
import { useMultipleSelectStore } from '../../stores/multipleSelect.store'
import { useUserStore } from '../../stores/user.store'
import { useDropdownStore } from '../../stores/dropdown.store'
import XIcon from '../../assets/icons/XIcon.vue'
import CheckCircleOutlineIcon from '../../assets/icons/CheckCircleOutlineIcon.vue'
import { computed, onMounted } from 'vue'
import MultipleSelectExecuterItem from '../items/MultipleSelectExecuterItem.vue'
import UserService from '../../services/user.service'
import { cleanObjectEmptyFields } from '../../helpers/cleanEmptyFields'
import { toast } from 'vue-sonner'

const users = computed(() => {
    return useUserStore().users
})

const closeModal = () => {
    useMultipleSelectStore().clearStore()
    useModalStore().closeAddExecutorModal()
}

const getUsers = async () => {
    UserService.getUsers(
        
        cleanObjectEmptyFields({
            roles: ['executor']
        })
    ).then((result) => {
        useUserStore().clearStore()
        useUserStore().setUsers(result)
    })
    .catch(() => {
        toast.error('Error while getting response')
    })
}

onMounted(() => {
    useMultipleSelectStore().clearStore()
    getUsers()
})
</script>
<template>
    <div v-if="useModalStore().isOpenAddExecutorModal"
        class="fixed top-0 left-0 right-0 z-50 w-full max-h-screen overflow-x-hidden overflow-y-auto backdrop-blur bg-gray-900/75 md:inset-0 md:h-full">
        <div class="relative w-full h-full max-w-xl p-4 -translate-x-1/2 -translate-y-1/2 md:h-auto left-1/2 top-1/2">
            <div class="relative p-4 bg-white border rounded-lg shadow">
                <div class="flex items-center justify-between pb-4 mb-4 border-b border-gray-200">
                    <h1 class="flex items-center text-xl font-semibold">Ижрочи қўшиш</h1>
                    <button @click="closeModal()"
                        class="text-gray-600 bg-gray-50 hover:bg-gray-100 transition-all duration-300 rounded-full text-sm p-1.5 inline-flex items-center">
                        <XIcon />
                    </button>
                </div>
                <div class="pb-6 space-y-3 border-b border-gray-300">
                    <div>
                        <label class="mb-1 text-sm font-medium leading-6 text-gray-900">
                            Ижрочилар
                        </label>
                        <MultipleSelectExecuterItem :id="'users'" :options="users" />
                    </div>
                </div>
                <div class="flex items-center justify-end pt-4 gap-x-4">
                    <button @click="closeModal()"
                        class="flex justify-center px-3 py-1.5 text-sm bg-transparent font-normal leading-6 text-gray-900 rounded-md hover:bg-gray-100">
                        Бекор қилиш
                    </button>
                    <button @click="useModalStore().closeAddExecutorModal()"
                        class="flex items-center justify-center px-3 py-1.5 space-x-1 text-sm bg-indigo-600 font-normal leading-6 text-white border border-indigo-300 rounded-md hover:bg-indigo-700">
                        <CheckCircleOutlineIcon class="w-5 h-5" />
                        <span>Сақлаш</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>