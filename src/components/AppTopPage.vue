<template>
  <div id="app-top-page" class="app-top-page-container">
    <div class="app-top-page-container__counter">
      Counter
    </div>
    <div class="app-top-page-container__center">
      <h1 class="app-top-page-container__center__header">
        Small Step Big Smile
      </h1>
      <input type="text" class="app-top-page-container__center__search-bar">
    </div>
    <button class="app-top-page-container__cart">
      Cart
    </button>
  </div>
</template>

<script>
export default {
  name: 'AppTopPage',
};
</script>

<style lang="scss">
.app-top-page-container {
  @include flex-row;
  justify-content: space-between;
  background: $cayn;
  align-items: center;

  &__counter {
    width: 15%;
    height: 40px;
    padding: 9px;
    text-align: center;
    font-size: 20px;
    background-color: gray;
    margin: 1%;
  }

  &__center {
    width: 70%;
    align-items: center;
    @include flex-column;
    margin: 1%;

    &__header {
      text-align: center;
      color: white;
      font-size: $medium-large-font;
      margin: 1%;
    }

    &__search-bar {
      text-align: center;
      border-radius: 30px;
      font-size: $medium-font;
      margin: 1%;
      width: 50%;
      &:focus {
        outline:0;
      }
    }
  }

  &__cart {
    width: 15%;
    font-size: 20px;
    text-align: center;
    margin: 1%;
    background-color: gray;
    font-family: $comic-font-family;
    &:focus {
      outline:0;
    }
  }
}

</style>
