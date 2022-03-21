module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "component",
      {
        libraryName: "vue-element-pro-components",
        libDir: "lib",
        style: false,
      },
    ],
  ],
};
