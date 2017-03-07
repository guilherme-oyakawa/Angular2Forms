var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var tsc  = require('gulp-typescript');
var tslint = require('gulp-tslint');
var config = require('./gulp.config')();
var TsProject = tsc.createProject('./src/tsconfig.json');

gulp.task('compile-ts', function(){
  var sourceTsFiles = [
    config.allTs
  ]

  var tsResult = gulp
      .src(sourceTsFiles)
      .pipe(sourcemaps.init())
      .pipe(TsProject());
  
  return tsResult.js
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(config.tsOutputPath));
});