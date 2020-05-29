<template>
  <div id="home-categories" class="home-categories-container">
    <div class="home-categories-container__category" v-for="category in categories" :key="category.id"
    @click="setChosenCategory(category.id)"
    :class="{'home-categories-container__category--chosen': chosenCategory === category.id}">
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
  justify-content: center;
  align-items: center;
  width: 90%;

  &__category {
    width: (100% / 8) - 5%;
    text-align: center;
    border: solid 3px $basic-blue;
    border-radius: $small-border-radius;
    cursor: pointer;
    opacity: 0.5;
    margin-right: 1%;
    margin-left: 1%;

    &:hover {
      opacity: 1;
    }
    &--chosen {
      opacity: 1;
    }

    &__image {
      width: 100%;
    }
  }
}

</style>
