var gulp = require('gulp'),
  browserify = require('browserify'),
  watchify = require('watchify'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  gutil = require('gulp-util'),
  sourcemaps = require('gulp-sourcemaps'),
  assign = require('object-assign');

var customOpts = {
  entries: ['./app/js/app.js'],
  transform: ['reactify'],
  extensions: ['.jsx'],
  debug: true
};

var opts = assign({}, watchify.args, customOpts);
var b = process.env.GULP_ENV === 'debug' ? watchify(browserify(opts)) : browserify(opts);

b.on('log', gutil.log);

module.exports = function() {
  var livereload = process.env.GULP_ENV === 'debug' ? require('gulp-livereload') : require('gulp-empty');
  b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify error'))
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/public/signature/js/'))
    .pipe(livereload());
};