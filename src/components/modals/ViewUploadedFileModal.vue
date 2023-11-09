<script setup>
import XIcon from "@/assets/icons/XIcon.vue";
import {useModalStore} from "@/stores/modal.store.js";
import {computed, onMounted, onUnmounted} from "vue";
import {useFileStore} from "..//../stores/file.store"

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

const fileUrl = "https://uztransgazs3.s3.ap-northeast-2.amazonaws.com/32050988-dd5b-43fa-9d96-348a26ea550d.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231109T104402Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86399&X-Amz-Credential=AKIA4ZDZVO645IM6SIXS%2F20231109%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=9ab7f21f3c046d99563000ea73ba43f1873176364f6aa7c2def67aaa3223cf6f";


const urlObject = new URL(fileUrl);

const extension = fileUrl.substring(0, fileUrl.indexOf(urlObject.search));

// console.log(extension);

</script>
<template>
  <div v-if="useModalStore().isOpenViewUploadedFileModal"
       class="fixed top-0 left-0 right-0 z-50 w-full max-h-screen overflow-x-hidden overflow-y-auto backdrop-blur bg-gray-900/75 md:inset-0 md:h-full">
    <div class="relative w-full h-full max-w-4xl p-4 -translate-x-1/2 -translate-y-1/2 md:h-auto left-1/2 top-1/2">
      <div class="relative bg-white border rounded-lg shadow">
        <div class="flex justify-between items-start p-4 rounded-t border-b">
          <div class="flex items-center text-xl font-bold">Юкланган файл</div>
          <button @click="closeModal()"
                  class="text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all duration-300 rounded-full text-sm p-1.5 inline-flex items-center">
            <XIcon/>
          </button>
        </div>
        <div class="px-3">
          <div class="flex py-2">
            <h1 class="font-bold px-1">Файл номи: </h1>
            <p>{{ selectedFile.filename ? selectedFile.filename : "Файл номи йўқ" }}</p>
          </div>
          <div class="bg-white rounded-lg overflow-hidden my-1">
            <h1>{{ selectedFile.url }}</h1>
            <embed :src="selectedFile.url" type="" width="100%" height="600px">
            <!--            <img src="https://uztransgazs3.s3.ap-northeast-2.amazonaws.com/ba69605b-aff7-427a-ab60-695d488c1a8c.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231109T061443Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86399&X-Amz-Credential=AKIA4ZDZVO645IM6SIXS%2F20231109%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=3704877e6b0ace602bc91fb82ade268a40b743b5995c6edd836c49a897bf5d48" class="w-full h-[600px]" alt="">-->
          </div>
        </div>
        <div class="flex items-center justify-end p-4 space-x-2 border-t">
          <button @click="closeModal"
                  class="w-36 py-2 px-4 rounded-md text-white text-base bg-red-600 cursor-pointer hover:bg-red-800">
            Ёпиш
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>