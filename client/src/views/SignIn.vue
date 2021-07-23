<template>
  <div class="uk-card uk-card-default uk-card-hover uk-width-1-5 uk-align-center uk-margin-xlarge-top">
    <div class="uk-card-header">
      <h3 class="uk-card-title">Andover Swimming</h3>
    </div>
    <div class="uk-card-body">
      <form @submit.prevent="signIn">
        <fieldset class="uk-fieldset">
          <div class="uk-margin">
            <input
              type="text"
              class="uk-input"
              placeholder="Username"
              v-model="username"
            />
          </div>
          <div class="uk-margin">
            <input
              type="text"
              class="uk-input"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <button class="uk-button uk-button-primary uk-width-1-1">
            Sign In
          </button>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import store from '../store/index';

export default {
  name: "Sign In",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(['getAuthenticated', 'isAuthorized']),
    async signIn() {
      const auth = {
        username: this.username,
        password: this.password
      }

      try {
        await this.getAuthenticated(auth);
        await this.isAuthorized();
        if (store.getters.isAuthenticated) {
          this.$router.push('Profile');
        }
      }
      catch (err) {
        console.error(err);
      }
    }
  }
};
</script>

<style scoped>
</style>