import { defineStore } from 'pinia'

export const useDropdownStore = defineStore('dropdown', {
  state: () => ({
    selectOptionAssignExecutor: '',
    isOpenAssignExecutorDropdown: false,
    isOpenNotificationDropdown: false,
    isOpenLanguageDropdown: false,
    isOpenProfileDropdown: false,
    isOpenSidebar:false
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
    toggleNotificationDropdown() {
      this.isOpenNotificationDropdown = !this.isOpenNotificationDropdown
    },
    toggleLanguageDropdown() {
      this.isOpenLanguageDropdown = !this.isOpenLanguageDropdown
    },
    toggleProfileDropdown() {
      this.isOpenProfileDropdown = !this.isOpenProfileDropdown
    },
    toggleSidebar(){
      this.isOpenSidebar = !this.isOpenSidebar
    },
    clearStore() {
      this.selectOptionAssignExecutor = ''
      this.isOpenAssignExecutorDropdown = false
    },
  },
})
