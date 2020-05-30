<template>
  <div id="business" class="business-container">
    <img :src="image" alt="NotFound" class="business-container__image"/>
    <div class="business-container__info">
      <div class="business-container__info__name">
        {{ name }}
      </div>
      <div class="business-container__info__description">
        {{ processesDescription }}
      </div>
    </div>
  </div>
</template>

<script>
const Business = require('../../assets/business.png');

export default {
  name: 'business',
  props: {
    id: Number,
    name: String,
    description: String,
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
.business-container {
  width: 100%;
  @include flex-column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: $light-orange;
  border-radius: 5px;
  box-shadow: 0 0px 8px rgb(0, 0, 0);
  height: 300px;

  &__image {
    width: 100%;
    height: 50%;
    text-align: center;
    margin: 1% 1% 4% 1%;
    padding: 1.0% 4.0%;
    background: $light-orange;
  }

  &__info {
    height: 50%;
    width: 100%;
    @include flex-column;

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
      padding: 8% 0;
      flex: 1;
      font-size: $small-medium-font;
    }
  }
}
</style>
