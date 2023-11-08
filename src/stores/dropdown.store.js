import { defineStore } from 'pinia'

export const useDropdownStore = defineStore('dropdown', {
  state: () => ({
    isOpenNotificationDropdown: false,
    isOpenLanguageDropdown: false,
    isOpenProfileDropdown: false
  }),
  actions: {
    toggleNotificationDropdown() {
      this.isOpenNotificationDropdown = !this.isOpenNotificationDropdown
    },
    toggleLanguageDropdown() {
      this.isOpenLanguageDropdown = !this.isOpenLanguageDropdown
    },
    toggleProfileDropdown() {
      this.isOpenProfileDropdown = !this.isOpenProfileDropdown
    },
  },
})
