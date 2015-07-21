gulp = require 'gulp'
run = require 'gulp-run'
pkgconf = require '../package.json'

gulp.task  'test:run', ->
	run(pkgconf.scripts.test, verbosity:3).exec()

gulp.task  'test:auto', ->
	run(pkgconf.scripts.autotest, verbosity:3).exec()