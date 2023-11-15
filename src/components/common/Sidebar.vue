<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';
import AddCircleOutlineIcon from "@/assets/icons/AddCircleOutlineIcon.vue";
import ClipboardListOutlineIcon from "@/assets/icons/ClipboardListOutlineIcon.vue";
import GraphUpOutlineIcon from "@/assets/icons/GraphUpOutlineIcon.vue";
import PieChartOutlineIcon from "@/assets/icons/PieChartOutlineIcon.vue";
import WalletMoneyOutlineIcon from "@/assets/icons/WalletMoneyOutlineIcon.vue";
import ArrowLeftOutlineIcon from "@/assets/icons/ArrowLeftOutlineIcon.vue";
import ChevronRightRoundedIcon from "@/assets/icons/ChevronRightRoundedIcon.vue";
import UsersGroupRoundedOutlineIcon from '../../assets/icons/UsersGroupRoundedOutlineIcon.vue'
import LetterOutlineIcon from '../../assets/icons/LetterOutlineIcon.vue'
import { useSidebarStore } from '../../stores/sidebar.store';

const router = useRouter()
const reportType = ref('')
const isMediumScreen = ref(false);
const isOpenSubMenuForFinance = computed(() => useSidebarStore().isOpenSubMenuForFinance)

const changeReportType = (report) => {
  reportType.value = report;

}
const checkScreenSize = () => {
  isMediumScreen.value = window.innerWidth >= 1024 && window.innerWidth <= 1525;
};

const closeSidebar = (event) => {
  if (event.target.closest('#sidebar') === null) {
    useSidebarStore().isOpenSidebar = false;
  }
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});
</script>
<template>
  <div v-if="useSidebarStore().toggleSidebar">
    <div class="fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200"
      :class="useSidebarStore().isOpenSidebar ? 'opacity-100' : 'opacity-0 pointer-events-none'" @click="closeSidebar">
    </div>
    <div id="sidebar" ref="sidebar"
      class="flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen lg:overflow-y-auto no-scrollbar w-64 lg:w-24 lg:sidebar-expanded:!w-72 2xl:!w-72 shrink-0 bg-slate-900 p-4 transition-all duration-200 ease-in-out"
      :class="useSidebarStore().isOpenSidebar ? 'translate-x-0' : '-translate-x-64'">
      <div class="flex justify-between mb-10 pr-3 sm:px-2">
        <button class="lg:hidden text-slate-500 mt-12 hover:text-slate-400" @click="useSidebarStore().toggleSidebar">
          <span class="sr-only">Close sidebar</span>
          <ArrowLeftOutlineIcon class="w-8 h-8 bg-slate-700 p-2 rounded" />
        </button>
      </div>
      <div class="flex items-center justify-center">
        <router-link to="/dashboard">
          <img src="/images/uztransgaz-logo.svg" alt="Logo" class="w-auto h-36">
        </router-link>
      </div>
      <div class="space-y-8">
        <div class="mt-6 text-gray-400">
          <router-link v-if="!isMediumScreen" to="/add-task" active-class="active" @click="changeReportType('add_task')"
            :class="reportType.includes('add_task') ? 'rounded-lg bg-indigo-800 text-white' : ''"
            class="flex items-center justify-center w-full py-2 space-x-2 text-base font-normal text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <AddCircleOutlineIcon class="w-7 h-7" />
            <span>Топшириқни яратиш</span>
          </router-link>
          <router-link v-if="isMediumScreen" to="/add-task" title="Топшириқни яратиш" active-class="active"
            @click="changeReportType('add_task')"
            :class="reportType.includes('add_task') ? 'rounded-full bg-slate-800 text-white' : ''"
            class="flex items-center w-full px-4 py-4 my-2 space-x-3 font-medium transition-colors duration-300 cursor-pointer hover:text-white">
            <AddCircleOutlineIcon class="w-8 h-8" />
          </router-link>
          <router-link v-if="!isMediumScreen" to="/dashboard" active-class="active" @click="changeReportType('all_tasks')"
            :class="reportType.includes('all_tasks') ? 'rounded-r-full bg-slate-800 text-white' : ''"
            class="flex items-center w-full px-4 py-3 my-2 space-x-3 font-medium transition-colors duration-300 cursor-pointer hover:text-white">
            <ClipboardListOutlineIcon class="w-7 h-7" />
            <span>Топшириқлар</span>
          </router-link>
          <router-link v-if="isMediumScreen" to="/dashboard" title="Топшириқлар" active-class="active"
            @click="changeReportType('all_tasks')"
            :class="reportType.includes('all_tasks') ? 'rounded-full bg-slate-800 text-white' : ''"
            class="flex items-center w-full px-4 py-4 my-2 space-x-3 font-medium transition-colors duration-300 cursor-pointer hover:text-white">
            <ClipboardListOutlineIcon class="w-8 h-8" />
          </router-link>
          <router-link v-if="!isMediumScreen" to="/tasks/report" active-class="active"
            @click="changeReportType('tasks_report')"
            :class="reportType.includes('tasks_report') ? 'rounded-r-full bg-slate-800 text-white w-[98%]' : ''"
            class="flex items-center w-full px-4 py-3 my-2 space-x-3 font-medium transition-colors duration-300 cursor-pointer hover:text-white">
            <GraphUpOutlineIcon class="w-7 h-7" />
            <span>Ҳисоботлар</span>
          </router-link>
          <router-link v-if="isMediumScreen" to="/tasks/report" active-class="active" title="Ҳисоботлар"
            @click="changeReportType('tasks_report')"
            :class="reportType.includes('tasks_report') ? 'rounded-full bg-slate-800 text-white' : ''"
            class="flex items-center w-full px-4 py-4 my-2 space-x-3 font-medium transition-colors duration-300 cursor-pointer hover:text-white">
            <GraphUpOutlineIcon class="w-8 h-8" />
          </router-link>
          <router-link v-if="!isMediumScreen" to="/statistics" active-class="active"
            @click="changeReportType('statistics')"
            :class="reportType.includes('statistics') ? 'rounded-r-full w-full bg-slate-800 text-white' : ''"
            class="flex items-center w-full px-4 py-3 my-2 space-x-3 font-medium transition-colors duration-300 cursor-pointer hover:text-white">
            <PieChartOutlineIcon class="w-7 h-7" />
            <span>Статистика</span>
          </router-link>
          <router-link v-if="isMediumScreen" to="/statistics" active-class="active" title="Статистика"
            @click="changeReportType('statistics')"
            :class="reportType.includes('statistics') ? 'rounded-full bg-slate-800 text-white w-[98%]' : ''"
            class="flex items-center w-full px-4 py-4 my-2 space-x-3 font-medium transition-colors duration-300 cursor-pointer hover:text-white">
            <PieChartOutlineIcon class="w-8 h-8" />
          </router-link>
          <div v-if="!isMediumScreen" @click="useSidebarStore().toggleSubMenuForFinance()"
            :class="router?.currentRoute?.value?.path === '/a' || router?.currentRoute?.value?.path === '/f' || router?.currentRoute?.value?.path === '/d' ? 'active rounded-r-full bg-slate-800 text-white' : ''"
            class="relative flex items-center justify-between h-10 w-full hover:text-white font-medium py-6 cursor-pointer transition-colors duration-300">
            <div class="flex items-center">
              <div
                class="flex items-center w-full px-4 py-3 my-2 space-x-3 font-medium transition-colors duration-300 cursor-pointer hover:text-white">
                <WalletMoneyOutlineIcon class="w-7 h-7" />
                <span>Финанс</span>
              </div>
            </div>
            <ChevronRightRoundedIcon class="w-5 h-5 transition-all text-gray-400 duration-300 mx-4"
              :class="{ 'rotate-90': isOpenSubMenuForFinance }" />
          </div>
          <div v-if="isMediumScreen" @click="useSidebarStore().toggleSubMenuForFinance()" title="Финанс"
            class="relativ flex items-center h-10 hover:text-white font-medium py-3 cursor-pointer transition-colors duration-300">
            <div class="flex items-center"
              :class="router?.currentRoute?.value?.path === '/a' || router?.currentRoute?.value?.path === 'f' || router?.currentRoute?.value?.path === '/d' ? 'active rounded-full bg-slate-800 text-white mt-8' : ''">
              <div class="flex items-center w-full px-4 py-2 my-2 cursor-pointer hover:text-white">
                <WalletMoneyOutlineIcon class="w-8 h-8" />
              </div>
            </div>
          </div>
          <div :class="{ hidden: !isOpenSubMenuForFinance }" class="transition-all duration-300">
            <router-link v-if="!isMediumScreen" to="/statistics" active-class="active"
              class="flex items-center justify-between hover:text-white p-3 rounded-lg cursor-pointer pl-14">
              <div class="flex items-center space-x-2">
                <p>Расчёт цены</p>
              </div>
            </router-link>
            <router-link v-if="isMediumScreen" to="/statistics" active-class="active" title="Расчёт цены"
              class="flex items-center justify-between hover:text-white pl-5 rounded-lg cursor-pointer mt-8">
              <div class="flex items-center space-x-2">
                <PieChartOutlineIcon class="w-6 h-6" />
              </div>
            </router-link>
            <router-link v-if="!isMediumScreen" to="/tasks/report" active-class="active"
              class="flex items-center justify-between hover:text-white p-3 rounded-lg cursor-pointer pl-14">
              <div class="flex items-center space-x-2">
                <p>Товары</p>
              </div>
            </router-link>
            <router-link v-if="isMediumScreen" to="/tasks/report" active-class="active" title="Товары"
              class="flex items-center justify-between hover:text-white pl-5 rounded-lg cursor-pointer mt-6">
              <div class="flex items-center space-x-2">
                <GraphUpOutlineIcon class="w-6 h-6" />
              </div>
            </router-link>
            <router-link v-if="!isMediumScreen" to="/dashboard" active-class="active"
              class="flex items-center justify-between hover:text-white p-3 rounded-lg cursor-pointer pl-14">
              <div class="flex items-center space-x-2">
                <p>Расход</p>
              </div>
            </router-link>
            <router-link v-if="isMediumScreen" to="/dashboard" active-class="active" title="Расход"
              class="flex items-center justify-between hover:text-white pl-5 rounded-lg cursor-pointer mt-6">
              <div class="flex items-center space-x-2">
                <ClipboardListOutlineIcon class="w-6 h-6" />
              </div>
            </router-link>
          </div>
          <router-link v-if="!isMediumScreen" to="/users" active-class="active" @click="changeReportType('users')"
            :class="reportType.includes('users') ? 'rounded-r-full w-full bg-slate-800 text-white' : ''"
            class="flex items-center w-full px-4 py-3 my-2 space-x-3 font-medium transition-colors duration-300 cursor-pointer hover:text-white">
            <UsersGroupRoundedOutlineIcon class="w-7 h-7" />
            <span>Фойдаланувчилар</span>
          </router-link>
          <router-link v-if="isMediumScreen" to="/users" active-class="active" title="Фойдаланувчилар"
            @click="changeReportType('users')"
            :class="reportType.includes('users') ? 'rounded-full bg-slate-800 text-white w-[98%]' : ''"
            class="flex items-center w-full mt-6 px-4 py-4 my-2 space-x-3 font-medium transition-colors duration-300 cursor-pointer hover:text-white">
            <UsersGroupRoundedOutlineIcon class="w-8 h-8" />
          </router-link>
          <router-link v-if="!isMediumScreen" to="/messages" active-class="active" @click="changeReportType('messages')"
            :class="reportType.includes('messages') ? 'rounded-r-full w-full bg-slate-800 text-white' : ''"
            class="flex items-center w-full px-4 py-3 my-2 space-x-3 font-medium transition-colors duration-300 cursor-pointer hover:text-white">
            <LetterOutlineIcon class="w-7 h-7" />
            <span>SMS хабарлар</span>
          </router-link>
          <router-link v-if="isMediumScreen" to="/messages" active-class="active" title="SMS хабарлар"
            @click="changeReportType('messages')"
            :class="reportType.includes('messages') ? 'rounded-full bg-slate-800 text-white w-[98%]' : ''"
            class="flex items-center w-full mt px-4 py-4 my-2 space-x-3 font-medium transition-colors duration-300 cursor-pointer hover:text-white">
            <LetterOutlineIcon class="w-8 h-8" />
          </router-link>
        </div>
      </div>

      <div class="absolute right-0 bottom-0 w-full mb-3 text-xs text-center text-gray-400"
        :class="isMediumScreen ? 'hidden' : 'block'">
        Copyright &copy; {{ new Date().getFullYear() }}
        <a href="https://it-forelead.uz" class="hover:underline">IT-Forelead</a>.<br />
        All Rights Reserved.
      </div>
    </div>
  </div>
</template>
