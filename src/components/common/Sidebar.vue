<script setup>
import CheckCircleOutlineIcon from '../../assets/icons/CheckCircleOutlineIcon.vue'
import GraphUpOutlineIcon from '../../assets/icons/GraphUpOutlineIcon.vue'
import ClipboardRemoveOutlineIcon from '../../assets/icons/ClipboardRemoveOutlineIcon.vue'
import ClipboardListOutlineIcon from '../../assets/icons/ClipboardListOutlineIcon.vue'
import ClipboardHeartOutlineIcon from '../../assets/icons/ClipboardHeartOutlineIcon.vue'
import ChatSquareArrowOutlineIcon from '../../assets/icons/ChatSquareArrowOutlineIcon.vue'
</script>
<template>
  <div class="fixed z-50 block h-screen text-gray-400 bg-slate-900 w-80">
    <div class="flex flex-col items-center py-8 space-y-4">
      <div class="inline-flex items-center justify-center text-5xl text-white rounded-full bg-slate-700 h-28 w-28">
        JS
      </div>
      <div class="text-lg font-medium text-white">Jumaniyozov Surojiddin</div>
    </div>
    <div class="flex justify-center px-4">
      <button type="button"
        class="flex items-center justify-center w-full py-2 space-x-2 text-base font-normal text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        <CheckCircleOutlineIcon class="w-5 h-5" />
        <span>
          Топшириқни яратиш
        </span>
      </button>
    </div>
    <div class="relative py-4 overflow-y-auto h-5/6">
      <router-link to="/dashboard" active-class="active"
        class="flex items-center w-[97%] px-4 py-3 space-x-3 font-medium transition-colors duration-300 rounded-r-full cursor-pointer bg-slate-800 text-white hover:text-white">
        <GraphUpOutlineIcon class="w-6 h-6" />
        <div>Hisobot</div>
      </router-link>
      <router-link to="/dashboard" active-class="active"
        class="flex items-center w-full px-4 py-3 space-x-3 font-medium transition-colors duration-300 cursor-pointer hover:text-white">
        <ClipboardHeartOutlineIcon class="w-6 h-6" />
        <div>Qayta nazoratga olingan</div>
      </router-link>
      <router-link to="/dashboard" active-class="active"
        class="flex items-center w-full px-4 py-3 space-x-3 font-medium transition-colors duration-300 cursor-pointer hover:text-white">
        <ClipboardListOutlineIcon class="w-6 h-6" />
        <div>Topshiriqlar</div>
      </router-link>
      <router-link to="/dashboard" active-class="active"
        class="flex items-center w-full px-4 py-3 space-x-3 font-medium transition-colors duration-300 cursor-pointer hover:text-white">
        <ChatSquareArrowOutlineIcon class="w-6 h-6" />
        <div>Berilgan javoblar</div>
      </router-link>
      <router-link to="/dashboard" active-class="active"
        class="flex items-center w-full px-4 py-3 space-x-3 font-medium transition-colors duration-300 cursor-pointer hover:text-white">
        <ClipboardRemoveOutlineIcon class="w-6 h-6" />
        <div>Qabul qilinmaganlar</div>
      </router-link>
    </div>
    <div class="absolute bottom-0 w-full mb-3 text-xs text-center dark:text-gray-400">
      Copyright &copy; {{ new Date().getFullYear() }} <a href="http://it-forelead.uz"
        class="hover:underline">IT-Forelead</a>. <br />
      All Rights Reserved.
    </div>
  </div>
</template>
