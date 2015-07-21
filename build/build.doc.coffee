gulp = require 'gulp'
apidoc = require 'gulp-apidoc'
run = require 'gulp-run'


# Generation of REST-API documentation
genapidoc = ->
	apidoc.exec
		src: "./src/resource/"
		dest: "./target/api-doc"
		includeFilters: [ ".*\\.js$" ]
genapidoc.description = "Generate API documentation for REST resources"

# Generation of ESDoc
# Note: Currently ESDoc does not support ES7 features which are used by the project
genesdoc = ->
	run('esdoc -c ./esdoc.json').exec()
genesdoc.description = 'Generate esdoc-based documentation'


# Register tasks with gulp
gulp.task 'generate:api-doc', genapidoc
gulp.task 'generate:esdoc', genesdoc
