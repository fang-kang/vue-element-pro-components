const utils = require('../build/utils')
module.exports = {
  resolve: ['.js', '.vue', '.json'],
  alias: {
    '@': utils.resolve('../src'),
    packages: utils.resolve('../packages'),
    lib: utils.resolve('../lib'),
    examples: utils.resolve('../examples'),
    src: utils.resolve('../src'),
    'vue-element-pro-components': utils.resolve('../')
  }
}
