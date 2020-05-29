<template>
  <div id="data-list" class="data-list-container">
    <data-coupons v-show="chosenHomeButton === 'coupon'"/>
    <data-businesses v-show="chosenHomeButton === 'business'"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import DataBusinesses from './DataBusinesses.vue';
import DataCoupons from './DataCoupons.vue';

export default {
  name: 'data-list',
  components: {
    DataBusinesses,
    DataCoupons,
  },
  computed: {
    ...mapState({
      chosenHomeButton: (state) => state.chosenHomeButton,
    }),
  },
};
</script>

<style lang="scss">

</style>
