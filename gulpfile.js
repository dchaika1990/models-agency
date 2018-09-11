var gulp  = require('gulp');
var autoprefixer  = require('gulp-autoprefixer');
var pug  = require('gulp-pug');
var sass  = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('./assets/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('./assets/styles/'))
}) ;

gulp.task('pug', function () {
    gulp.src(['./*.pug','!./node_modules/**'])
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./'))
});

gulp.task('watch',['sass'], function () {
    gulp.watch('./assets/styles/*.scss',['sass']);
    gulp.watch(['./*.pug','./assets/include/*.pug'],['pug'])
});

gulp.task('default', ['watch']);