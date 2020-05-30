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
  background: $blue;
  @include flex-row;
  align-items: center;
  font-family: $comic-font-family;
  padding: 1.0%;

  &__logo {
    color: white;
    width: 8%;
    cursor: pointer;
    margin-right: 5%;
  }

  &__links {
    @include flex-row;
    align-items: center;
    width: 90%;

    .router-link-exact-active {
      opacity: 1;
    }

    &__home {
      @include nav-bar-element;
    }

    &__coupons {
      @include nav-bar-element;
    }

    &__businesses {
      @include nav-bar-element;
    }

    &__about-us {
      @include nav-bar-element;
    }
  }
}

</style>
