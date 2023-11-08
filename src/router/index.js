import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth.store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // *** DASHBOARD ***
    {
      path: "/dashboard",
      redirect: "/dashboard/main/",
      component: () => import("@/layouts/DashboardLayout.vue"),
      children: [
        {
          path: "/dashboard/main",
          name: "Dashboard",
          component: () => import("@/pages/Dashboard.vue"),
          meta: {
            title: "Dashboard",
            protected: true,
          },
        },
      ],
    },
    // *** Tasks ***
    {
      path: "/tasks",
      redirect: "/tasks/report/",
      component: () => import("@/layouts/DashboardLayout.vue"),
      children: [
        {
          path: "/tasks/report/",
          name: "Tasks report",
          component: () => import("@/pages/TaskReport.vue"),
          meta: {
            title: "Tasks report",
            protected: true,
          },
        },
      ],
    },
    // *** ADD TASK PAGE ***
    {
      path: "/add-task",
      redirect: "/add-task",
      component: () => import("@/layouts/DashboardLayout.vue"),
      children: [
        {
          path: "",
          name: "Add task",
          component: () => import("@/pages/AddTask.vue"),
          meta: {
            title: "Add task",
            protected: true,
          },
        },
      ],
    },
    // *** AUTH ***
    {
      path: "/",
      redirect: "/auth/login",
      component: () => import("@/layouts/AuthLayout.vue"),
      children: [
        {
          path: "/auth/login",
          name: "Login",
          component: () => import("@/pages/Login.vue"),
          meta: {
            title: "Tizimga kirish",
            protected: false,
          },
        },
      ],
    },
  ],
});

router.beforeEach(async (to, from) => {
  document.title = `UZTRANSGAZ | ${to.meta.title}`;
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  const isAuthenticated = authStore.user !== null;
  if (to.name === "Login") {
    if (isAuthenticated) {
      next("/dashboard");
    }
  }

  if (to.meta.protected) {
    if (!isAuthenticated) {
      next("/auth/login");
    }
  }

  next();
});

export default router;
