<script setup>
import XIcon from "@/assets/icons/XIcon.vue";
import {useModalStore} from "@/stores/modal.store.js";
import {computed, onMounted, onUnmounted} from "vue";
import {useFileStore} from "..//../stores/file.store"
import TaskIcon from "@/assets/icons/TaskIcon.vue";
import FileIcon from "@/assets/icons/FileIcon.vue";
import VuePdfApp from "vue3-pdf-app";
// import this to use default icons for buttons
import "vue3-pdf-app/dist/icons/main.css";
const closeModal = () => {
  useModalStore().closeViewUploadedFileModal()
}

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

const handleKeyDown = (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
};

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
});

const selectedFile = computed(()=>{
  return useFileStore().selectedFile
})

const isPdfFile = (url) => {
  const extension = getFileExtension(url);
  return extension === "pdf";
};

const isImageFile = (url) => {
  const extension = getFileExtension(url);
  return ["jpg", "jpeg", "png"].includes(extension);
};

// const isDocumentType = (url) => {
//   const extension = getFileExtension(url);
//   return ['doc', 'docx', 'xls'].includes(extension.toLowerCase());
// };

const getFileExtension = (url) => {
  const urlObject = new URL(url);
  return urlObject.pathname.split('.').pop();
};
</script>
<template>
  <div v-if="useModalStore().isOpenViewUploadedFileModal" class="fixed top-0 left-0 right-0 z-50 w-full max-h-screen overflow-x-hidden overflow-y-auto backdrop-blur bg-gray-900/75 md:inset-0 md:h-full">
    <div class="relative w-full h-full max-w-full md:max-w-4xl p-4 md:p-8 left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 md:h-auto">
      <div class="relative bg-white border rounded-lg shadow">
        <div class="flex justify-between items-start p-4 md:p-6 rounded-t border-b">
          <div class="flex items-center text-lg md:text-xl font-bold">Юкланган файл</div>
          <button @click="closeModal()" class="text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all duration-300 rounded-full text-sm md:text-base p-1.5 inline-flex items-center">
            <XIcon/>
          </button>
        </div>
        <div class="px-3 md:px-6">
          <div class="flex py-2 items-center">
            <TaskIcon class="w-5 h-5" />
            <h1 class="font-bold px-1 text-sm md:text-base">Топшириқ номи: </h1>
            <p class="text-sm md:text-base">{{ selectedFile.title ? selectedFile.title : "Топшириқ номи йўқ" }}</p>
          </div>

          <div class="bg-white rounded-lg overflow-hidden my-1">
            <template v-if="isPdfFile(selectedFile.url)">
              <!-- <vue-pdf-app style="height: 500px;" :pdf="selectedFile.url"></vue-pdf-app> -->
              <!-- <embed :data="selectedFile.url" type="" height="200px"> -->
            </template>
            <template v-else-if="isImageFile(selectedFile.url)">
              <img :src="selectedFile.url" class="w-full h-[500px]" alt="">
            </template>
            <template v-else>
              <p>Unsupported file type</p>
            </template>
          </div>
        </div>
        <div class="flex items-center justify-end p-4 md:p-6 space-x-2 border-t">
          <button @click="closeModal" class="w-full md:w-36 py-2 px-4 rounded-md text-white text-sm md:text-base bg-red-600 cursor-pointer hover:bg-red-800">
            Ёпиш
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>