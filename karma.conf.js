module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['qunit'],
    files: [
      'webapp/test/unit/**/*.js',
      'webapp/**/*.js'
    ],
    exclude: [],
    preprocessors: {
      'webapp/**/*.js': ['coverage']
    },
    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    }
  });
};
