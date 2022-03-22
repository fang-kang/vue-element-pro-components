const { resolve, getComponentEntries } = require("./utils");

module.exports = {
  outputDir: resolve("lib"),
  configureWebpack: {
    entry: {
      ...getComponentEntries("packages"),
    },
    output: {
      filename: "[name].js",
      libraryTarget: "commonjs2",
      libraryExport: "default",
      library: "vue-element-pro-components",
    },
  },
  // css: {
  //   sourceMap: false,
  //   extract: {
  //     filename: "style/[name].css",
  //   },
  // },
  css: { extract: false },
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("examples"))
      .set("packages", resolve("packages"));
    config.optimization.delete("splitChunks");
    config.plugins.delete("copy");
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
    config.plugins.delete("html");
    config.plugins.delete("hmr");
    config.entryPoints.delete("app");
    config.module
      .rule("js")
      .include.add(/packages/)
      .end()
      .include.add(/examples/)
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        // 修改它的选项...
        return options;
      });
    config.module
      .rule("fonts")
      .use("url-loader")
      .tap((option) => {
        option.fallback.options.name = "static/fonts/[name].[hash:8].[ext]";
        return option;
      });
  },
};
