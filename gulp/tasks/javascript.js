var gulp        = require('gulp');
var path        = require('path');
var util        = require('gulp-util');
var plumber     = require('gulp-plumber');
var concat      = require('gulp-concat');
var uglifyJs    = require('gulp-uglify');
var config      = require('../config');

gulp.task('javascript:vendor', function() {
  return gulp.src([
      'src/libs/jquery/dist/jquery.min.js',
      'src/libs/webfontloader/webfontloader.js',
      'src/libs/svg4everybody/dist/svg4everybody.min.js',
      'src/libs/viewport-units-buggyfill/viewport-units-buggyfill.js',
      'src/libs/tether/dist/js/tether.min.js',
      'src/libs/bootstrap/dist/js/bootstrap.min.js',
      'src/libs/swiper/dist/js/swiper.min.js',
      'src/libs/fancybox/dist/jquery.fancybox.min.js',
      config.src.js + '/vendor/**/*.js'
     ])
    .pipe(plumber({ errorHandler: config.errorHandler }))
    .pipe(concat('vendor.js'))
    .pipe(config.production ? uglifyJs() : util.noop())
    .pipe(gulp.dest(config.dest.js));
});

gulp.task('javascript:app', function() {
  return gulp.src([
      config.src.js + '/*.js'
     ])
    .pipe(plumber({ errorHandler: config.errorHandler }))
    .pipe(concat('main.js'))
    .pipe(config.production ? uglifyJs() : util.noop())
    .pipe(gulp.dest(config.dest.js));
});

gulp.task('javascript', [
  'javascript:vendor',
  'javascript:app'
]);

gulp.task('javascript:watch', function() {
  gulp.watch(config.src.js + '/vendor/**/*.js', ['javascript:vendor']);
  gulp.watch(config.src.js + '/*.js', ['javascript:app']);
});
