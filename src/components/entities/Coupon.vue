<template>
  <div id="coupon" class="coupon-container">
    <img :src="image" alt="NotFound" class="coupon-container__image"/>
    <div class="coupon-container__info">
      <div class="coupon-container__info__name">
        {{ name }}
      </div>
      <div class="coupon-container__info__description">
        {{ processesDescription }}
      </div>
      <div class="coupon-container__info__prices">
        <div class="coupon-container__info__prices__price-name">
          Price:
        </div>
        <div class="coupon-container__info__prices__price-now">
          {{ priceNow }}
        </div>
        <div class="coupon-container__info__prices__price-before">
          {{ priceBefore }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const Business = require('../../assets/business.png');

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
      return Business;
    },
    processesDescription() {
      const maxLength = 80;
      if (this.description.length > maxLength) {
        return `${this.description.substring(0, maxLength)}...`;
      }
      return this.description;
    },
  },
};
</script>

<style lang="scss">
.coupon-container {
  width: 100%;
  @include flex-row;
  cursor: pointer;
  background-color: $light-grey;
  border-radius: 5px;
  box-shadow: 0 0px 8px rgb(0, 0, 0);

  &__image {
    width: 35%;
    text-align: center;
    margin: 1%;
    padding: 0.3%;
    background: $light-orange;
  }

  &__info {
    width: 65%;
    @include flex-column;
    justify-content: space-between;
    border-right: 4px solid $cayn;

    &__name {
      text-align: center;
      margin: 1%;
      padding: 1%;
      font-size: $medium-font;
      font-weight: bold;
      color: $blue;
    }

    &__description {
      text-align: center;
      margin: 1%;
      padding: 6% 0;
      flex: 1;
      font-size: $small-medium-font;
    }

    &__prices {
      text-align: center;
      @include flex-row;
      justify-content: center;
      align-items: center;
      padding: 1%;
      margin: 1%;

      &__price-name {
        font-size: $small-medium-font;
        margin-right: 3%;
        color: $blue;
        font-weight: bold;
      }

      &__price-now {
        font-size: $small-medium-font;
        margin-left: 3%;
        margin-right: 3%;
        color: $blue;
        font-weight: bold;
      }

      &__price-before {
        font-size: $small-medium-font;
        margin-left: 3%;
        text-decoration: line-through $light-orange;;
        color: $orange;
        font-weight: bold;
      }
    }
  }
}
</style>
