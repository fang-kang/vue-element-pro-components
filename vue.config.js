const devConfig = require("./build/config.dev");
const buildConfig = require("./build/config.build");

module.exports =
  process.env.NODE_ENV === "development" ? devConfig : buildConfig;
