var gulp = require('gulp');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');

gulp.task('copy-images',function(){
    return gulp.src('app/imgs/**/*.{jpg,png}',{base:'app'})
        .pipe(imagemin())
        .pipe(gulp.dest('dist'));
});

gulp.task('default',['copy-images']);