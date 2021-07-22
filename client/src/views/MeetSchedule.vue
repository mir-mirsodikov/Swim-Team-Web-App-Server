<template>
    <div class="uk-width-1-2@m uk-margin-auto uk-margin">
        <div v-for="(meet, index) in meets" :key="index" class="uk-card uk-card-default uk-card-hover uk-margin-bottom">
            <div class="uk-card-header">
                <h3>{{ meet.name }}</h3>
            </div>
            <div class="uk-card-body">
                <p>{{ getTimeFormatted(meet) }} {{ weekday[meet.date.getDay()] }}, {{ monthNames[meet.date.getMonth()] }} {{ meet.date.getDate() }}, {{ meet.date.getFullYear() }}</p>
                <p><a :href="meet.locationMap" target="_blank">{{ meet.location }}</a></p>
            </div>
            <div class="uk-card-footer">
                <p class="uk-text-right">{{ countDown(meet) }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import meets from '../resources/meets';

export default {
    name: 'MeetSchedule',
    data() {
        return {
            meets: meets,
            today: new Date(2020, 9, 14),
            weekday: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        }
    },
    methods: {
        countDown(meet) {
            let days = Math.floor((meet.date.getTime() - this.today.getTime()) / (1000 * 60 * 60 * 24));
            let hours = Math.floor(((meet.date.getTime() - this.today.getTime()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor(((meet.date.getTime() - this.today.getTime()) % (1000 * 60 * 60)) / (1000 * 60));
            
            // If the meet day is the same day as today, same month as today, and today's time is greater than when the meet starts
            if (meet.date.getDate() == this.today.getDate() && meet.date.getMonth() == this.today.getMonth() && meet.date.getHours() <= this.today.getHours())
                return "Meet in Progress";
            // If today is greater than the meet day, the meet has passed
            else if (this.today.getTime() > meet.date.getTime())
                return "Meet Completed";
            // Display the time left until the meet
            else
                return `${days} Days, ${hours} Hours, ${minutes} Minutes`;
        },
        getTimeFormatted(meet) {
            return `${ meet.date.getHours() < 12 ? meet.date.getHours() : meet.date.getHours() - 12 }:${ meet.date.getMinutes() < 10 ? '0' + meet.date.getMinutes() : meet.date.getMinutes()}
                    ${ meet.date.getHours() < 12 ? 'AM' : 'PM' }`
        }
    }
}
</script>

<style>

</style>