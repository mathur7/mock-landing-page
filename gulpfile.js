var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function() {
    gulp.src('sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css/'))
});


gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: "./"
    },
  })
})

gulp.task('watch', ['browserSync','sass'], function (){
  gulp.watch('sass/**/*.scss', ['sass']); 
});