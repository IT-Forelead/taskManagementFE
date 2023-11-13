import { defineStore } from 'pinia'

export const useDropdownStore = defineStore('dropdown', {
  state: () => ({
    selectOptionAssignExecutor: '',
    isOpenAssignExecutorDropdown: false,
    isOpenAssignControllerDropdown: false,
    isOpenNotificationDropdown: false,
    isOpenLanguageDropdown: false,
    isOpenProfileDropdown: false
  }),
  actions: {
    setSelectOptionAssignExecutor(data) {
      this.selectOptionAssignExecutor = data
    },
    openAssignExecutorDropdown() {
      this.isOpenAssignExecutorDropdown = true
    },
    closeAssignExecutorDropdown() {
      this.isOpenAssignExecutorDropdown = false
    },
    openAssignControllerDropdown() {
      this.isOpenAssignControllerDropdown = true
    },
    closeAssignControllerDropdown() {
      this.isOpenAssignControllerDropdown = false
    },
    toggleNotificationDropdown() {
      this.isOpenNotificationDropdown = !this.isOpenNotificationDropdown
    },
    toggleLanguageDropdown() {
      this.isOpenLanguageDropdown = !this.isOpenLanguageDropdown
    },
    toggleProfileDropdown() {
      this.isOpenProfileDropdown = !this.isOpenProfileDropdown
    },
    clearStore() {
      this.selectOptionAssignExecutor = ''
      this.isOpenAssignExecutorDropdown = false
      this.isOpenAssignControllerDropdown = false
    },
  },
})
