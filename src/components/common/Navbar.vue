<script setup>
import ChatLineOutlineIcon from '../../assets/icons/ChatLineOutlineIcon.vue'
import ChecklistMinimalisticOutlineIcon from '../../assets/icons/ChecklistMinimalisticOutlineIcon.vue'
import HamburgerMenuOutlineIcon from '../../assets/icons/HamburgerMenuOutlineIcon.vue'
import ShieldCheckOutlineIcon from '../../assets/icons/ShieldCheckOutlineIcon.vue'
import AddCircleOutlineIcon from '../../assets/icons/AddCircleOutlineIcon.vue'
import AddTaskModal from '../modals/AddTaskModal.vue'
import EditTaskModal from '../modals/EditTaskModal.vue'
import ViewTaskModal from '../modals/ViewTaskModal.vue'
import LanguageDropdown from './LanguageDropdown.vue'
import NotificationDropdown from './NotificationDropdown.vue'
import ProfileDropdown from './ProfileDropdown.vue'
import { useModalStore } from '../../stores/modal.store'
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
          <span class="text-base">Топшириқлар</span>
        </li>
        <li class="flex items-center space-x-2 text-gray-800 cursor-pointer hover:text-blue-800">
          <ChatLineOutlineIcon class="w-5 h-5" />
          <span class="text-base">Девонхона</span>
        </li>
        <li class="flex items-center space-x-2 text-gray-800 cursor-pointer hover:text-blue-800">
          <ShieldCheckOutlineIcon class="w-5 h-5" />
          <span class="text-base">Назорат</span>
        </li>
      </ul>
    </div>
    <div class="flex items-center space-x-4">
      <div @click="useModalStore().openAddTaskModal()"
        class="flex items-center justify-center px-3 py-1.5 space-x-2 text-gray-800 cursor-pointer rounded-md hover:bg-gray-100 hover:text-blue-800">
        <AddCircleOutlineIcon class="w-5 h-5" />
      </div>
      <NotificationDropdown />
      <LanguageDropdown />
      <ProfileDropdown />
    </div>
  </div>

  <AddTaskModal />
  <EditTaskModal />
  <ViewTaskModal />
</template>

<style scoped></style>