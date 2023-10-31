<script setup>
import LogoutIcon from '../../../assets/icons/LogoutIcon.vue';
import UserIcon from '../../../assets/icons/UserIcon.vue';
import { useAuthStore } from '../../../stores/auth.store';
import ClubProLogo from '../../common/ClubProLogo.vue';
const { user, logout } = useAuthStore()

</script>
<template>
  <div class="relative z-50 w-full bg-white shadow-7xl">
    <div class="container mx-auto">
      <div class="flex items-center justify-between h-16">
        <ClubProLogo />
        <div class="flex items-center space-x-10">
          <div class="bg-[#F1F1F3] h-10 p-1 w-full rounded-md flex items-center justify-between">
            <div class="bg-[#00AE69] h-8 w-8 relative rounded">
              <UserIcon class="absolute bottom-0 -translate-x-1/2 left-1/2" />
            </div>
            <p class="px-5 text-base font-bold">{{ user?.name }}</p>
          </div>
          <div @click="logout()">
            <LogoutIcon class="w-8 h-8 cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped></style>