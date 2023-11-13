<script setup>
import { computed, onMounted } from 'vue'
import TaskService from '../../services/task.service'
import { useTaskStore } from '../../stores/task.store'

const tasksCounts = computed(() => {
    return useTaskStore().tasksCounts
})

const getTasksCounts = () => {
    TaskService.getTasksCounts()
        .then((result) => {
            useTaskStore().setTasksCounts(result)
        })
        .catch(() => {
            toast.error("Error while getting response")
        })
}

onMounted(() => {
    getTasksCounts()
})
</script>

<template>
    <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
        <div class="flex items-center justify-between p-4 bg-white rounded shadow">
            <div class="text-base text-gray-900">Барча топшириқлар</div>
            <div class="text-lg font-medium text-blue-600">
                {{ tasksCounts?.count }}
            </div>
        </div>
        <div class="flex items-center justify-between p-4 bg-white rounded shadow">
            <div class="text-base text-gray-900">Бажарилмоқда</div>
            <div class="text-lg font-medium text-orange-600">0</div>
        </div>
        <div class="flex items-center justify-between p-4 bg-white rounded shadow">
            <div class="text-base text-gray-900">Бажарилган</div>
            <div class="text-lg font-medium text-green-600">0</div>
        </div>
        <div class="flex items-center justify-between p-4 bg-white rounded shadow">
            <div class="text-base text-gray-900">Бажарилмаган</div>
            <div class="text-lg font-medium text-red-500">
                {{ tasksCounts?.new }}
            </div>
        </div>
        <div class="flex items-center justify-between p-4 bg-white rounded shadow">
            <div class="text-base text-gray-900">Муддатидан кеч бажарилган</div>
            <div class="text-lg font-medium text-indigo-600">0</div>
        </div>
        <div class="flex items-center justify-between p-4 bg-white rounded shadow">
            <div class="text-base text-gray-900">Қайта назоратга олинган</div>
            <div class="text-lg font-medium text-yellow-600">0</div>
        </div>
        <div class="flex items-center justify-between p-4 bg-white rounded shadow">
            <div class="text-base text-gray-900">Берилган жавоблар</div>
            <div class="text-lg font-medium text-green-600">0</div>
        </div>
        <div class="flex items-center justify-between p-4 bg-white rounded shadow">
            <div class="text-base text-gray-900">Қабул қилинмаганлар</div>
            <div class="text-lg font-medium text-red-600">0</div>
        </div>
    </div>
</template>

<style scoped></style>