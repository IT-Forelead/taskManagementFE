<script setup>
import TaskTabMenu from '../components/tasks/TaskTabMenu.vue'
import TaskCountReport from '../components/tasks/TaskCountReport.vue'
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
        </div>
    </div>
</template>

<style scoped></style>