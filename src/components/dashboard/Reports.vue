<script setup>
import { onMounted, ref, watch } from 'vue';
import MoneyIcon from '../../assets/icons/MoneyIcon.vue'
import { useCurrencyFormatter } from '../../composables/useMoneyFomatter';
import dashboardService from '../../services/dashboard.service';

const totalAmountInfos = ref([
  {
    id: 1,
    title: 'Jami to‘langan summa',
    color: '#4C6FFF1A',
    iconColor: '#4C6FFF',
    amount: 0,
    key: 'total_paid'
  },
  {
    id: 2,
    title: 'Jami so‘ralgan summa',
    color: '#EDC7001A',
    iconColor: '#EDC700',
    amount: 0,
    key: 'total_need'
  },
  {
    id: 3,
    title: 'To‘lanishi kerak summa',
    color: '#ED72001A',
    iconColor: '#ED7200',
    amount: 0,
    key: 'total_must_pay'
  },
])

const isLoadingCommonData = ref(true)
const commonData = ref(null)

onMounted(() => {
  dashboardService.getCommonData().then((res) => {
    isLoadingCommonData.value = false
    commonData.value = res?.data
  }).catch((err) => {
    console.log("Error while getting common data");
  })
})

watch(() => commonData.value, (val) => {
  if (val) {
    totalAmountInfos.value = totalAmountInfos.value.map((tai) => {
      return {
        ...tai,
        amount: commonData.value[tai.key] ?? 0
      }
    })
  }
})
</script>
<template>
  <div class="container mx-auto">
    <div v-if="isLoadingCommonData" class="flex items-center w-full space-x-7 my-7">
      <div v-for="i in 3" :key="i" class="flex items-center flex-1 h-24 px-6 space-x-4 bg-white rounded-lg">
        <div class="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-xl animate-pulse">
        </div>
        <div class="space-y-2">
          <div class="w-40 h-3 bg-gray-200 rounded-full animate-pulse"></div>
          <div class="flex items-center space-x-2">
            <div class="w-32 h-5 bg-gray-200 rounded-full animate-pulse"></div>
            <div class="h-5 bg-gray-200 rounded-full w-14 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="flex flex-col items-center w-full space-y-5 md:space-y-0 md:flex-row md:space-x-7 my-7">
      <div v-for="(card, idx) in totalAmountInfos" :key="idx"
        class="flex items-center flex-1 w-full h-24 p-6 space-x-4 bg-white rounded-lg">
        <div :style="`background-color: ${card.color}`" class="flex items-center justify-center w-12 h-12 rounded-xl">
          <MoneyIcon :style="`color: ${card.iconColor}`" />
        </div>
        <div>
          <p class="font-[400] text-[#7A7A9D] text-base md:text-sm lg:text-base">{{ card.title }}</p>
          <p class="text-xl font-bold md:text-xs lg:text-xl">{{ useCurrencyFormatter(card.amount) }} <span
              class="uppercase text-[#B2B7C1] ml-1">uzs</span></p>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped></style>