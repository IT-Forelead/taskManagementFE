import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth.store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // *** DASHBOARD ***
    {
      path: "/dashboard",
      redirect: "/dashboard/main/",
      component: () => import("@/layouts/Dashboard.vue"),
      children: [
        {
          path: "/dashboard/main",
          name: "Dashboard",
          component: () => import("@/pages/Dashboard.vue"),
          meta: {
            title: "Dashboard",
            protected: false,
          },
        },
      ],
    },
    // *** AUTH ***
    {
      path: "/",
      redirect: "/auth/login",
      component: () => import("@/layouts/Auth.vue"),
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
