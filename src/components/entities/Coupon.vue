<template>
  <div id="coupon" class="coupon-container">
    <div class="coupon-container__info">
      <div class="coupon-container__info__name">
        {{ name }}
      </div>
      <div class="coupon-container__info__description">
        {{ description }}
      </div>
      <div class="coupon-container__info__prices">
        <div class="coupon-container__info__price-now">
          {{ priceNow }}
        </div>
        <div class="coupon-container__info__price-before">
          {{ priceBefore }}
        </div>
      </div>
    </div>
    <img :src="image" alt="NotFound" class="coupon-container__image"/>
  </div>
</template>

<script>
const Businesses = require('../../assets/Businesses.png');

export default {
  name: 'coupon',
  props: {
    id: Number,
    name: String,
    description: String,
    priceNow: String,
    priceBefore: String,
  },
  computed: {
    image() {
      return Businesses;
    },
  },
};
</script>

<style lang="scss">
.coupon-container {
  width: 100%;
  @include flex-row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: solid 3px red;
  background: $blue-linear-gradient;

  &__info {
    width: 70%;
    @include flex-column;

    &__name {
      text-align: center;
      border: solid 3px green;
      margin: 1%;
      padding: 1%;
    }

    &__description {
      text-align: center;
      border: solid 3px green;
      margin: 1%;
      padding: 1%;
    }

    &__prices {
      text-align: center;
      @include flex-row;
      justify-content: center;
      align-items: center;
      border: solid 3px green;
      margin: 1%;
      padding: 1%;

      &__price-now {
        border: solid 3px green;
      }

      &__price-before {
        border: solid 3px green;
      }
    }
  }

  &__image {
    width: 30%;
    text-align: center;
    border: solid 3px green;
    margin: 1%;
    padding: 1%;
  }
}

</style>
