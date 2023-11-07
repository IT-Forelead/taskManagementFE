<script setup>
import AddTaskModal from '../modals/AddTaskModal.vue'
import EditTaskModal from '../modals/EditTaskModal.vue'
import SignOutIcon from "../../assets/icons/SignOutIcon.vue";
import ChatLineOutlineIcon from "../../assets/icons/ChatLineOutlineIcon.vue";
import ChecklistMinimalisticOutlineIcon from "../../assets/icons/ChecklistMinimalisticOutlineIcon.vue";
import ShieldCheckOutlineIcon from "../../assets/icons/ShieldCheckOutlineIcon.vue";
import HamburgerMenuOutlineIcon from "../../assets/icons/HamburgerMenuOutlineIcon.vue";
import SettingsOutlineIcon from "../../assets/icons/SettingsOutlineIcon.vue";
import UserIdOutlineIcon from "../../assets/icons/UserIdOutlineIcon.vue";
import BellOutlineIcon from "../../assets/icons/BellOutlineIcon.vue";
import GlobalOutlineIcon from "../../assets/icons/GlobalOutlineIcon.vue";

import { useAuthStore } from "../../stores/auth.store";
import { useModalStore } from '../../stores/modal.store'
import NotificationModal from '../modals/NotificationModal.vue';
const { user, logout } = useAuthStore();
</script>
<template>
  <div
    class="relative z-50 flex items-center justify-between w-full h-12 px-4 bg-white border-b border-gray-200 border-solid shadow-7xl">
    <div class="flex items-center space-x-8">
      <div class="flex items-center justify-center w-8 h-8 rounded-lg cursor-pointer hover:bg-gray-100">
        <HamburgerMenuOutlineIcon class="w-6 h-6" />
      </div>
      <ul class="flex items-center space-x-6">
        <li class="flex items-center space-x-2 text-gray-800 cursor-pointer hover:text-blue-800">
          <ChecklistMinimalisticOutlineIcon class="w-5 h-5" />
          <span class="text-base">Topshiriqlar</span>
        </li>
        <li class="flex items-center space-x-2 text-gray-800 cursor-pointer hover:text-blue-800">
          <ChatLineOutlineIcon class="w-5 h-5" />
          <span class="text-base">Devonxona</span>
        </li>
        <li class="flex items-center space-x-2 text-gray-800 cursor-pointer hover:text-blue-800">
          <ShieldCheckOutlineIcon class="w-5 h-5" />
          <span class="text-base">Devonxona</span>
        </li>
      </ul>
    </div>
    <div class="flex items-center space-x-8">
      <ul class="flex items-center space-x-6">
        <li class="flex items-center space-x-2 text-gray-800 cursor-pointer hover:text-blue-800">
          <BellOutlineIcon class="w-5 h-5" />
        </li>
        <li class="flex items-center space-x-2 text-gray-800 cursor-pointer hover:text-blue-800">
          <SettingsOutlineIcon class="w-5 h-5" />
        </li>
        <li class="flex items-center space-x-2 text-gray-800 cursor-pointer hover:text-blue-800">
          <GlobalOutlineIcon class="w-5 h-5" />
          <span class="text-base">Uz</span>
        </li>
      </ul>
      <div class="flex items-center space-x-2 text-gray-800 cursor-pointer hover:text-blue-800">
        <UserIdOutlineIcon class="w-6 h-6" />
        <span class="text-base">Surojiddin</span>
      </div>
    </div>

    <!-- <div class="flex items-center justify-between h-16">
      <div class="flex items-center space-x-10">
        <button @click="useModalStore().openAddTaskModal()" type="button"
          class="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 whitespace-nowrap">
          Топшириқ яратиш
        </button>
        <div @click="useModalStore().toggleNotification">
          <BellFillIcon class="w-8 h-8 text-gray-400 cursor-pointer" />
        </div>
        <div class="bg-[#F1F1F3] h-10 p-1 w-full rounded-md flex items-center justify-between">
          <div class="bg-[#00AE69] h-8 w-8 flex items-center justify-center rounded">
            <UserIcon class="w-7 h-7 text-[#F1F1F3]" />
          </div>
          <p class="px-5 text-base font-bold">{{ user?.name }}</p>
        </div>
        <div @click="logout()">
          <SignOutIcon class="w-8 h-8 cursor-pointer" />
        </div>
      </div>
    </div> -->
  </div>

  <NotificationModal />
  <AddTaskModal />
  <EditTaskModal />
</template>

<style scoped></style>