import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () => import("@/views/PortfolioView.vue"),
    },
    {
      path: "/portfolio/:slug",
      name: "portfolio-detail",
      component: () => import("@/components/portfolio/AppPortfolioDetail.vue"),
    },
  ],
});

export default router;
