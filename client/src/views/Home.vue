<template>
  <div class="uk-margin-left uk-margin-right uk-margin uk-child-width-1-1@s uk-child-width-1-2@m" uk-grid="masonry: true">
    <div class="uk-padding-remove-left">
      <div class="uk-card uk-card-default uk-card-hover uk-card-body">
        <h3 class="uk-card-title">Welcome!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error consequatur atque iste omnis minus, architecto praesentium et tempore dicta cum. </p>
      </div>
    </div>
    <div class="remove-padding">
      <div class="uk-card uk-card-default uk-card-body uk-card-hover">
        <h3 class="uk-card-title">Umcoming Meets</h3>
        <calendar-widget></calendar-widget>
      </div>
    </div>
    <div class="uk-padding-remove-left">
      <div class="uk-card uk-card-default uk-card-body uk-card-hover">
        <h3 class="uk-card-title">Latest Announcements</h3>
        <announcements-widget></announcements-widget>
      </div>
    </div>
    <div class="remove-padding">
      <div class="uk-card uk-card-default uk-card-body uk-card-hover">
        <h3 class="uk-card-title">Quick Links</h3>
        <ul class="uk-list uk-list-striped">
          <li><a href="">Link 1</a></li>
          <li><a href="">Link 2</a></li>
          <li><a href="">Link 3</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarWidget from '../components/CalendarWidget.vue';
import AnnouncementsWidget from '../components/AnnouncementsWidget.vue';

export default {
  name: 'Home',
  components: {
    CalendarWidget,
    AnnouncementsWidget
  }
}

</script>
