import { defineStore } from 'pinia'
import { ref } from 'vue'
import authService from '../services/auth.service'
import { toast } from 'vue-sonner'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isLoading = ref(false)
  const isLoggedIn = ref(false)


  user.value = JSON.parse(localStorage.getItem('session'))

  function login(login, password) {
    if (!login) {
      toast.error("Iltimos loginni kiriting!")
    } else if (!password) {
      toast.error("Iltimos parolni kiriting!")
    } else {
      isLoading.value = true
      authService
        .login({
          login: login,
          password: password,
        })
        .then((res) => {
          user.value = res?.data
          localStorage.setItem('session', JSON.stringify(res?.data))
          isLoggedIn.value = true
          window.location.href = "/dashboard"
        })
        .catch((err) => {
          isLoading.value = false
          toast.error("Login yoki parol noto`g`ri!")
        })
        .finally(() => {
          isLoading.value = false
        })
    }
  }

  function logout() {
    authService.logout()
    user.value = null
    window.location.reload()
  }

  return { user, login, logout, isLoading, isLoggedIn }
})
