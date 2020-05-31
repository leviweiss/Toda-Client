<template>
  <div id="app-footer" class="app-footer-container">
    <footer class="app-footer-container__main">
      This website was developed by students who care. Toda, digitally transformation for SMBs
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
    position: fixed;
    bottom: 0;
    background-color: $cayn;
    text-align: center;
    font-size: $medium-large-font;
    padding: 0.7%;
    width: 100%;
    color: white;
    font-weight: bold;
  }
}
</style>
