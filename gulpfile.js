var gulp = require('gulp'), 
// less compiler
less = require('gulp-less'),

// nodejs path module
path = require('path'),

// concatenating files
concat = require('gulp-concat'),

// minifying files
uglify = require('gulp-uglify'),

// nodejs module for starting and restarting server
nodemon = require('gulp-nodemon');

gulp.task('libs', function () {
  return gulp.src('node_modules/**/*')
    .pipe(gulp.dest('public/lib'));
});

gulp.task('server', function () {
    var stream = nodemon({
        script: 'app.js'
    }); 
  return stream;
});

gulp.task('default', function () {
  gulp.run('server');
  gulp.run('libs');
  gulp.task('watch', function () {
    gulp.run('server');
    gulp.watch(["routes/*.js", "app.js"], function(event){
        gulp.run('server');
    });
  });
});


