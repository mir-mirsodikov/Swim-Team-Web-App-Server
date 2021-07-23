import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Announcements from '../views/Announcements.vue';
import MeetSchedule from '../views/MeetSchedule.vue';
import SignIn from '../views/SignIn.vue';
import Profile from '../views/Profile.vue';
import store from '../store/index';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/announcements',
    name: 'Announcements',
    component: Announcements
  },
  {
    path: '/meet-schedule',
    name: 'Meet Schedule',
    component: MeetSchedule
  },
  {
    path: '/login',
    name: 'Sign In',
    component: SignIn,
    meta: { guest: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next('/login');
  }
  else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/profile");
      return;
    }
    next();
  }
  else {
    next();
  }
})

export default router
