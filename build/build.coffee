# The master build file

require './build.doc.coffee'
require './build.testing.coffee'

chalk = require 'chalk'
run = require 'gulp-run'
gulp = require 'gulp'


# TODO
# ====
# Build devmode with auto-testing and live reload
# * https://libraries.io/npm/koa-livereload
# * https://www.npmjs.com/package/koa-refresh


showHelp = ->
	#console.log 'This is a '  + chalk.magenta ('list of tasks') + ' you can run\n'
	run('gulp --tasks').exec()
showHelp.description = 'Show help'



#gulp.task 'default', [showHelp]
gulp.task 'help', showHelp



