module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'requirejs'],
    files: [
      'test/unit/**/*.js',
      { pattern: 'webapp/**/*.js', included: false }
    ],
    reporters: ['progress', 'coverage', 'junit'],
    browsers: ['Chrome'],
    singleRun: true,
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },
    junitReporter: {
      outputDir: 'test-results',
      outputFile: 'junit-results.xml',
      useBrowserName: false
    }
  });
};
