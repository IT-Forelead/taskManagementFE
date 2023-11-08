import { defineStore } from 'pinia'

export const useDropdownStore = defineStore('dropdown', {
  state: () => ({
    selectOptionAssignExecutor: '',
    isOpenAssignExecutorDropdown: false,
    isOpenNotificationDropdown: false,
    isOpenLanguageDropdown: false,
    isOpenProfileDropdown: false
  }),
  actions: {
    setSelectOptionAssignExecutor(data) {
      this.selectOptionAssignExecutor = data
    },
    openAssignExecutorDropDown() {
      this.isOpenAssignExecutorDropdown = true
    },
    closeAssignExecutorDropDown() {
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
    clearStore() {
      this.selectOptionAssignExecutor = ''
      this.isOpenAssignExecutorDropdown = false
    },
  },
})
