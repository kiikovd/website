const { src, dest, series } = require('gulp');
var uglifycss = require('gulp-uglifycss');
const rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
let babel = require('gulp-babel');
var gulp = require('gulp');
var gls = require('gulp-live-server'),
livereload = require('gulp-livereload');
var sass = require('gulp-sass');

function minifyCss() {
    return src('app/css/*.css')
        .pipe(concat('main.css'))
        .pipe(uglifycss())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(dest('app/css/'));
}

function minifyJs() {
    return src('app/js/*.js')
        .pipe(concat('bundle.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify({ mangle: false }))
        .pipe(rename({ extname: '.min.js' }))
        .pipe(dest('app/js/'));
}


exports.minify = series(minifyCss, minifyJs);
// exports.default = sassWatch;
