<template>
  <div id="home-dropdowns" v-show="chosenCategory !== undefined" class="home-buttons-container">
    <div class="home-buttons-container__filter1">
      <select @change="filter1OnChange($event)" class="home-buttons-container__filter1__select">
        <option>
          filter1...
        </option>
        <option v-for="n in 10" :key="n">
          {{ n }}
        </option>
      </select>
    </div>
    <div class="home-buttons-container__filter2">
      <select @change="filter2OnChange($event)" class="home-buttons-container__filter2__select">
        <option>
          filter2...
        </option>
        <option v-for="n in 10" :key="n">
          {{ n }}
        </option>
      </select>
    </div>
    <div class="home-buttons-container__filter3">
      <select @change="filter3OnChange($event)" class="home-buttons-container__filter3__select">
        <option class="home-buttons-container__filter3__option">
          filter3...
        </option>
        <option class="home-buttons-container__filter3__option" v-for="n in 10" :key="n">
          {{ n }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'home-dropdowns',
  computed: {
    ...mapState({
      fitler1Value: (state) => state.fitler1Value,
      chosenCategory: (state) => state.chosenCategory,
    }),
  },
  methods: {
    ...mapActions([
      'filter1OnChange',
    ]),
  },
};
</script>

<style lang="scss">
.home-buttons-container {
  @include flex-row;
  justify-content: center;
  align-items: center;

  &__filter1 {
    position: relative;
    width: 12%;
    margin-right: 3%;
    margin-left: 3%;

    &__select {
      @include home-dropdown;
    }
  }

  &__filter2 {
    position: relative;
    width: 12%;
    margin-right: 3%;
    margin-left: 3%;

    &__select {
      @include home-dropdown;
    }
  }

  &__filter3 {
    position: relative;
    width: 12%;
    margin-right: 3%;
    margin-left: 3%;

    &__select {
      @include home-dropdown;
    }
  }
}

</style>
