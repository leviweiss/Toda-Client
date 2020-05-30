<template>
  <transition id="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click.stop="wrapperClick">
        <div class="modal-container" @click.stop>
          <div class="modal-container__header-section">
            <div class="modal-container__header-section__header">
              Add New Group
            </div>
            <div class="modal-container__header-section__close-icon" @click.prevent="closeElementClick">
              <i class="fa fa-times"/>
            </div>
          </div>
          <div class="modal-container__body">
            <form id="form">
              <div class="modal-container__body__group-name">
                <label class="modal-container__body__group-name__label" for="group-name">Group name:</label><br>
                <input class="modal-container__body__group-name__text" type="text" id="group-name" name="group-name"
                  placeholder="enter group name" minlength="1" maxlength="12" size="12" v-model="groupName"><br>
                <label class="modal-container__body__group-name__size" for="group-name">
                  {{ groupName.length }}
                </label><br>
                <label class="modal-container__body__group-name__max-size" for="group-name">Max size: 12</label><br>
              </div>
              <div v-show="showErrorMessage" class="modal-container__body__error-message">
                {{ errorMessage }}
              </div>
            </form>
          </div>
          <div class="modal-container__footer">
            <button class="modal-container__footer__button"
            :class="{'modal-container__footer__button--disable': showErrorMessage}"
            @click.prevent="AddGroup" :disabled="showErrorMessage">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
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
  data() {
    return {
      groupName: '',
      errorMessage: 'group name must not be empty',
    };
  },
  computed: {
    showErrorMessage() {
      return this.groupName.length === 0;
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
    AddGroup() {
      this.$emit('add', this.groupName);
      this.$emit('close');
      this.groupName = '';
    },
  },
};
</script>

<style lang="scss">
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

.modal-container {
  width: 480px;
  height: 180px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: $light-grey;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.795);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;

  @include flex-column;
  justify-content: space-between;

  &__header-section {
    @include flex-row;

    &__header {
      font-weight: bold;
      font-size: 30px;
      margin: auto;
    }

    &__close-icon {
      cursor: pointer;
    }
  }

  &__body {
    align-self: center;

    &__group-name {
        @include flex-row;
        margin-bottom: 3px;

        &__label {
          font-size: 26px;
          margin-right: 10px;
        }

        &__text {
          margin-right: 4px;
          font-size: 18px;
        }

        &__size {
          font-size: 18px;
          align-self: center;
          margin-right: 10px;
        }

        &__max-size {
          font-size: 18px;
          align-self: center;
        }
    }

    &__error-message {
      font-size: 18px;
      color: red;
    }
  }

  &__footer {
    align-self: center;

    &__button {
      font-size: 22px;
      font-weight: bold;
      background-color: $light-grey;

      &:disabled {
        font-weight: normal;
        background-color: $light-grey;
      }
    }
  }
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
