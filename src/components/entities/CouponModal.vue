<template>
  <transition id="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click.stop="wrapperClick">
        <div class="modal-container" @click.stop>
          <div class="modal-container__close-icon" @click.prevent="closeElementClick">
            <i class="fa fa-times"/>
          </div>
          <div class="modal-container__info">
            <img :src="image" alt="NotFound" class="modal-container__info__image"/>
            <div class="modal-container__info__details">
              <div class="modal-container__info__details__name">
                {{ couponModalToShow.name }}
              </div>
              <div class="modal-container__info__details__description">
                {{ processesDescription }}
              </div>
              <div class="modal-container__info__details__phone">
                <img src="../../assets/couponModal/phone.png" alt="NotFound"
                class="modal-container__info__details__phone__icon"/>
                <div class="modal-container__info__details__phone__number">
                  {{ couponModalToShow.phoneNumber }}
                </div>
              </div>
              <div class="modal-container__info__details__address">
                {{ couponModalToShow.address }}
              </div>
              <div class="modal-container__info__details__link-to-business-home-page">
                Business Page
              </div>
            </div>
          </div>
          <div class="modal-container__prices">
            <div class="modal-container__prices__price-name">
              Price:
            </div>
            <div class="modal-container__prices__price-now">
              {{ couponModalToShow.priceNow }}
            </div>
            <div class="modal-container__prices__price-before">
              {{ couponModalToShow.priceBefore }}
            </div>
          </div>
          <div class="modal-container__buttons">
            <div class="modal-container__buttons__pay">
              Pay
            </div>
            <div class="modal-container__buttons__add-to-chart">
              Add To Chart
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import {
  mapState,
} from 'vuex';

const Business = require('../../assets/business.png');

export default {
  name: 'coupon-modal',
  mounted() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.$emit('close');
        this.groupName = '';
      }
    });
  },
  computed: {
    ...mapState({
      couponModalToShow: (state) => state.couponModalToShow,
    }),
    image() {
      return Business;
    },
    processesDescription() {
      const maxLength = 80;
      if (this.couponModalToShow.description.length > maxLength) {
        return `${this.couponModalToShow.description.substring(0, maxLength)}...`;
      }
      return this.couponModalToShow.description;
    },
  },
  methods: {
    wrapperClick() {
      this.$emit('close');
      this.groupName = '';
    },
    closeElementClick() {
      this.$emit('close');
      this.groupName = '';
    },
  },
};
</script>

<style lang="scss">
.modal-container {
  width: 50%;
  height: 70%;
  margin: 0px auto;
  padding: 1% 1%;
  background-color: $light-grey;
  // border-radius: 5px;
  transition: all 0.3s ease;
  @include flex-column;
  background: url('../../assets/couponModal/background.jpg');
  background-size: contain;
  // background-size: 90%;
  background-repeat: no-repeat;

  &__info {
    @include flex-row;
    margin: 2.5% 7% 3% 3%;
    border: solid 3px red;

    &__image {
      width: 40%;
      margin-right: 0.5%;
      padding: 0.5%;
      background: $light-orange;
      border: solid 3px green;
    }

    &__details {
      width: 60%;
      margin-left: 0.5%;
      padding: 0.5%;
      border: solid 3px green;
      @include flex-column;
      justify-content: space-between;

      &__name {
        font-size: $medium-large-font;
        font-weight: bold;
        color: $blue;
        border: solid 3px red;
      }

      &__description {
        font-size: $small-medium-font;
        border: solid 3px red;
      }

      &__phone {
        @include flex-row;

        &__icon {
          width: 10%;
          border: solid 3px red;
        }

        &__number {
          border: solid 3px red;
          padding: 1%;
        }
      }


      &__address {

      }

      &__link-to-business-home-page {

      }
    }
  }
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.664);
  display: table;
  transition: opacity 0.0s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
