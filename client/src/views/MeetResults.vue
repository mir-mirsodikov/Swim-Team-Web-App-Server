<template>
  <div class="uk-width-2-3 uk-margin-auto uk-card uk-card-default uk-card-body uk-card-hover uk-margin">
    <ul uk-accordion="multiple: true">
      <li class="uk-open">
        <a class="uk-accordion-title" href="#">2020-2021 Meet Results</a>
        <div class="uk-accordion-content">
          <p>No meet results</p>
        </div>
      </li>
      <li>
        <a class="uk-accordion-title" href="#">2019-2020 Meet Results</a>
        <div class="uk-accordion-content">
          <p>Meet results</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { meetResults2019 } from '../resources/meetResults2019';

export default {
  name: 'MeetResults',
  data() {
    return {
      meetResults2019: meetResults2019
    }
  }
};
</script>

<style>

</style>