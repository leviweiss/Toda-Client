<template>
  <div id="home-data-list" class="home-data-list-container">
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'home-data-list',
  computed: {
    ...mapState({
      chosenCategory: (state) => state.chosenCategory,
      categories: (state) => state.categories,
    }),
  },
  methods: {
    ...mapActions([
      'setChosenCategory',
    ]),
    getImageName(categoryName) {
      return `@assets/${categoryName}.png`;
    },
  },
};
</script>

<style>

</style>
