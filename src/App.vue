<template>
  <div id="app" class="app-container">
    <header class="app-container__header">
      <app-nav></app-nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import AppNav from './components/AppNav.vue';

export default {
  name: 'App',
  components: {
    AppNav,
  },
};
</script>

<style lang="scss">
// .app-container {

// }

</style>
