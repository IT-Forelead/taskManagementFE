<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
    <div class="bg-white border-b border-gray-200 rounded shadow">
        <ul class="flex flex-wrap">
            <li v-if="router.currentRoute.value.path === '/tasks/report'"
                class="flex items-center justify-center px-6 py-4 text-blue-600 border-b-2 border-blue-600">
                Ҳисобот
            </li>
            <li v-else>
                <router-link to="/tasks/report">
                    <div
                        class="flex items-center justify-center px-6 py-4 text-blue-600 border-b-2 border-transparent hover:border-blue-600">
                        Ҳисобот
                    </div>
                </router-link>
            </li>
            <li v-if="router.currentRoute.value.path === '/tasks/recontrol'"
                class="flex items-center justify-center px-6 py-4 text-green-600 border-b-2 border-green-500">
                Қайта назоратга олинган
            </li>
            <li v-else>
                <router-link to="/tasks/recontrol">
                    <div
                        class="flex items-center justify-center px-6 py-4 text-green-600 border-b-2 border-transparent hover:border-green-600">
                        Қайта назоратга олинган
                    </div>
                </router-link>
            </li>
            <li v-if="router.currentRoute.value.path === '/tasks/assignments'"
                class="flex items-center justify-center px-6 py-4 text-indigo-600 border-b-2 border-indigo-500">
                Топшириқлар
            </li>
            <li v-else>
                <router-link to="/tasks/assignments">
                    <div
                        class="flex items-center justify-center px-6 py-4 text-indigo-600 border-b-2 border-transparent hover:border-indigo-500">
                        Топшириқлар
                    </div>
                </router-link>
            </li>

            <li v-if="router.currentRoute.value.path === '/tasks/answers-given'"
                class="inline-flex items-center justify-center px-6 py-4 text-yellow-600 border-b-2 border-yellow-500">
                Берилган жавоблар
            </li>
            <li v-else>
                <router-link to="/tasks/answers-given">
                    <div
                        class="inline-flex items-center justify-center px-6 py-4 text-yellow-600 border-b-2 border-transparent hover:border-yellow-500">
                        Берилган жавоблар
                    </div>
                </router-link>
            </li>

            <li v-if="router.currentRoute.value.path === '/tasks/not-accepted'"
                class="inline-flex items-center justify-center px-6 py-4 text-red-600 border-b-2 border-red-500">
                Қабул қилинмаганлар
            </li>
            <li v-else>
                <router-link to="/tasks/not-accepted">
                    <div
                        class="inline-flex items-center justify-center px-6 py-4 text-red-600 border-b-2 border-transparent hover:border-red-500">
                        Қабул қилинмаганлар
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>