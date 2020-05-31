<template>
  <div id="app" class="app-container">
    <header class="app-container__header">
      <app-nav/>
    </header>
    <main class="app-container__main">
      <router-view></router-view>
    </main>
    <app-footer class="app-container__footer"/>
  </div>
</template>

<script>
import AppNav from './components/AppNav.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  mounted() {
    document.title = 'Toda';
  },
  components: {
    AppNav,
    AppFooter,
  },
};
</script>

<style lang="scss">
@import './styles/normalize.css';
* {
  box-sizing: border-box;
}

.app-container {
  @include flex-column;
  font-family: $heebo-font-family;

  &__main {
    margin-bottom: 5%;
  }
}

</style>
