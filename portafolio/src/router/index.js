import { createRouter, createWebHistory } from "vue-router";

import PortafolioView from "@/views/PortafolioView.vue";

const routes = [
  {
    path: "/",
    name: "PortafolioViews",
    component: PortafolioView,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
