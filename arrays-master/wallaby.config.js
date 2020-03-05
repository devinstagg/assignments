module.exports = wallaby => ({
  files: [
    'src/**/*',
    'test/**/*',
    '!test/**/*.test.js',
  ],

  tests: [
    'test/**/*.test.js',
  ],

  env: {
    type: 'node',
    runner: 'node',
  },

  // testFramework: 'ava',

  setup: () => {
    require('babel-polyfill')
    require('./test/__helper')
  },

  compilers: {
    '**/*.js': wallaby.compilers.babel(),
  },
})
