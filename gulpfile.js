var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    cssnext = require('cssnext'),
    postcssimport = require('postcss-import');
    precss = require('precss'),
    concat = require('gulp-concat'),
    htmlMin = require('gulp-htmlmin'),
    cleanCss = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload'),
    ghPages = require('gulp-gh-pages');

gulp.task('html', function() {
  return gulp.src('./src/*.html')
    .pipe(htmlMin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist/'))
    .pipe(livereload());
});

gulp.task('css', function() {
  var processors = [
    cssnext,
    precss
  ];

  return gulp.src([
      './node_modules/normalize.css/normalize.css',
      './node_modules/grd/dist/grd.css',
      './node_modules/fluidbox/dist/css/fluidbox.min.css',
      './src/css/main.css'
    ])
    .pipe(concat('main.css'))
    .pipe(postcss(processors))
    .pipe(cleanCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(livereload());
});

gulp.task('img', function() {
  return gulp.src('./src/img/*')
    .pipe(gulp.dest('./dist/img/'))
    .pipe(livereload());
});

gulp.task('js', function() {
  return gulp.src([
      './node_modules/jquery/dist/jquery.min.js',
      './src/js/vendor/jquery.particleground.min.js',
      './node_modules/waypoints/lib/jquery.waypoints.min.js',
      './node_modules/fluidbox/dist/js/jquery.fluidbox.min.js',
      './src/js/main.js',
    ])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./src/*.html', ['html']);
  gulp.watch('./src/css/**/*', ['css']);
  gulp.watch('./src/img/*', ['img']);
  gulp.watch('./src/js/*', ['js']);
});

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task('default', ['html', 'css', 'img', 'js']);
