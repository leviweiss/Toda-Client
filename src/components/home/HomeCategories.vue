<template>
  <div id="home-categories" class="home-categories-container">
    <div class="home-categories-container__category" v-for="category in categories" :key="category.id"
    @click="setChosenCategory(category.id)"
    :class="{'home-categories-container__category--chosen': chosenCategory === category.id}">
      <img :src="images[category.id - 1]" alt="NotFound" class="home-categories-container__category__image"/>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

const PleasureAndVacation = require('../../assets/pleasure&vacation.png');
const Professional = require('../../assets/professional.png');
const Store = require('../../assets/store.png');
const TakeawayAndRestaurant = require('../../assets/takeaway&restaurant.png');
const Business = require('../../assets/business.png');
const AlternativeMedicine = require('../../assets/alternative-medicine.png');
const FashionBeauty = require('../../assets/fashion&beauty.png');


export default {
  name: 'home-categories',
  computed: {
    ...mapState({
      chosenCategory: (state) => state.chosenCategory,
      categories: (state) => state.categories,
    }),
    images() {
      return [
        PleasureAndVacation,
        Professional,
        Store,
        TakeawayAndRestaurant,
        AlternativeMedicine,
        Business,
        FashionBeauty];
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
  background: linear-gradient(to bottom, $cayn 50%, white 50%);

  &__category {
    width: (100% / 7) - 5%;
    text-align: center;
    border: solid 2px $basic-blue;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.5;
    margin-right: 1%;
    margin-left: 1%;
    background: $light-orange;
    padding: 1%;

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
