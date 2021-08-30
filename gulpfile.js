const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')

const defaultTask = () => (
	gulp.src('src/custom.css')
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(gulp.dest('build'))
);

exports.default = defaultTask