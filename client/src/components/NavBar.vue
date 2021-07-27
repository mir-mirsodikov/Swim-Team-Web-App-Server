<template>
    <div class="uk-visible@m">
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
            <div class="uk-navbar-container uk-width-1-1" uk-navbar>
                <div class="uk-navbar-left">
                    <ul class="uk-navbar-nav navbar">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/announcements">Announcements</router-link></li>
                        <li><router-link to="/meet-schedule">Meet Schedule</router-link></li>
                        <li><router-link to="/">Meet Results</router-link></li>
                        <li><router-link to="/">Coaches</router-link></li>
                        <li><router-link to="/">Seniors</router-link></li>
                        <li><router-link to="/">Information</router-link></li>
                        <li v-if="isAuthorized"><router-link to="/profile">Profile</router-link></li>
                    </ul>
                </div>
                <div class="uk-navbar-right">
                    <ul class="uk-navbar-nav">
                        <li><router-link to="/login"><button class="uk-button uk-button-primary uk-margin-right" v-if="!isAuthorized">Sign In</button></router-link></li>
                        <li><a><button class="uk-button uk-button-default uk-margin-right" v-if="isAuthorized" @click="signOutUser">Sign Out</button></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <page-header></page-header>
    </div>
</template>

<script>
import PageHeader from './PageHeader.vue';
import { mapActions } from 'vuex';

export default {
    name: 'NavBar',
    components: { PageHeader },
    computed: {
        isAuthorized() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        ...mapActions(['signOut']),
        async signOutUser() {
            await this.signOut();
            this.$router.push({path: '/'});
        }
    }
}
</script>

<style scoped>
.uk-navbar-container {
    background-color: #222;
}

.navbar li a, button {
  font-size: 1em;
  color: white;
  font-family: 'Raleway Light';
}
</style>