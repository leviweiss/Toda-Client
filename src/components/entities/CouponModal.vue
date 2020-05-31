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
                <img src="../../assets/couponModal/address.png" alt="NotFound"
                class="modal-container__info__details__address__icon"/>
                <div class="modal-container__info__details__address__name">
                  {{ couponModalToShow.address }}
                </div>
              </div>
              <button class="modal-container__info__details__link-to-business-home-page"
              @click.prevent="linkToBusinessHomePageClick">
                Business Page
              </button>
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
            <button class="modal-container__buttons__pay">
              Checkout
            </button>
            <button class="modal-container__buttons__add-to-cart">
              Add To Cart
            </button>
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
    },
    closeElementClick() {
      this.$emit('close');
    },
    linkToBusinessHomePageClick() {
      this.$router.push({ path: `/business/${this.couponModalToShow.businessId}` });
      this.$emit('close');
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

    &__image {
      width: 40%;
      margin-right: 3%;
      padding: 0.5%;
      background: $light-orange;
    }

    &__details {
      width: 60%;
      margin-left: 0.5%;
      @include flex-column;
      justify-content: space-between;

      &__name {
        font-size: $large-font;
        font-weight: bold;
        color: $blue;
      }

      &__description {
        font-size: $small-medium-font;
        padding: 10% 0 5%;
        margin-bottom: 5%;
      }

      &__phone {
        @include flex-row;
        align-items: center;

        &__icon {
          width: 7%;
          height: 70%;
          margin-right: 1%;
        }

        &__number {
          padding: 1%;
          font-size: $medium-font;
          width: 90%;
        }
      }

      &__address {
        @include flex-row;
        align-items: center;

        &__icon {
          width: 7%;
          height: 70%;
          margin-right: 1%;
        }

        &__name {
          padding: 1%;
          font-size: $medium-font;
          width: 90%;
        }
      }

      &__link-to-business-home-page {
        background: $light-orange;
        width: 50%;
        padding-top: 2%;
        padding-bottom: 2%;
        font-size: $medium-font;
        border: none;
        cursor: pointer;
        &:focus {
          outline: 0;
        }
      }
    }
  }

  &__prices {
    @include flex-row;
    margin: 2.5% 7% 3% 3%;

    &__price-name {
      font-size: $medium-large-font;
      margin-right: 3%;
      color: $blue;
      font-weight: bold;
    }

    &__price-now {
      font-size: $medium-large-font;
      margin-left: 1%;
      margin-right: 3%;
      color: $blue;
      font-weight: bold;
    }

    &__price-before {
      font-size: $medium-large-font;
      margin-left: 3%;
      text-decoration: line-through $light-orange;
      color: $orange;
      font-weight: bold;
    }
  }

  &__buttons {
    @include flex-row;
    margin: 2.5% 7% 3% 3%;

    &__pay {
      background: $blue;
      padding-top: 2%;
      padding-bottom: 2%;
      width: 30%;
      border: none;
      color: white;
      border-radius: 5px;
      margin-right: 3%;
      font-size: $medium-font;
      cursor: pointer;
      &:focus {
        outline: 0;
      }
    }

    &__add-to-cart {
      background: $blue;
      padding-top: 2%;
      padding-bottom: 2%;
      width: 30%;
      border: none;
      color: white;
      font-size: $medium-font;
      border-radius: 5px;
      cursor: pointer;
      &:focus {
        outline: 0;
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
