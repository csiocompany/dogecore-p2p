'use strict';

var gulp = require('gulp');
var dogecoreTasks = require('dogecore-build');

dogecoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
