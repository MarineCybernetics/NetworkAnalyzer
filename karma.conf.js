module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    reporters: ['junit'],
    autoWatch: true,
    browsers: ['PhantomJS']
  });
};