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
	console.log '#################################################'
	console.log 'Welcome to the OPENMEDiAID REST API build system!'
	console.log '#################################################'
	console.log '\nThe default task shows this screen.'
	console.log 'For a list of available tasks please run: ' + chalk.magenta ('gulp --tasks\n')
	console.log 'Please have a look at the README.md at the projects root folder for more information
on the project structure and links to helpful resources'
showHelp.description = 'Show help'



gulp.task 'default', showHelp
gulp.task 'help', showHelp



