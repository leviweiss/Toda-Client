<template>
  <div id="app-home" class="app-home-container">
    <app-top-page>
    </app-top-page>
    <home-info>
    </home-info>
  </div>
</template>

<script>
import AppTopPage from './AppTopPage.vue';
import HomeInfo from './home/HomeInfo.vue';

export default {
  name: 'AppHome',
  components: {
    AppTopPage,
    HomeInfo,
  },
};
</script>

<style lang="scss">

</style>
