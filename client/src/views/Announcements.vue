<template>
    <div class="uk-margin-auto uk-margin-top uk-width-1-2">
        <div v-for="(an, index) in allAnnouncements" :key="index" class="uk-card uk-card-default uk-card-hover uk-margin-bottom">
            <div class="uk-card-header">
                <h3>{{ an.subject }}</h3>
            </div>
            <div class="uk-card-body">
                <p>{{ an.body }}</p>
            </div>
            <div class="uk-card-footer">
                <p class="uk-text-right uk-align-right uk-width-1-2 uk-margin-remove">{{ monthNames[an.date.getMonth()] }} {{ an.date.getDate() }}, {{ an.date.getFullYear() }}</p>
                <p class="uk-width-1-3 uk-margin-remove uk-margin-remove-right">Author</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Announcements',
    data() {
        return {
            weekday: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        }
    },
    computed: {
        ...mapGetters(['allAnnouncements']),
    }
}
</script>

<style>

</style>