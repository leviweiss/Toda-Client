<template>
  <nav id="app-nav" class="app-nav-container">
    <img src="../assets/logo.png" class="app-nav-container__logo" @click="goToHome"/>
    <router-link to="about-us" class="app-nav-container__about-us">
      About us
    </router-link>
    <router-link to="coupons" class="app-nav-container__coupons">
      Coupons
    </router-link>
    <router-link to="businesses" class="app-nav-container__businesses">
      Businesses
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'AppNav',
  methods: {
    goToHome() {
      this.$router.push('home');
    },
  },
};
</script>

<style lang="scss">
.app-nav-container {
  background-color: blue;
  @include flex-row;
  margin-bottom: 1%;
  justify-content: space-around;
  align-items: center;

  &__logo {
    color: white;
    width: 10%;
    cursor: pointer;
  }

  &__about-us {
    color: white;
    text-decoration: none;
    font-size: $large-font;
  }

  &__coupons {
    color: white;
    text-decoration: none;
    font-size: $large-font;
  }

  &__businesses {
    color: white;
    text-decoration: none;
    font-size: $large-font;
  }
}

</style>
