<script setup>
import { computed, ref } from 'vue';
const series = computed(() =>
  [{
    name: 'Homiylar',
    data: [31, 40, 28, 51, 42, 109, 100]
  },
  {
    name: 'Talabalar',
    data: [11, 32, 45, 32, 34, 52, 41]
  }]
)

const chartOptions = computed(() => {
  return {
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  }
})
</script>
<template>
  <div class="container mx-auto">
    <div class="py-3 bg-white rounded-md">
      <h1 class="px-4 text-2xl font-bold">Homiylar va talabalar soni</h1>
      <apexchart type="area" height="325" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>

<style scoped></style>