<template>
  <div>
    <nav-bar v-if="$route.name != 'Sign In'"></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: { 
    NavBar 
  },
  methods: {
    ...mapActions(['fetchAnnouncements', 'isAuthorized'])
  },
  created() {
    this.fetchAnnouncements();
  },
  updated() {
    this.isAuthorized();
  }
}
</script>

