var gulp = require('gulp'),
  less = require('gulp-less'),
  rename = require('gulp-rename');

module.exports = function() {
  var livereload = process.env.GULP_ENV === 'debug' ? require('gulp-livereload') : require('gulp-empty');
  gulp.src(['./app/pages/*.*', './app/static/*.*'])
    .pipe(gulp.dest('./dist/public/signature/'));

  gulp.src('./app/img/*.*')
    .pipe(gulp.dest('./dist/public/signature/img/'));

  gulp.src('./vendor/webfonts/*.*')
    .pipe(gulp.dest('./dist/public/signature/fonts/'));

  gulp.src('./app/less/styles.less')
    .pipe(less())
    .pipe(rename('app.css'))
    .pipe(gulp.dest('./dist/public/signature/css'))
    .pipe(livereload());
};