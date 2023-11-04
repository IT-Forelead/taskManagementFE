<script setup>
import AddTaskModal from '../modals/AddTaskModal.vue'
import SignOutIcon from "../../assets/icons/SignOutIcon.vue";
import UserIcon from "../../assets/icons/UserIcon.vue";
import BellFillIcon from '../../assets/icons/BellFillIcon.vue';
import { useAuthStore } from "../../stores/auth.store";
import ClubProLogo from "../common/ClubProLogo.vue";
import { useModalStore } from '../../stores/modal.store'
import NotificationModal from '../modals/NotificationModal.vue';
const { user, logout } = useAuthStore();
</script>
<template>
  <div class="relative z-50 w-full bg-white shadow-7xl">
    <div class="container mx-auto">
      <div class="flex items-center justify-between h-16">
        <ClubProLogo />
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
      </div>
    </div>
  </div>

  <NotificationModal />
  <AddTaskModal />
</template>


<style scoped></style>