<script setup>
import { useModalStore  } from '../../stores/modal.store';
import BellOutlineIcon from '../../assets/icons/BellOutlineIcon.vue';

</script>

<template>
    <div v-if="useModalStore().isOpenNotification"
        class="absolute z-50 flex flex-col items-center justify-center h-40 p-3 space-y-2 bg-white shadow right-48 top-12 w-80 rounded-b-md">
        <div class="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full shadow">
            <BellOutlineIcon class="w-10 h-10 text-gray-500 dark:text-gray-300" />
        </div>
        <div class="text-base dark:text-gray-300">Bildirishnomalar mavjud emas</div>
    </div>
</template>

<style></style>