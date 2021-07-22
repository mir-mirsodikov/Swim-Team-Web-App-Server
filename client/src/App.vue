<template>
  <div>
    <nav-bar></nav-bar>
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
    ...mapActions(['fetchAnnouncements'])
  },
  created() {
    this.fetchAnnouncements();
  }
}
</script>

