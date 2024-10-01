module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'requirejs'],
   files: [
    // Your other file patterns...
    'test/unit/**/*.js' // Adjust if necessary
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
