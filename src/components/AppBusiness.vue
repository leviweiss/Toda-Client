<template>
  <div id="app-business" class="app-business-container">
    <div class="app-business-container__top">
      <img src="../assets/business.png" alt="NotFound" class="app-business-container__top__image"/>
      <div class="app-business-container__top__about">
        {{ getBusinessById(businessId).description }}
      </div>
    </div>
    <data-coupons v-bind:coupons="getCouponsByBusinessId(businessId)"
    class="app-business-container__bottom"/>
  </div>
</template>

<script>
import {
  mapGetters,
} from 'vuex';

import DataCoupons from './home/dataList/DataCoupons.vue';

export default {
  name: 'app-business',
  data() {
    return {
      businessId: this.$route.params.id,
    };
  },
  components: {
    DataCoupons,
  },
  computed: {
    ...mapGetters({
      getCouponsByBusinessId: 'getCouponsByBusinessId',
      getBusinessById: 'getBusinessById',
    }),
  },
};
</script>

<style lang="scss">
.app-business-container {
  @include flex-column;
  justify-content: center;
  align-items: center;

  &__top {
    margin: 2%;
    text-align: center;

    &__image {
      width: 20%;
      text-align: center;
    }

    &__about {
      margin: 1% auto 2%;
      font-size: $medium-font;
      width: 40%;
    }
  }

  &__bottom {
    flex-wrap: wrap;
    justify-content: space-around;

    &__coupons {

    }
  }
}

</style>
