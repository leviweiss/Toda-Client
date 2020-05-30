<template>
  <div id="coupon" class="coupon-container">
    <div class="coupon-container__description">
      {{ description }}
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
    description: String,
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

  &__description {
    width: 70%;
    text-align: center;
    border: solid 3px green;
    margin-right: 1%;
    margin-left: 1%;
  }

  &__image {
    width: 30%;
    text-align: center;
    border: solid 3px black;
    margin-right: 1%;
    margin-left: 1%;
  }
}

</style>
