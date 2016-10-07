var gulp = require('gulp');
var sass = require('gulp-sass');
var sassJspm = require('sass-jspm-importer');

gulp.task('build-fonts', function () {
    return gulp.src('app/styles/fonts/*.*')
        .pipe(gulp.dest('build/app/styles/fonts'));
});

gulp.task('build-sass', ['build-fonts'], function() {
    return gulp.src('app/styles/main.scss')
        .pipe(sass({
            errLogToConsole: true,
            functions: sassJspm.resolve_function('/app/jspm_packages/'),
            importer: sassJspm.importer
        }))
        .pipe(gulp.dest('build/css'));
});