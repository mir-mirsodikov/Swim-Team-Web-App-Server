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
                    </ul>
                </div>
                <div class="uk-navbar-right">
                    <ul class="uk-navbar-nav">
                        <li><button class="uk-button uk-button-primary uk-margin-right"><router-link to="/"> Sign In</router-link></button></li>
                    </ul>
                </div>
            </div>
        </div>
        <page-header></page-header>
    </div>
</template>

<script>
import PageHeader from './PageHeader.vue'

export default {
    name: 'NavBar',
    components: { PageHeader }
}
</script>

<style scoped>
.uk-navbar-container {
    background-color: #222;
}

.navbar li a, button a {
  font-size: 1em;
  color: white;
  font-family: 'Raleway Light';
}
</style>