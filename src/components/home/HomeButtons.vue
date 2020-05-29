<template>
  <div id="home-buttons" class="home-buttons-container">
    <!-- <div v-show="chosenCategory != undefined" class="home-buttons-container__buttons"> -->
    <div class="home-buttons-container__buttons">
      <button class="home-buttons-container__buttons__coupon"
      @click="setChosenHomeButton('coupon')"
      :class="{'home-buttons-container__buttons__coupon--active': chosenHomeButton === 'coupon'}">
        Coupons
      </button>
      <button class="home-buttons-container__buttons__business"
      @click="setChosenHomeButton('business')"
      :class="{'home-buttons-container__buttons__business--active': chosenHomeButton === 'business'}">
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
      chosenHomeButton: (state) => state.chosenHomeButton,
    }),
  },
  methods: {
    ...mapActions([
      'setChosenHomeButton',
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
