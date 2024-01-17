module.exports = function (config) {
  config.set({
    plugins: ['karma-coverage'],
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: path.join(__dirname, './coverage/<project-name>'),
      subdir: '.',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'lcov', subdir: 'lcov' },
        { type: 'text-summary' },
      ],
      check: {
        global: {
          statements: 95,
          branches: 95,
          functions: 95,
          lines: 95,
        },
      },
    },
  })
}
