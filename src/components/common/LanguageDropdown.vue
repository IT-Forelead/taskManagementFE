<script setup>
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
import GlobalOutlineIcon from '../../assets/icons/GlobalOutlineIcon.vue'
import UzCircleFlagIcon from '../../assets/icons/UzCircleFlagIcon.vue'
import RuCircleFlagIcon from '../../assets/icons/RuCircleFlagIcon.vue'
import EnCircleFlagIcon from '../../assets/icons/EnCircleFlagIcon.vue'
import { useDropdownStore } from '../../stores/dropdown.store'

const dropdown = ref(null)

onClickOutside(dropdown, () => {
    if (useDropdownStore().isOpenLanguageDropdown) {
        useDropdownStore().toggleLanguageDropdown()
    }
})
</script>
<template>
    <div class="relative" ref="dropdown">
        <div @click="useDropdownStore().toggleLanguageDropdown()"
            class="flex items-center justify-center px-3 py-1.5 space-x-2 text-gray-800 cursor-pointer rounded-md hover:bg-gray-100 hover:text-blue-800">
            <GlobalOutlineIcon class="w-5 h-5" />
            <span class="text-base">Ўзбекча</span>
        </div>
        <ul v-if="useDropdownStore().isOpenLanguageDropdown"
            class="absolute right-0 z-20 bg-white divide-y divide-gray-200 shadow w-36 rounded-b-md top-9">
            <li class="flex items-center p-2 space-x-2 cursor-pointer hover:bg-gray-200">
                <UzCircleFlagIcon class="w-5 h-5" />
                <span>Ўзбекча</span>
            </li>
            <li class="flex items-center p-2 space-x-2 cursor-pointer hover:bg-gray-200">
                <UzCircleFlagIcon class="w-5 h-5" />
                <span>O'zbek</span>
            </li>
            <li class="flex items-center p-2 space-x-2 cursor-pointer hover:bg-gray-200">
                <EnCircleFlagIcon class="w-5 h-5" />
                <span>English</span>
            </li>
            <li class="flex items-center p-2 space-x-2 cursor-pointer hover:bg-gray-200">
                <RuCircleFlagIcon class="w-5 h-5" />
                <span>Русский</span>
            </li>
        </ul>
    </div>
</template>
<style scoped></style>