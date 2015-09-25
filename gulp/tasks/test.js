var gulp = require('gulp');
var karma = require('gulp-karma');
var coffee = require('gulp-coffee');
var log = require('gulp-util').log;

module.exports = function() {
  var coffeeSpecs = gulp.src('spec/*.coffee')
    .pipe(coffee({
      bare: true
    }).on('error', log))
    .pipe(gulp.dest('generated/spec'));

  gulp.src(['dist/js/app.js', 'spec/*.js', 'generated/spec/*.js'])
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }));
};