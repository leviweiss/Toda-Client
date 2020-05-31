<template>
  <div id="data-coupons" class="data-coupons-container">
    <div class="data-coupons-container__coupon" v-for="coupon in coupons" :key="coupon.id"
    @click="openCouponModal(coupon)">
      <coupon v-bind="coupon"/>
    </div>
    <coupon-modal v-if="showCouponModal" @close="closeCouponModal"/>
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
  props: ['coupons'],
  components: {
    Coupon,
    CouponModal,
  },
  computed: {
    ...mapState({
      showCouponModal: (state) => state.showCouponModal,
    }),
    ...mapGetters({
      allCouponsInfo: 'allCouponsInfo',
      couponsByCategory: 'couponsByCategory',
    }),
  },
  methods: {
    ...mapActions([
      'openCouponModal',
      'closeCouponModal',
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
    width: (100% / 3) - 5%;
    margin-right: 1%;
    margin-left: 1%;
  }
}

</style>
