<template>
  <div id="coupon" class="coupon-container">
    <div class="coupon-container__info">
      <div class="coupon-container__info__name">
        {{ name }}
      </div>
      <div class="coupon-container__info__description">
        {{ processesDescription }}
      </div>
      <div class="coupon-container__info__prices">
        <div class="coupon-container__info__prices__price-now">
          {{ priceNow }}
        </div>
        <div class="coupon-container__info__prices__price-before">
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
    processesDescription() {
      const maxLength = 60;
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
  border: solid 3px red;
  background-color: $light-grey;
  border-radius: 5px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.795);

  &__info {
    width: 70%;
    @include flex-column;
    justify-content: space-between;

    &__name {
      text-align: left;
      border: solid 3px green;
      margin: 1%;
      padding: 1%;
      font-size: $medium-font;
      font-weight: bold;
    }

    &__description {
      text-align: center;
      border: solid 3px green;
      margin: 1%;
      padding: 1%;
      flex: 1;
      font-size: $small-font;
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
        border: solid 3px red;
      }

      &__price-before {
        border: solid 3px red;
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
