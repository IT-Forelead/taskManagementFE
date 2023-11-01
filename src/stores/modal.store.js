import { defineStore } from "pinia";
export const useModalStore = defineStore("modal", {
  state: () => ({
    isMyTeleportOpen: false,
    modal: "",
  }),
  actions: {
    openTeleport(modalName) {
      this.modal = modalName;
      this.isMyTeleportOpen = true;
    },
    closeTeleport() {
      this.isMyTeleportOpen = false;
    },
  },
});
