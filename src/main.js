import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/global.css";
import router from "@/router";
import App from "@/App.vue";
import VueApexCharts from 'vue3-apexcharts'
import { MotionPlugin } from '@vueuse/motion'

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(VueApexCharts);
app.use(MotionPlugin);
app.mount("#app");
