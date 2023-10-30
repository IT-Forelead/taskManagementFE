<script setup>
import { Toaster } from 'vue-sonner'
</script>

<template>
  <Toaster richColors closeButton position="bottom-right" />
  <router-view></router-view>
</template>

<style scoped></style>
