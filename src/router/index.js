import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/home.vue";
import homepage from "../views/homepage.vue";
import driver from "../views/DriverOnboard/driver.vue";
import reupload from "../views/DriverOnboard/reupload.vue";
import login from "../views/DriverOnboard/login.vue";
import drivers from "../views/drivers.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "homepage",
    component: homepage,
  },
  {
    path: "/home",
    name: "home",
    component: home,
  },
  {
    path: "/driver",
    name: "Driver",
    component: driver,
  },
  {
    path: "/reupload",
    name: "reupload",
    component: reupload,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/drivers",
    name: "drivers",
    component: drivers,
  },
  {
    path: "/contact",
    name: "contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/contact.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
