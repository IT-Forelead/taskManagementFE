<script setup>
import {onMounted, ref} from 'vue'
import {useDropdownStore} from '@/stores/dropdown.store.js';
import AddCircleOutlineIcon from "@/assets/icons/AddCircleOutlineIcon.vue";
import ClipboardListOutlineIcon from "@/assets/icons/ClipboardListOutlineIcon.vue";
import GraphUpOutlineIcon from "@/assets/icons/GraphUpOutlineIcon.vue";
import PieChartOutlineIcon from "@/assets/icons/PieChartOutlineIcon.vue";
import ArrowLeftOutlineIcon from "@/assets/icons/ArrowLeftOutlineIcon.vue";

const reportType = ref('')
const isMediumScreen = ref(false);
const changeReportType = (report) => {
  reportType.value = report;

}

const checkScreenSize = () => {
  isMediumScreen.value = window.innerWidth >= 1024 && window.innerWidth <= 1525;
};
const toggleSidebarSize = () => {
  useDropdownStore().isOpenSidebar = !useDropdownStore().isOpenSidebar;
};
onMounted(() => {
  // Check screen size on mount
  checkScreenSize();
  // Check screen size on window resize
  window.addEventListener('resize', checkScreenSize);
});
</script>
<template>
  <div v-if="useDropdownStore().toggleSidebar">
    <div class="fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200"
         :class="useDropdownStore().isOpenSidebar ? 'opacity-100' : 'opacity-0 pointer-events-none'"></div>
    <!-- Sidebar -->
    <div id="sidebar" ref="sidebar"
         class="flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-900 p-4 transition-all duration-200 ease-in-out"
         :class="useDropdownStore().isOpenSidebar ? 'translate-x-0' : '-translate-x-64'">
      <!-- Sidebar header -->
      <div class="flex justify-between mb-10 pr-3 sm:px-2">
        <!-- Close button -->
        <button class="lg:hidden text-slate-500 mt-12 hover:text-slate-400"
                @click="useDropdownStore().toggleSidebar">
          <span class="sr-only">Close sidebar</span>
          <ArrowLeftOutlineIcon class="w-8 h-8 bg-slate-700 p-2 rounded"/>
        </button>
      </div>
      <div class="flex items-center justify-center">
        <router-link to="/dashboard">
          <img src="/images/uztransgaz-logo.svg" alt="Logo" class="w-auto h-36">
        </router-link>
      </div>
      <!-- Links -->
      <div class="space-y-8">
        <div class="mt-6">
          <router-link v-if="!isMediumScreen" to="/add-task" class="w-full">
            <button type="button"
                    class="flex items-center justify-center w-full py-2 space-x-2 text-base font-normal text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <AddCircleOutlineIcon class="w-7 h-7"/>
              <span>
            Топшириқни яратиш
          </span>
            </button>
          </router-link>
          <router-link v-if="isMediumScreen" to="/add-task" class="w-full">
            <button type="button" class="flex items-center justify-center w-full py-2">
              <AddCircleOutlineIcon class="w-7 h-7 text-white"/>
            </button>
          </router-link>
          <router-link v-if="!isMediumScreen" to="/dashboard" active-class="active"
                       @click="changeReportType('all_tasks')"
                       :class="reportType.includes('all_tasks') ? 'rounded-r-full bg-slate-800 text-white' : ''"
                       class="flex items-center w-[97%] px-4 py-3 space-x-3 font-medium transition-colors duration-300 cursor-pointer hover:text-white">
            <ClipboardListOutlineIcon class="w-7 h-7"/>
            <span>Барча Топшириқлар</span>
          </router-link>
          <router-link v-if="isMediumScreen" to="/dashboard" active-class="active"
                       @click="changeReportType('all_tasks')"
                       :class="reportType.includes('all_tasks') ? 'rounded-r-full bg-slate-800 text-white' : ''"
                       class="flex items-center w-[97%] px-4 py-3 space-x-3 font-medium transition-colors duration-300 cursor-pointer hover:text-white">
            <ClipboardListOutlineIcon class="w-7 h-7"/>
          </router-link>
          <router-link v-if="!isMediumScreen" to="/tasks/report" active-class="active"
                       @click="changeReportType('tasks_report')"
                       :class="reportType.includes('tasks_report') ? 'rounded-r-full bg-slate-800 text-white' : ''"
                       class="flex items-center w-full px-4 py-3 space-x-3 font-medium transition-colors duration-300 cursor-pointer hover:text-white">
            <GraphUpOutlineIcon class="w-7 h-7"/>
            <span>Ҳисоботлар</span>
          </router-link>
          <router-link v-if="isMediumScreen" to="/tasks/report" active-class="active"
                       @click="changeReportType('tasks_report')"
                       :class="reportType.includes('tasks_report') ? 'rounded-r-full bg-slate-800 text-white' : ''"
                       class="flex items-center w-full px-4 py-3 space-x-3 font-medium transition-colors duration-300 cursor-pointer hover:text-white">
            <GraphUpOutlineIcon class="w-7 h-7"/>
          </router-link>
          <router-link v-if="!isMediumScreen" to="/statistics" active-class="active"
                       @click="changeReportType('statistics')"
                       :class="reportType.includes('statistics') ? 'rounded-r-full bg-slate-800 text-white' : ''"
                       class="flex items-center w-full px-4 py-3 space-x-3 font-medium transition-colors duration-300 cursor-pointer hover:text-white">
            <PieChartOutlineIcon class="w-7 h-7"/>
            <div>Статистика</div>
          </router-link>
          <router-link v-if="isMediumScreen" to="/statistics" active-class="active"
                       @click="changeReportType('statistics')"
                       :class="reportType.includes('statistics') ? 'rounded-r-full bg-slate-800 text-white' : ''"
                       class="flex items-center w-full px-4 py-3 space-x-3 font-medium transition-colors duration-300 cursor-pointer hover:text-white">
            <PieChartOutlineIcon class="w-7 h-7"/>
          </router-link>
        </div>
      </div>

      <!-- Expand / collapse button -->
      <div class="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
        <div class="px-3 py-2">
          <button @click="toggleSidebarSize">
            <span class="sr-only">Expand / collapse sidebar</span>
            <svg class="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
              <path class="text-slate-400"
                    d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"/>
              <path class="text-slate-600" d="M3 23H1V1h2z"/>
            </svg>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>
  