<script setup>
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
import BellOutlineIcon from '../../assets/icons/BellOutlineIcon.vue'
import { useDropdownStore } from '../../stores/dropdown.store'

const dropdown = ref(null)

onClickOutside(dropdown, () => {
    if (useDropdownStore().isOpenNotificationDropdown) {
        useDropdownStore().toggleNotificationDropdown()
    }
})
</script>

<template>
    <div class="relative" ref="dropdown">
        <div @click="useDropdownStore().toggleNotificationDropdown()"
            class="flex items-center space-x-2 text-gray-800 cursor-pointer hover:text-blue-800">
            <BellOutlineIcon class="w-5 h-5" />
        </div>
        <div v-if="useDropdownStore().isOpenNotificationDropdown"
            class="absolute right-0 z-50 flex flex-col items-center justify-center h-40 p-3 space-y-2 bg-white shadow top-9 w-80 rounded-b-md">
            <div class="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full shadow">
                <BellOutlineIcon class="w-10 h-10 text-gray-500" />
            </div>
            <div class="text-base text-gray-700">Билдиришномалар мавжуд эмас</div>
        </div>
    </div>
</template>

<style scoped></style>