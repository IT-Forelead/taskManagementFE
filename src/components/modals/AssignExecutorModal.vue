<script setup>
import { useModalStore } from '../../stores/modal.store'
import { useTaskStore } from '../../stores/task.store'
import { useMultipleSelectStore } from '../../stores/multipleSelect.store'
import { useUserStore } from '../../stores/user.store'
import { useDropdownStore } from '../../stores/dropdown.store'
import SpinnerIcon from '../../assets/icons/SpinnerIcon.vue'
import XIcon from '../../assets/icons/XIcon.vue'
import UserOutlineIcon from '../../assets/icons/UserOutlineIcon.vue'
import ChevronRightRoundedIcon from '../../assets/icons/ChevronRightRoundedIcon.vue'
import CheckCircleOutlineIcon from '../../assets/icons/CheckCircleOutlineIcon.vue'
import { computed, onMounted, ref, reactive } from 'vue'
import TaskService from '../../services/task.service'
import UserService from '../../services/user.service'
import { toast } from 'vue-sonner'

const users = computed(() => {
    return useUserStore().users
})

const taskId = computed(() => {
    return useTaskStore().selectedTaskId
})

const isLoading = ref(false)

const taskForm = reactive({
    userId: ''
})

const clearForm = () => {
    taskForm.userId = ''
}

const closeModal = () => {
    useModalStore().closeAssignExecutorModal()
    clearForm()
}

const updateTask = () => {
    TaskService.updateTask(
        taskId.value,
        { userIds: [taskForm.userId] }
    ).then(() => {
        toast.success("Successfully updated task")
        isLoading.value = false
        TaskService.getTasks({})
            .then((res) => {
                useTaskStore().clearStore()
                setTimeout(() => {
                    useTaskStore().setTasks(res)
                }, 500)
            })
            .catch(() => {
                toast.error("Error while geting tasks!")
            })
        closeModal();
    }).catch((err) => {
        toast.error("Error updating task")
        isLoading.value = false
    })
}

const submitData = () => {
    isLoading.value = true
    updateTask()
}

const getUsers = async () => {
    UserService.getUsers({})
        .then((result) => {
            useUserStore().clearStore()
            useUserStore().setUsers(result)
        })
        .catch(() => {
            toast.error('Error while getting response')
        })
}

onMounted(() => {
    getUsers()
})
</script>
<template>
    <div v-if="useModalStore().isOpenAssignExecutorModal"
        class="fixed top-0 left-0 right-0 z-50 w-full max-h-screen overflow-x-hidden overflow-y-auto backdrop-blur bg-gray-900/75 md:inset-0 md:h-full">
        <div class="relative w-full h-full max-w-xl p-4 -translate-x-1/2 -translate-y-1/2 md:h-auto left-1/2 top-1/2">
            <div class="relative p-4 bg-white border rounded-lg shadow">
                <div class="flex items-center justify-between pb-4 mb-4 border-b border-gray-200">
                    <h1 class="flex items-center text-xl font-semibold">Ижрочини танлаш</h1>
                    <button @click="closeModal()"
                        class="text-gray-600 bg-gray-50 hover:bg-gray-100 transition-all duration-300 rounded-full text-sm p-1.5 inline-flex items-center">
                        <XIcon />
                    </button>
                </div>
                <div class="space-y-3">
                    <div>
                        <label class="mb-1 text-sm font-medium leading-6 text-gray-900">
                            Ижрочилар
                        </label>
                        <div @click="useDropdownStore().openAssignExecutorDropDown()"
                            class="relative flex items-center w-full px-2 py-1.5 bg-white border border-gray-300 rounded">
                            <div class="flex items-center justify-center cursor-pointer">
                                <UserOutlineIcon class="w-5 h-5" />
                            </div>
                            <!-- <diChevronRightRoundedIconv class="w-full pl-2 capitalize border-none cursor-pointer sm:text-sm sm:leading-6">
                                Jumaniyozov Suroj, Rahmatov Maftunbek, Yuldashev Bekturdi
                            </diChevronRightRoundedIconv> -->
                            <div class="w-full pl-2 text-gray-400 border-none cursor-pointer sm:text-sm sm:leading-6">
                                Ижрочиларни танланг
                            </div>
                            <ChevronRightRoundedIcon
                                class="absolute z-10 w-4 h-4 text-gray-900 rotate-90 cursor-pointer right-2" />
                            <!-- <XIcon class="absolute z-10 w-5 h-5 p-1 text-gray-900 rounded-full cursor-pointer right-2 hover:bg-gray-100" /> -->
                        </div>
                        <div v-if="useDropdownStore().isOpenAssignExecutorDropdown" class="w-full my-2 overflow-auto divide-y divide-gray-200 max-h-60">
                            <div v-for="(user, idx) in users" :key="idx"
                                class="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-100">
                                <div class="flex items-center justify-center space-x-2">
                                    <div
                                        class="flex items-center justify-center w-8 h-8 p-2 text-sm uppercase bg-blue-200 rounded-full">
                                        {{ user?.firstname.charAt(0) + user?.lastname.charAt(0) }}
                                    </div>
                                    <span class="text-base capitalize">
                                        {{ user?.firstname + ' ' + user?.lastname }}
                                    </span>
                                </div>
                                <!-- <CheckCircleOutlineIcon class="w-5 h-5 text-green-600" /> -->
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-end mt-6 gap-x-4">
                    <button @click="closeModal()" class="flex justify-center px-3 py-1.5 text-sm bg-transparent font-normal leading-6 text-gray-900 rounded-md hover:bg-gray-100">
                        Бекор қилиш
                    </button>
                    <button v-if="!isLoading" @click="submitData()"
                        class="flex items-center justify-center px-3 py-1.5 space-x-1 text-sm bg-indigo-600 font-normal leading-6 text-white border border-indigo-300 rounded-md hover:bg-indigo-700">
                        <CheckCircleOutlineIcon class="w-5 h-5" />
                        <span>Сақлаш</span>
                    </button>
                    <button v-else
                        class="flex items-center justify-center px-3 py-1.5 space-x-1 text-sm bg-indigo-700 cursor-default font-normal leading-6 text-white border border-indigo-300 rounded-md">
                        <SpinnerIcon class="w-5 h-5" />
                        <span>Сақлаш</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>