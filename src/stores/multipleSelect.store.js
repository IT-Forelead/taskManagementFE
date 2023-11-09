import { defineStore } from 'pinia'

export const useMultipleSelectStore = defineStore('multipleSelect', {
  state: () => ({
    selectedExecuters: [],
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
    clearStore() {
      this.selectedExecuters = []
    }
  },
})
