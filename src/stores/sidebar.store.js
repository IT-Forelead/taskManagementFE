import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    isOpenSidebar: false,
    isOpenSubMenuForFinance: false
  }),
  actions: {
    toggleSidebar(){
        this.isOpenSidebar = !this.isOpenSidebar
    },
    toggleSubMenuForFinance() {
      this.isOpenSubMenuForFinance = !this.isOpenSubMenuForFinance
    },
    clearStore() {
      this.isOpenSidebar = false
      this.isOpenSubMenuForFinance = false
    }
  },
})
