<script setup>
import ChecklistMinimalisticOutlineIcon from '../../assets/icons/ChecklistMinimalisticOutlineIcon.vue'
import HamburgerMenuOutlineIcon from '../../assets/icons/HamburgerMenuOutlineIcon.vue'
import ShieldCheckOutlineIcon from '../../assets/icons/ShieldCheckOutlineIcon.vue'
import ViewTaskModal from '../modals/ViewTaskModal.vue'
import AssignExecutorModal from '../modals/AssignExecutorModal.vue'
import AddExecutorModal from '../modals/AddExecutorModal.vue'
import AddControllerModal from '../modals/AddControllerModal.vue'
import AddFileModal from '../modals/AddFileModal.vue'
import LanguageDropdown from './LanguageDropdown.vue'
import NotificationDropdown from './NotificationDropdown.vue'
import ProfileDropdown from './ProfileDropdown.vue'
import ViewUploadedFileModal from "@/components/modals/ViewUploadedFileModal.vue";
import { useSidebarStore } from '../../stores/sidebar.store'
</script>

<template>
  <div
    class="sticky top-0 z-50 flex items-center justify-between w-full h-12 px-4 py-2 bg-white border-b border-gray-200 shadow-7xl">
    <div class="flex items-center space-x-8">
      <div @click="useSidebarStore().toggleSidebar"
           class="flex md:hidden items-center justify-center w-8 h-8 rounded-lg cursor-pointer hover:bg-gray-100">
        <HamburgerMenuOutlineIcon class="w-6 h-6" />
      </div>
      <ul class="hidden md:flex items-center space-x-6">
        <li class="flex items-center space-x-2 text-gray-800 cursor-pointer hover:text-blue-800">
          <ChecklistMinimalisticOutlineIcon class="w-5 h-5" />
          <router-link to="/dashboard">
            <span class="text-base">Топшириқлар</span>
          </router-link>
        </li>
        <li class="flex items-center space-x-2 text-gray-800 cursor-pointer hover:text-blue-800">
          <ShieldCheckOutlineIcon class="w-5 h-5" />
          <span class="text-base">Назорат</span>
        </li>
      </ul>
    </div>
    <div class="flex items-center space-x-4">
      <NotificationDropdown class="hidden md:block"/>
      <LanguageDropdown />
      <ProfileDropdown />
    </div>
  </div>

  <ViewTaskModal />
  <AssignExecutorModal />
  <ViewUploadedFileModal />
  <AddExecutorModal />
  <AddControllerModal />
  <AddFileModal />
</template>

<style scoped></style>