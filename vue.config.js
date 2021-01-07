module.exports = {
  transpileDependencies: ["vuetify", "ui-loader"],
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/styles/style.scss";',
      },
    },
  },
};
