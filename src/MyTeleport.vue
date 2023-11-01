<script setup>
import { useModalStore } from "./stores/modal.store";

const closeTeleport = () => {
  useModalStore().closeTeleport();
};
const props = defineProps({
  show: Boolean,
});
</script>
<template>
  <Teleport to="body">
    <Transition appear>
      <div
        v-if="useModalStore().isMyTeleportOpen"
        class="modal modal-mask fixed top-10 left-0 right-0 flex items-center p-3 z-50 bg-white rounded-lg max-w-md md:mx-auto mx-1 "
      >
        <div class="modal-container">
          <div
          class="modal-bg fixed inset-0 backdrop-blur bg-gray-500/75  z-0"
            @click="closeTeleport"
          ></div>
          <div
            class="modal fixed top-10 left-0 right-0 flex items-center justify-center z-50 bg-white rounded-lg max-w-md md:mx-auto mx-1"
          >
            <div class="w-full h-auto shadow-md">
                <slot> </slot>
                
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<style>
.modal,
.modal-bg {
  transition: all 0.4s ease;
}

.v-enter-active .modal {
  transition-delay: 0.4s;
}
.v-leave-active {
  transition-delay: 0.4s;
}

.v-enter-from .modal-bg,
.v-leave-to .modal-bg {
  opacity: 0;
}
.v-enter-from .modal,
.v-leave-to .modal {
  opacity: 0;
  transform: translateY(-80px);
}
</style>