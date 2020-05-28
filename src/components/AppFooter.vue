<template>
  <div id="app-footer" class="app-footer-container">
    <footer class="app-footer-container__main">
      Contact
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style lang="scss">
.app-footer-container {
  &__main {
    position: absolute;
    bottom: 0;
    background-color: #82a6cd;
    text-align: center;
    font-size: $medium-large-font;
    padding: 0.7%;
    width: 100%;
  }
}
</style>
