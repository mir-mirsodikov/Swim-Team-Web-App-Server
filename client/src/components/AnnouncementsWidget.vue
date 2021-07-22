<template>
    <div>
        <div v-for="(an, index) in latestAnnouncements" :key="index" class="uk-card uk-card-default uk-card-body uk-card-hover uk-margin uk-padding">
            <h3 class="uk-card-title">{{ an.subject }}</h3>
            <p>{{ an.body }}</p>
        </div>
    </div>
</template>

<script>
// import AnnouncementService from './../services/AnnouncementService';
import { mapGetters } from 'vuex';

export default {
    name: 'AnnouncementsWidget',
    data() {
        return {
            announcements: []
        }
    },
    computed: {
        ...mapGetters(['latestAnnouncements'])
    }
}
</script>