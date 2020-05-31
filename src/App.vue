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
import { mapActions } from 'vuex';

import AppNav from './components/AppNav.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  beforeMount() {
    document.title = process.env.VUE_APP_TITLE || 'App';
    return this.getAllData();
  },
  components: {
    AppNav,
    AppFooter,
  },
  methods: {
    ...mapActions([
      'getAllData',
    ]),
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
