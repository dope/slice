var gulp    = require('gulp');
var sass    = require('gulp-sass');
var prefix  = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("scss/**/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src("scss/**/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);