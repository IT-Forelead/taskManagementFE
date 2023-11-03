import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    isOpenAddTaskModal: false,
    isOpenNotification: false,
    isOpenProfileDropDown: false
  }),
  actions: {
    openAddTaskModal() {
      this.isOpenAddTaskModal = true
    },
    closeAddTaskModal() {
      this.isOpenAddTaskModal = false
    },
    toggleNotification() {
      this.isOpenNotification = !this.isOpenNotification
    },
    toggleProfile() {
      this.isOpenProfileDropDown = !this.isOpenProfileDropDown
    },
  },
})
