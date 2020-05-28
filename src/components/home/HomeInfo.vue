<template>
  <div id="app-home-info" class="app-home-info-container">
    <home-categories/>
    <home-buttons/>
    <home-dropdowns/>
    <home-data-list/>
  </div>
</template>

<script>
import HomeCategories from './HomeCategories.vue';
import HomeButtons from './HomeButtons.vue';
import HomeDropdowns from './HomeDropdowns.vue';
import HomeDataList from './HomeDataList.vue';

export default {
  name: 'HomeInfo',
  components: {
    HomeCategories, HomeButtons, HomeDropdowns, HomeDataList,
  },
};
</script>

<style lang="scss">

</style>
