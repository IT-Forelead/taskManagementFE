<script setup>
import { vMaska } from "maska";
import { computed, reactive, ref } from 'vue';
import EyeIcon from '../assets/icons/EyeIcon.vue';
import EyeSlashIcon from '../assets/icons/EyeSlashIcon.vue';
import SpinnerIcon from '../assets/icons/SpinnerIcon.vue';
import ClubLogo from '../components/common/ClubLogo.vue';
import { useAuthStore } from '../stores/auth.store';
// import vueRecaptcha from 'vue3-recaptcha2';

const { login } = useAuthStore()
const hidePassword = ref(true)

const loginData = reactive({
  login: '',
  password: ''
})

const isLoading = computed(() => useAuthStore().isLoading)
const togglePassword = () => (hidePassword.value = !hidePassword.value)

const key = computed(() => import.meta.env.VITE_GOOGLE_API_KEY)

const loginDashboard = () => {
  login(loginData.login.replace(/([() -])/g, ''), loginData.password)
}

// GOOGLE reCAPTCHA
const isNotABot = ref(true)

const verify = () => {
  isNotABot.value = true
}

const expire = () => {
  window.location.reload()
}

const error = () => {
  window.location.reload()
}

const fail = () => {
  window.location.reload()
}
</script>
<template>
  <div class="flex flex-col items-center bg-[#F5F5F7] justify-center w-full h-screen">
    <ClubLogo v-motion-pop />
    <div v-motion-slide-bottom class="p-8 mt-12 bg-white w-96 shadow-6xl rounded-xl space-y-7">
      <h1 class="text-2xl font-bold">Kirish</h1>
      <div class="flex flex-col space-y-2 mt-11">
        <label for="login" class="text-xs font-medium">Telefon raqam</label>
        <input type="text" v-model="loginData.login" id="login" v-maska data-maska="+998(##) ###-##-##"
          data-maska-tokens="998" placeholder="+998(00) 000-00-00"
          class="h-10 custom-input-bg border bg-[#e0e7ff3b] px-3 border-[#E0E7FF] outline-none rounded-md">
      </div>
      <div class="flex flex-col space-y-2">
        <label for="password" class="text-xs font-medium">Parol</label>
        <div class="relative">
          <input id="password" :type="hidePassword ? 'password' : 'text'" v-model="loginData.password"
            class="bg-[#e0e7ff3b] px-3 w-full h-10 border border-[#E0E7FF] rounded-md outline-none"
            placeholder="Parolni kiriting" />
          <EyeIcon v-if="hidePassword" @click="togglePassword()"
            class="absolute z-10 w-5 h-5 text-gray-500 -translate-y-1/2 cursor-pointer dark:text-gray-500 top-1/2 right-3" />
          <EyeSlashIcon v-else @click="togglePassword()"
            class="absolute z-10 w-5 h-5 text-gray-500 -translate-y-1/2 cursor-pointer dark:text-gray-500 top-1/2 right-3" />
        </div>
      </div>
      <!-- <vue-recaptcha @verify="verify" @fail="fail" @error="error" @expire="expire" sitekey="6LdStc8oAAAAAEiXu3d0zVAYeYEl64kbvyNwsKu6" size="normal">
      </vue-recaptcha> -->
      <button v-if="isLoading" disabled
        class="h-[50px] w-full font-medium text-[15px] bg-[#5578f9] rounded-md flex items-center justify-center text-white">
        <SpinnerIcon class="mr-2 w-7 h-7" />
        Ma'lumotlar tekshirilmoqda...
      </button>
      <button v-else-if="isNotABot" @click="loginDashboard()"
        class="h-[50px] w-full font-medium text-[15px] bg-[#2E5BFF] rounded-md flex items-center justify-center text-white">
        Kirish
      </button>
      <button v-else disabled
        class="h-[50px] w-full opacity-50 font-medium text-[15px] bg-[#2E5BFF] rounded-md flex items-center justify-center text-white">
        Kirish
      </button>
    </div>
  </div>
</template>

<style scoped></style>