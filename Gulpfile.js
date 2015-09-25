var gulp = require('gulp'),
  clean = require('gulp-clean'),
  livereload = require('gulp-livereload'),
  runsequence = require('run-sequence'),
  env = require('gulp-env');

require('./gulp')(['scripts', 'vendor', 'server-mock', 'server-proxy', 'test', 'resources']);

gulp.task('set-development-env', function() {
  env({
    vars: {
      GULP_ENV: "debug"
    }
  })
});

gulp.task('set-production-env', function() {
  env({
    vars: {
      GULP_ENV: "production"
    }
  })
})

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(['app/less/**/*.*'], ['resources']);
  gulp.watch(['app/js/**/*.*'], ['scripts']);
  //gulp.watch('dist/public/**/*.*').on('change', livereload.changed);
});

gulp.task('dev-proxy', function(callback) {
  runsequence('dev', 'server-proxy', 'watch', callback);
});

gulp.task('dev-mock', function(callback) {
  runsequence('dev', 'server-mock', 'watch', callback);
});

gulp.task('clean', function() {
  return gulp.src(['dist'], {
      read: false
    })
    .pipe(clean());
});

gulp.task('dist', function(callback) {
  runsequence('set-production-env', 'clean', ['vendor', 'scripts', 'resources'], callback);
});

gulp.task('dev', function(callback) {
  runsequence('set-development-env', 'clean', ['vendor', 'scripts', 'resources'], callback);
});


gulp.task('default', ['dist']);