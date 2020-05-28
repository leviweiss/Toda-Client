<template>
  <div id="home-categories" class="home-categories-container">
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'home-categories',
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
