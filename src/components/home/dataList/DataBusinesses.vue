<template>
  <div id="data-list" class="data-list-container">
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'data-list',
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
  },
};
</script>

<style lang="scss">

</style>
