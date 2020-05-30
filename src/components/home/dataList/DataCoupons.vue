<template>
  <div id="data-coupons" class="data-coupons-container">
    <div class="data-coupons-container__coupon" v-for="coupon in allCouponsInfo" :key="coupon.id"
    @click="openCouponModal(coupon)">
      <coupon v-bind="coupon"/>
    </div>
    <coupon-modal v-show="showCouponModal" @close="closeCouponModal"/>
  </div>
</template>

<script>

import {
  mapState,
  mapActions,
  mapGetters,
} from 'vuex';

import Coupon from '../../entities/Coupon.vue';
import CouponModal from '../../entities/CouponModal.vue';

export default {
  name: 'data-coupons',
  components: {
    Coupon,
    CouponModal,
  },
  beforeMount() {
    return this.getAllData();
  },
  computed: {
    ...mapState({
      showCouponModal: (state) => state.showCouponModal,
    }),
    ...mapGetters({
      allCouponsInfo: 'allCouponsInfo',
    }),
  },
  methods: {
    ...mapActions([
      'openCouponModal',
      'closeCouponModal',
      'getAllData',
    ]),
  },
};
</script>

<style lang="scss">
.data-coupons-container {
  @include flex-row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;

  &__coupon {
    margin-bottom: 3%;
  }
}

</style>
