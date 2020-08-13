let gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    babel = require('gulp-babel'),
    rename = require('gulp-rename');
    function fnSass(){
        return gulp.src('./src/sass/*.scss')
        .pipe(sass({outputStyle:'expanded'}))
        // .pipe(cssnano())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./dist/css'));
    }
    function fnImg(){
        return gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
    }
    function fnCopy(){
        return gulp.src('./src/html/*.html')
        .pipe(gulp.dest('./dist/html'));
    }
    
    function fnJS(){
        return gulp.src('./src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('./dist/js'));
    }
    function fnSasstosrc(){
        return gulp.src('./src/sass/*.scss')
        .pipe(sass({outputStyle:'expanded'}))
        // .pipe(cssnano())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./src/css'));
    }
    function fnWatch(){
        gulp.watch('./src/sass/*.scss',fnSass);
        gulp.watch('./src/img/*',fnImg);
        gulp.watch('./src/html/*.html',fnCopy);
        gulp.watch('./src/sass/*.scss',fnSasstosrc);
        
    }
    exports.img = fnImg;
    exports.copy = fnCopy;
    exports.sass=fnSass; 
    exports.js = fnJS;
    exports.default=fnWatch;
    exports.sasstosrc=fnSasstosrc;