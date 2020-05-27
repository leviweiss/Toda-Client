
module.exports = {
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      sass: {
        prependData: '@import \'@/styles/styles.scss\';'
      }
    }
  }
}
