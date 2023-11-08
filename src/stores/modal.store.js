import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    isOpenAddTaskModal: false,
    isOpenEditTaskModal: false,
    isOpenViewTaskModal:false
  }),
  actions: {
    openAddTaskModal() {
      this.isOpenAddTaskModal = true
    },
    closeAddTaskModal() {
      this.isOpenAddTaskModal = false
    },
    openEditTaskModal() {
      this.isOpenEditTaskModal = true
    },
    closeEditTaskModal() {
      this.isOpenEditTaskModal = false
    },
    openViewTaskModal(){
      this.isOpenViewTaskModal = true
    },
    closeViewTaskModal(){
      this.isOpenViewTaskModal = false
    },
  },
})
