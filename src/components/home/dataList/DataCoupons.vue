<template>
  <div id="data-coupons" class="data-coupons-container">
    <div class="data-coupons-container__coupon" v-for="coupon in coupons" :key="coupon.id"
    @click="openCouponModal(coupon.id)">
      <img :src="images[category.id]" alt="NotFound" class="data-coupons-container__coupon__image"/>
    </div>
    <coupon-modal v-show="showCouponModal" @close="closeCouponModal"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'data-coupons',
  computed: {
    ...mapState({
      showCouponModal: (state) => state.showCouponModal,
      coupons: (state) => state.coupons,
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

</style>
