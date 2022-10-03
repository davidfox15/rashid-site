const gulp = require('gulp');

const moveFiles = () => {
  return gulp.src('./src/pic/*').pipe(gulp.dest('./public/pic'));
};

module.exports = moveFiles;
