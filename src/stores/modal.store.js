import { defineStore } from "pinia";
export const useModalStore = defineStore("modal", {
  state: () => ({
    isOpenAddTaskModal: false,
  }),
  actions: {
    openAddTaskModal() {
      this.isOpenAddTaskModal = true
    },
    closeAddTaskModal() {
      this.isOpenAddTaskModal = false
    },
  },
});
