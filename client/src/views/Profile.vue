<template>
  <h1 class="uk-text-center">Hello there {{ user }}</h1>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    user() {
      return this.$store.getters.getUser;
    }
  }

}
</script>

<style>

</style>