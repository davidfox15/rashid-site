const server = require('./task/server');
const browserSync = require('browser-sync').get('MyServer');
const { series, parallel } = require('gulp');
const html = require('./task/html');
const buildStyles = require('./task/sass');
const clear = require('./task/clear');
const moveFiles = require('./task/moveFiles');

const watcher = () => {
  browserSync.watch('./src/html/**/*.html', html).on('change', browserSync.reload);
  browserSync.watch('./src/sass/**/*.{scss,sass}', buildStyles).on('change', browserSync.reload);
  browserSync.watch('./src/pic/**/*.*', moveFiles).on('change', browserSync.reload);
};

exports.dev = series(clear, html, buildStyles, moveFiles, parallel(server, watcher), clear);

// exports.default = defaultTask;
