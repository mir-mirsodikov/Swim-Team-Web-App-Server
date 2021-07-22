import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Announcements from '../views/Announcements.vue';
import MeetSchedule from '../views/MeetSchedule.vue';

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
