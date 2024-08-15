module.exports = function (config) {
  config.set({
    singleRun: true,
    autoWatch: false,
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/',
    },
  });
};
