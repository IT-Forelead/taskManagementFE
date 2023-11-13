import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    isOpenAddTaskModal: false,
    isOpenEditTaskModal: false,
    isOpenViewTaskModal:false,
    isOpenAssignExecutorModal:false,
    isOpenViewUploadedFileModal: false
    isOpenAddExecutorModal:false,
    isOpenAddFileModal:false,
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
    openAssignExecutorModal(){
      this.isOpenAssignExecutorModal = true
    },
    closeAssignExecutorModal(){
      this.isOpenAssignExecutorModal = false
    },
    openAddExecutorModal(){
      this.isOpenAddExecutorModal = true
    },
    closeAddExecutorModal(){
      this.isOpenAddExecutorModal = false
    },
    openAddFileModal(){
      this.isOpenAddFileModal = true
    },
    closeAddFileModal(){
      this.isOpenAddFileModal = false
    },
    openViewUploadedFileModal() {
      this.isOpenViewUploadedFileModal = true
    },
    closeViewUploadedFileModal() {
      this.isOpenViewUploadedFileModal = false
    },
  },
})
