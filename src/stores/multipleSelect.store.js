import { defineStore } from 'pinia'

export const useMultipleSelectStore = defineStore('multipleSelect', {
  state: () => ({
    selectedExecuters: [],
    selectedControllers: [],
  }),
  actions: {
    setSelectExecuter(data) {
      if (data) {
        if (this.selectedExecuters.includes(data)) {
          this.selectedExecuters = this.selectedExecuters.filter((r) => r !== data)
        } else {
          this.selectedExecuters.push(data)
        }
      } else {
        this.selectedExecuters = []
      }
    },
    setSelectController(data) {
      if (data) {
        if (this.selectedControllers.includes(data)) {
          this.selectedControllers = this.selectedControllers.filter((r) => r !== data)
        } else {
          this.selectedControllers.push(data)
        }
      } else {
        this.selectedControllers = []
      }
    },
    clearSelectedControllers() {
      this.selectedControllers = []
    },
    clearSelectedExecuters() {
      this.selectedExecuters = []
    },
    clearStore() {
      this.selectedExecuters = []
      this.selectedControllers = []
    },
  },
})
