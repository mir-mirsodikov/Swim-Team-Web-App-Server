<template>
  <div class="uk-card uk-card-default uk-card-hover uk-card-body uk-align-center uk-width-1-3">
    <h1 class="uk-text-center">Hello there {{ user }}</h1>
    <p>

    </p>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    user() {
      return this.$store.getters.getFirstName;
    }
  }

}
</script>

<style>

</style>