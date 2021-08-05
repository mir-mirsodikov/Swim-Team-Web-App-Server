import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Announcements from '../views/Announcements.vue';
import MeetSchedule from '../views/MeetSchedule.vue';
import MeetResults from '../views/MeetResults.vue';
import SignIn from '../views/SignIn.vue';
import Profile from '../views/Profile.vue';
import store from '../store/index';

export const routes = [
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
  },
  {
    path: '/meet-results',
    name: 'Meet Results',
    component: MeetResults
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// Check to see if the user is authenticated before sending them to a protected route
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

// Check to see if the user is already signed in as to not send them to the sign in
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
});

// Add the title of the page to the tab
router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router;
