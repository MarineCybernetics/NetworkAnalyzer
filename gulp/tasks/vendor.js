var gulp = require('gulp'),
  concat = require('gulp-concat'),
  filesize = require('gulp-filesize');

module.exports = function() {
  return gulp.src([
      "vendor/js/jquery/jquery-1.7.2.js",
      "vendor/js/jquery.cookie-1.4.1.min.js",
      "vendor/js/**/*.js",
      "vendor/js/bootstrap-slider.min.js"
    ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./dist/public/signature/js/'));
};