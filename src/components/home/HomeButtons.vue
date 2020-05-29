<template>
  <div id="home-buttons" class="home-buttons-container">
    <!-- <div v-show="chosenCategory != undefined" class="home-buttons-container__buttons"> -->
    <div class="home-buttons-container__buttons">
      <button class="home-buttons-container__buttons__coupon">
        Coupons
      </button>
      <button class="home-buttons-container__buttons__business">
        Businesses
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'home-buttons',
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

<style lang="scss">
.home-buttons-container {
  &__buttons {
    @include flex-row;
    justify-content: center;
    align-items: center;

    &__coupon {
      @include home-button;
    }

    &__business {
      @include home-button;
    }
  }
}

</style>
