<template>
  <div id="home-categories" class="home-categories-container">
    <div class="home-categories-container__category" v-for="category in categories" :key="category.id">
      <img :src="images[category.id]" alt="NotFound" class="home-categories-container__category__image"/>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

const Businesses = require('../../assets/Businesses.png');
const Fashion = require('../../assets/Fashion&Beauty.png');
const Tourism = require('../../assets/Tourism&Vacation.png');

export default {
  name: 'home-categories',
  computed: {
    ...mapState({
      chosenCategory: (state) => state.chosenCategory,
      categories: (state) => state.categories,
    }),
    images() {
      return [Businesses, Fashion, Businesses, Tourism, Businesses, Tourism, Fashion, Fashion, Businesses];
    },
  },
  methods: {
    ...mapActions([
      'setChosenCategory',
    ]),
  },
};
</script>

<style lang="scss">
.home-categories-container {
  @include flex-row;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  &__category {
    width: (100% / 8) - 2%;
    text-align: center;
    border: solid 3px;

    &__image {
      width: 100%;
    }
  }
}

</style>
