const pub = require("./config.pub");

module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: "examples/main.js",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },
  configureWebpack: {
    resolve: pub.resolve,
  },
};
