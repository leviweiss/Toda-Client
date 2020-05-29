<template>
  <div id="home-info" class="home-info-container">
    <home-categories class="home-info-container__categories"/>
    <home-buttons class="home-info-container__buttons"/>
    <home-dropdowns class="home-info-container__dropdowns"/>
    <home-data-list class="home-info-container__data-list"/>
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
.home-info-container {
  &__categories {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2%;
  }
}

</style>
