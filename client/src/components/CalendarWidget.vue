<template>
    <table class="uk-table uk-table-striped">
        <thead>
            <tr>
                <th>Meet</th>
                <th>Date</th>
                <th>Location</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(meet, index) in meets" :key="index">
                <td>{{ meet.name }}</td>
                <td>{{ weekday[meet.date.getDay()] }}, {{ monthNames[meet.date.getMonth()] }} {{ meet.date.getDate() }}, {{ meet.date.getFullYear() }}</td>
                <td><a :href="meet.locationMap" target="_blank">{{ meet.location}}</a></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import meets from '../resources/meets';

let upcomingMeets = [];
let today = new Date(2020, 1, 14);
for (let i = 0; i < meets.length; ++i) {
    if (today <= meets[i].date) {
        upcomingMeets.push(meets[i]);
    }
    if (upcomingMeets.length == 3) break;
}

export default {
    name: 'CalendarWidget',
    data() {
        return {
            meets: upcomingMeets,
            weekday: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        }
    }
}
</script>
