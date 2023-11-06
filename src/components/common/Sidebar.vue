<script setup>
import { computed, onMounted } from '@vue/runtime-core'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// import decodeJwt, { parseJwt } from '../mixins/utils'
// import { useAuthStore } from '../store/auth.store'
// import { useSidebarStore } from '../store/sidebar.store'
// import ChevronRightIcon from './../assets/icons/ChevronRightIcon.vue'
// import EnvelopeIcon from './../assets/icons/EnvelopeIcon.vue'
// import FolderOpenIcon from './../assets/icons/FolderOpenIcon.vue'
// import FolderUserIcon from './../assets/icons/FolderUserIcon.vue'
// import FootPrintsIcon from './../assets/icons/FootPrintsIcon.vue'
// import HouseIcon from './../assets/icons/HouseIcon.vue'
// import MoneyIcon from './../assets/icons/MoneyIcon.vue'
import BellIcon from '../../assets/icons/BellIcon.vue'
import ChevronRightRoundedIcon from '../../assets/icons/ChevronRightRoundedIcon.vue'
// import UsersThreeIcon from './../assets/icons/UsersThreeIcon.vue'
// import ShoppingCartIcon from './../assets/icons/ShoppingCartIcon.vue'

// const router = useRouter()

// const payload = ref({})

// const isOpen = computed(() => useSidebarStore().isOpenSidebar)
// const isOpenSubMenuForTariffs = computed(() => useSidebarStore().isOpenSubMenuForTariffs)
// const isOpenSubMenuForServices = computed(() => useSidebarStore().isOpenSubMenuForServices)
// const isOpenSubMenuForSales = computed(() => useSidebarStore().isOpenSubMenuForSales)

</script>
<template>
  <div class="fixed z-50 block h-screen text-gray-400 bg-gray-900 w-80">
    <div class="flex items-center justify-center h-20 bg-gray-600">
      <img src="/images/alpha-sport-urgench-logo.png" class="w-auto h-14" alt="#" />
    </div>
    <div class="relative space-y-1 overflow-y-auto py-14 h-5/6">
      <router-link to="/dashboard" active-class="active" class="relative flex items-center w-full h-10 space-x-4 font-medium transition-colors duration-300 cursor-pointer hover:bg-yellow-300/10 hover:text-yellow-200 py-7">
        <div class="w-1.5 h-10 rounded-r-xl first-child-bg-color mr-2"></div>
        <div class="flex items-center justify-center w-10 h-10 rounded-xl second-child-bg-color">
          <BellIcon class="w-6 h-6" />
        </div>
        <div>Dashboard</div>
      </router-link>
      <div class="relative flex items-center justify-between w-full h-10 font-medium transition-colors duration-300 cursor-pointer hover:bg-yellow-300/10 hover:text-yellow-200 py-7">
        <div class="flex items-center space-x-4">
          <div class="w-1.5 h-10 rounded-r-xl mr-2 first-child-bg-color"></div>
          <div class="flex items-center justify-center w-10 h-10 rounded-xl second-child-bg-color">
            <BellIcon class="w-6 h-6" />
          </div>
          <div>Tarifflar</div>
        </div>
        <ChevronRightRoundedIcon class="w-5 h-5 mx-4 text-gray-400 transition-all duration-300" :class="{ 'rotate-90': isOpenSubMenuForTariffs }" />
      </div>
      <div :class="{ hidden: !isOpenSubMenuForTariffs }" class="transition-all duration-300">
        <router-link to="/tariffs" active-class="active" class="flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-yellow-300/10 hover:text-yellow-200 pl-14">
          <div class="flex items-center space-x-2">
            <p>-</p>
            <p>Tarifflar</p>
          </div>
        </router-link>
        <router-link to="/trainer-tariffs" active-class="active" class="flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-yellow-300/10 hover:text-yellow-200 pl-14">
          <div class="flex items-center space-x-2">
            <p>-</p>
            <p>Tarifflar</p>
          </div>
        </router-link>
      </div>
      <div class="relative flex items-center justify-between w-full h-10 font-medium transition-colors duration-300 cursor-pointer hover:bg-yellow-300/10 hover:text-yellow-200 py-7">
        <div class="flex items-center space-x-4">
          <div class="w-1.5 h-10 rounded-r-xl mr-2 first-child-bg-color"></div>
          <div class="flex items-center justify-center w-10 h-10 rounded-xl second-child-bg-color">
            <BellIcon class="w-6 h-6" />
          </div>
          <div>Tarifflar</div>
        </div>
        <ChevronRightRoundedIcon class="w-5 h-5 mx-4 text-gray-400 transition-all duration-300" :class="{ 'rotate-90': isOpenSubMenuForSales }" />
      </div>
      <div :class="{ hidden: !isOpenSubMenuForSales }" class="transition-all duration-300">
        <router-link to="/sales" active-class="active" class="flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-yellow-300/10 hover:text-yellow-200 pl-14">
          <div class="flex items-center space-x-2">
            <p>-</p>
            <p>Xabarlar</p>
          </div>
        </router-link>
        <router-link to="/history-products" active-class="active" class="flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-yellow-300/10 hover:text-yellow-200 pl-14">
          <div class="flex items-center space-x-2">
            <p>-</p>
            <p>Xabarlar</p>
          </div>
        </router-link>
        <router-link to="/products" active-class="active" class="flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-yellow-300/10 hover:text-yellow-200 pl-14">
          <div class="flex items-center space-x-2">
            <p>-</p>
            <p>Xabarlar</p>
          </div>
        </router-link>
      </div>
      <router-link to="/payments" active-class="active" class="relative flex items-center w-full h-10 space-x-4 font-medium transition-colors duration-300 cursor-pointer hover:bg-yellow-300/10 hover:text-yellow-200 py-7">
        <div class="w-1.5 h-10 rounded-r-xl first-child-bg-color mr-2"></div>
        <div class="flex items-center justify-center w-10 h-10 rounded-xl second-child-bg-color">
          <BellIcon class="w-6 h-6" />
        </div>
        <div>Xabarlar</div>
      </router-link>
      <router-link to="/visits" active-class="active" class="relative flex items-center w-full h-10 space-x-4 font-medium transition-colors duration-300 cursor-pointer hover:bg-yellow-300/10 hover:text-yellow-200 py-7">
        <div class="w-1.5 h-10 rounded-r-xl first-child-bg-color mr-2"></div>
        <div class="flex items-center justify-center w-10 h-10 rounded-xl second-child-bg-color">
          <BellIcon class="w-6 h-6" />
        </div>
        <div>Xabarlar</div>
      </router-link>
      <router-link to="/customers" active-class="active" class="relative flex items-center w-full h-10 space-x-4 font-medium transition-colors duration-300 cursor-pointer hover:bg-yellow-300/10 hover:text-yellow-200 py-7">
        <div class="w-1.5 h-10 rounded-r-xl first-child-bg-color mr-2"></div>
        <div class="flex items-center justify-center w-10 h-10 rounded-xl second-child-bg-color">
          <BellIcon class="w-6 h-6" />
        </div>
        <div>Xabarlar</div>
      </router-link>
      <div class="relative flex items-center justify-between w-full h-10 font-medium transition-colors duration-300 cursor-pointer hover:bg-yellow-300/10 hover:text-yellow-200 py-7">
        <div class="flex items-center space-x-4">
          <div class="w-1.5 h-10 rounded-r-xl mr-2 first-child-bg-color"></div>
          <div class="flex items-center justify-center w-10 h-10 rounded-xl second-child-bg-color">
            <BellIcon class="w-6 h-6" />
          </div>
          <div>Xabarlar</div>
        </div>
        <ChevronRightRoundedIcon class="w-5 h-5 mx-4 text-gray-400 transition-all duration-300 rotate-90" />
      </div>
      <div class="transition-all duration-300">
        <router-link to="/services" active-class="active" class="flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-yellow-300/10 hover:text-yellow-200 pl-14">
          <div class="flex items-center space-x-2">
            <p>-</p>
            <p>Xabarlar</p>
          </div>
        </router-link>
        <router-link to="/trainer-services" active-class="active" class="flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-yellow-300/10 hover:text-yellow-200 pl-14">
          <div class="flex items-center space-x-2">
            <p>-</p>
            <p>Xabarlar</p>
          </div>
        </router-link>
      </div>
      <router-link to="/users" active-class="active" class="relative flex items-center w-full h-10 space-x-4 font-medium transition-colors duration-300 cursor-pointer hover:bg-yellow-300/10 hover:text-yellow-200 py-7">
        <div class="w-1.5 h-10 rounded-r-xl first-child-bg-color mr-2"></div>
        <div class="flex items-center justify-center w-10 h-10 rounded-xl second-child-bg-color">
          <BellIcon class="w-6 h-6" />
        </div>
        <div>Xabarlar</div>
      </router-link>
      <router-link to="/sms-messages" active-class="active" class="relative flex items-center w-full h-10 space-x-4 font-medium transition-colors duration-300 cursor-pointer hover:bg-yellow-300/10 hover:text-yellow-200 py-7">
        <div class="w-1.5 h-10 rounded-r-xl first-child-bg-color mr-2"></div>
        <div class="flex items-center justify-center w-10 h-10 rounded-xl second-child-bg-color">
          <BellIcon class="w-6 h-6" />
        </div>
        <div>Xabarlar</div>
      </router-link>
    </div>
    <div class="absolute bottom-0 w-full mb-3 text-sm text-center dark:text-gray-400">
      Copyright &copy; {{ new Date().getFullYear() }} <a href="http://it-forelead.uz" class="hover:underline">IT-Forelead</a>. <br />
      All Rights Reserved.
    </div>
  </div>
</template>
