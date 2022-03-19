const path = require("path");

module.exports = {
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve("src"),
        pkgs: path.resolve("packages"),
      },
    },
  },
  // 强制内联CSS
  css: { extract: false },
  productionSourceMap: false,
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: (config) => {
    config.module
      .rule("js")
      .include.add("/packages")
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        // 修改它的选项...
        return options;
      });
  },
};
