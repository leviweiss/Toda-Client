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
    left: 8px;
    right: 8px;
    text-align: center;
    font-size: $medium-large-font;
    padding: 0.4%;
  }
}
</style>
