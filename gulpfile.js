var gulp = require('gulp');
var decompress = require('gulp-decompress');

gulp.task('unzip', function() {
  gulp.src('./node_modules.zip')
  .pipe(decompress({strip: 1}))
  .pipe(gulp.dest('./node_modules'));
  console.log('success unzip!');
});
