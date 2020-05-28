<template>
  <div id="app-home" class="app-home-container">
    <app-top-page class="app-home-container__top-page"/>
    <home-info class="app-home-container__home-info"/>
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
.app-home-container {
  &__top-page {
    margin-bottom: 1%;
  }

  &__home-info {
    margin-bottom: 1%;
  }
}

</style>
