module.exports = function(config) {
  config.set({
      frameworks: ['jasmine'], // ou 'mocha', selon votre préférence
      files: [
          // vos fichiers de test
      ],
      browsers: ['ChromeHeadless'], // Utiliser Chrome en mode headless
      // Autres configurations
  });
};
