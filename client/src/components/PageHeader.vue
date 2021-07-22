<template>
    <!-- Component for the slideshow and the heading for the page -->
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="autoplay: true; autoplay-interval: 3750; pause-on-hover: false; ratio: 7:3">
        <ul class="uk-slideshow-items">
            <li>
                <img src="./../assets/slideshow/team_pic.jpeg" alt="" uk-cover>
            </li>
            <li>
                <img src="./../assets/slideshow/DSC_0909.jpeg" alt="" uk-cover>
            </li>
            <li>
                <img src="./../assets/slideshow/DSC_0912.jpeg" alt="" uk-cover>
            </li>
            <li>
                <img src="./../assets/slideshow/DSC_0951.jpeg" alt="" uk-cover>
            </li>
            <li>
                <img src="./../assets/slideshow/DSC_0992.jpeg" alt="" uk-cover>
            </li>
            <li>
                <img src="./../assets/slideshow/DSC_1006.jpeg" alt="" uk-cover>
            </li>
        </ul>
        <div class="uk-position-center">
            <h1>{{ $route.name }}</h1>
        </div>
        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

        <div class="uk-background-secondary" style="height: 3.5em">
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageHeader',
}
</script>

<style scoped>
img {
    filter: brightness(50%);
}

h1 {
    font-size: 5em;
}
</style>