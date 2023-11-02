<script setup>
import { useModalStore } from '../../stores/modal.store'

const props = defineProps({
  show: Boolean,
})
</script>
<template>
  <Teleport to="body">
    <Transition appear>
      <div v-if="useModalStore().isMyTeleportOpen"
        class="fixed left-0 right-0 z-50 flex items-center max-w-md p-3 mx-1 bg-white rounded-lg modal modal-mask top-10 md:mx-auto ">
        <div class="modal-container">
          <div class="fixed inset-0 z-0 modal-bg backdrop-blur bg-gray-500/75" @click="useModalStore().closeTeleport()"></div>
          <div
            class="fixed left-0 right-0 z-50 flex items-center justify-center max-w-md mx-1 bg-white rounded-lg modal top-10 md:mx-auto">
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