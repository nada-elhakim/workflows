var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee')
    concat = require('gulp-concat');

var coffeeSources = ['components/coffee/tagline.coffee'];
var jsFiles = 'components/scripts/*.js';

gulp.task('coffee', function() {
    gulp.src(coffeeSources)
        .pipe(coffee({ bare: true })
            .on('error', gutil.log))
        .pipe(gulp.dest('components/scripts'))
});

gulp.task('concat', function(){
    gulp.src(jsFiles)
        .pipe(concat('script.js'))
        .pipe(gulp.dest('builds/development/js'))
});

