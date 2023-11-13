<script setup>
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import LogoutOutlineIcon from '../../assets/icons/LogoutOutlineIcon.vue'
import SettingsOutlineIcon from '../../assets/icons/SettingsOutlineIcon.vue'
import UserIdOutlineIcon from '../../assets/icons/UserIdOutlineIcon.vue'
import UserOutlineIcon from '../../assets/icons/UserOutlineIcon.vue'
import { useAuthStore } from '../../stores/auth.store'
import { useUserStore } from '../../stores/user.store'
import { useDropdownStore } from '../../stores/dropdown.store'
import { onMounted } from 'vue';
import decodeJwt from '../../helpers/utils';

const { user, logout } = useAuthStore();
const dropdown = ref(null)

const router = useRouter()

onClickOutside(dropdown, () => {
    if (useDropdownStore().isOpenProfileDropdown) {
        useDropdownStore().toggleProfileDropdown()
    }
})

const signOut = () => {
    logout()
    router.push('/')
    if (useDropdownStore().isOpenProfileDropdown) {
        useDropdownStore().toggleProfileDropdown()
    }
}
onMounted(() => {
  useUserStore().setUser(decodeJwt(JSON.parse(localStorage.getItem('session'))?.accessToken))
})
</script>
<template>
    <div class="relative" ref="dropdown">
        <div @click="useDropdownStore().toggleProfileDropdown()"
            class="flex items-center justify-center px-3 py-1.5 space-x-2 text-gray-800 cursor-pointer rounded-md hover:bg-gray-100 hover:text-blue-800">
            <UserIdOutlineIcon class="w-6 h-6" />
            <span class="text-base capitalize">{{ useUserStore().user?.User?.firstname.charAt(0) + '. ' + useUserStore().user?.User?.lastname }}</span>
        </div>
        <ul v-if="useDropdownStore().isOpenProfileDropdown"
            class="absolute right-0 z-20 bg-white divide-y divide-gray-200 shadow w-60 rounded-b-md top-9">
            <li class="flex items-center p-2 space-x-2 cursor-pointer hover:bg-gray-200">
                <UserOutlineIcon class="w-5 h-5" />
                <span>Профиль</span>
            </li>
            <li class="flex items-center p-2 space-x-2 cursor-pointer hover:bg-gray-200">
                <SettingsOutlineIcon class="w-5 h-5" />
                <span>Созламалар</span>
            </li>
            <li @click="signOut()" class="flex items-center p-2 space-x-2 cursor-pointer hover:bg-gray-200">
                <LogoutOutlineIcon class="w-5 h-5" />
                <span>Чиқиш</span>
            </li>
        </ul>
    </div>
</template>
<style scoped></style>
