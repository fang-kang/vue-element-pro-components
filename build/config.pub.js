const utils = require("./utils");

module.exports = {
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      src: utils.resolve("src"),
      packages: utils.resolve("packages"),
      "vue-element-pro-components": utils.resolve("packages/index.js"),
    },
  },
};
