var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('styles', function() {
	return gulp.src('sass/**/*.scss')
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(gulp.dest('./dist/css/'));
});

gulp.task('default', function() {
	gulp.watch('sass/**/*.scss',['styles']);
});