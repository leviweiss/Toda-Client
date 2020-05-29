<template>
  <div id="home-dropdowns" class="home-buttons-container">
    <select @change="filter1OnChange($event)"
    class="home-buttons-container__filter1">
      <option  value="">filter1...</option>
      <option v-for="n in 10" :key="n">
        {{ n }}
      </option>
    </select>
    <select @change="filter2OnChange($event)"
    class="home-buttons-container__filter2">
      <option  value="">filter2...</option>
      <option v-for="n in 10" :key="n">
        {{ n }}
      </option>
    </select>
    <select @change="filter3OnChange($event)"
    class="home-buttons-container__filter3">
      <option  value="">filter3...</option>
      <option v-for="n in 10" :key="n">
        {{ n }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'home-dropdowns',
  computed: {
    ...mapState({
      fitler1Value: (state) => state.fitler1Value,
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
    @include home-dropdown;
  }

  &__filter2 {
    @include home-dropdown;
  }

  &__filter3 {
    @include home-dropdown;
  }
}

</style>
