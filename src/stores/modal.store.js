import { defineStore } from 'pinia'
import { useTaskStore } from './task.store';

export const useModalStore = defineStore('modal', {
  state: () => ({
    isOpenAddTaskModal: false,
    isOpenEditTaskModal: false,
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
    openEditTaskModal(taskId) {
      useTaskStore().setSelectedTask(taskId)
      this.isOpenEditTaskModal = true
    },
    closeEditTaskModal() {
      this.isOpenEditTaskModal = false
    },
    toggleNotification() {
      this.isOpenNotification = !this.isOpenNotification
    },
    toggleProfile() {
      this.isOpenProfileDropDown = !this.isOpenProfileDropDown
    },
  },
})
