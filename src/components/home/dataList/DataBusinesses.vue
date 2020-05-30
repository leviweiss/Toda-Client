<template>
  <div id="data-businesses" class="data-businesses-container">
    <div class="data-businesses-container__business" v-for="business in allBusinessesInfo" :key="business.id"
    @click="openBusinessModal(business)">
      <business v-bind="business"/>
    </div>
    <business-modal v-show="showBusinessModal" @close="closeBusinessModal"/>
  </div>
</template>

<script>

import {
  mapState,
  mapActions,
  mapGetters,
} from 'vuex';

import Business from '../../entities/Business.vue';
import BusinessModal from '../../entities/BusinessModal.vue';

export default {
  name: 'data-coupons',
  components: {
    Business,
    BusinessModal,
  },
  beforeMount() {
    return this.getAllData();
  },
  computed: {
    ...mapState({
      showBusinessModal: (state) => state.showBusinessModal,
    }),
    ...mapGetters({
      allBusinessesInfo: 'allBusinessesInfo',
    }),
  },
  methods: {
    ...mapActions([
      'openBusinessModal',
      'closeBusinessModal',
      'getAllData',
    ]),
  },
};
</script>

<style lang="scss">
.data-businesses-container {
  @include flex-row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-right: 8%;
  margin-left: 8%;

  &__business {
    margin-bottom: 3%;
    width: 18%;
    margin-right: 3%;
    margin-left: 3%;
  }
}

</style>
