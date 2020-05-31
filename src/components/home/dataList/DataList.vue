<template>
  <div id="data-list" class="data-list-container">
    <data-coupons v-bind:coupons="couponsByCategory" v-show="chosenHomeButton === 'coupon'"/>
    <data-businesses v-show="chosenHomeButton === 'business'"/>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
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
    ...mapGetters({
      couponsByCategory: 'couponsByCategory',
    }),
  },
};
</script>

<style lang="scss">

</style>
