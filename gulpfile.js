var gulp = require('gulp');
var gulputil = require('gulp-util');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');

//Runs JSHINT against all JavaScript files in the approved QA repository
gulp.task('jshint', function(){
    gulp.src('QA/Todd/*.js')
    .pipe(jshint()) 
    .pipe(jshint.reporter('default', { verbose: true }));
});

//Concats all of the JavaScript files approved by QA into a single file
gulp.task('concat-js', function(){
    gulp.src('QA/Todd/*.js')
    .pipe(concat("production.js"))
    .pipe(gulp.dest('QA/Todd'))
});

//Deploys the compiled file to the production environment
gulp.task('deploy', function(){
    gulp.src('QA/Todd/production.js')
    .pipe(gulp.dest('production'))
});

gulp.task('default', function(){
	console.log('Test');

});

