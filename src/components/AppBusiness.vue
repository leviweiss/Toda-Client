<template>
  <div id="app-business" class="app-business-container">
    <div class="app-business-container__top">
      <img src="../assets/business.png" alt="NotFound" class="app-business-container__top__image"/>
      <div class="app-business-container__top__about">
      </div>
    </div>
    <data-coupons v-bind:coupons="getCouponsByBusinessId(this.$route.params.id)"
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
  components: {
    DataCoupons,
  },
  computed: {
    ...mapGetters({
      getCouponsByBusinessId: 'getCouponsByBusinessId',
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

    &__image {
      width: 30%;
      margin: 2%;
    }

    &__about {
      margin: 2%;
      font-size: $medium-font;
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
