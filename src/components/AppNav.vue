<template>
  <nav id="app-nav" class="app-nav-container">
    <img src="../assets/logo.png" class="app-nav-container__logo" @click="goToHome"/>
    <div class="app-nav-container__links">
      <router-link to="/" class="app-nav-container__links__home">
        Home
      </router-link>
      <router-link to="coupons" class="app-nav-container__links__coupons">
        Coupons
      </router-link>
      <router-link to="businesses" class="app-nav-container__links__businesses">
        Businesses
      </router-link>
      <router-link to="about-us" class="app-nav-container__links__about-us">
        About-Us
      </router-link>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'AppNav',
  computed: {
    ...mapState({
      activeTab: (state) => state.activeTab,
    }),
  },
  methods: {
    goToHome() {
      this.$router.push('/');
    },
    ...mapActions([
      'setActiveTab',
    ]),
  },
};
</script>

<style lang="scss">
.app-nav-container {
  background: linear-gradient(180deg,#0b2677,#19549b);
  @include flex-row;
  align-items: center;
  font-family: $comic-font-family;
  padding: 0.8%;

  &__logo {
    color: white;
    width: 10%;
    cursor: pointer;
    margin-right: 3%;
  }

  &__links {
    @include flex-row;
    align-items: center;
    width: 90%;

    .router-link-exact-active {
      opacity: 1;
    }

    &__home {
      color: white;
      text-decoration: none;
      font-size: $large-font;
      margin-right: 2%;
      opacity: 0.5;

      &:hover {
        opacity: 1;
      }

      &--active {
        opacity: 1;
      }

      .router-link-exact-active {
        opacity: 1;
      }
    }

    &__coupons {
      color: white;
      text-decoration: none;
      font-size: $large-font;
      margin-right: 2%;
      opacity: 0.5;

      &:hover {
        opacity: 1;
      }

      &--active {
        opacity: 1;
      }

      .router-link-exact-active {
        opacity: 1;
      }
    }

    &__businesses {
      color: white;
      text-decoration: none;
      font-size: $large-font;
      margin-right: 2%;
      opacity: 0.5;

      &:hover {
        opacity: 1;
      }

      &--active {
        opacity: 1;
      }
    }

    &__about-us {
      color: white;
      text-decoration: none;
      font-size: $large-font;
      margin-right: 2%;
      opacity: 0.5;

      &:hover {
        opacity: 1;
      }

      &--active {
        opacity: 1;
      }
    }
  }
}

</style>
