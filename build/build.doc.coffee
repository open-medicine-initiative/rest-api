gulp = require 'gulp'
apidoc = require 'gulp-apidoc'

genapidoc = gulp.task 'generate:api-doc', ->
	apidoc.exec
		src: "./src/resource/"
		dest: "./target/api-doc"
		debug: true
		includeFilters: [ ".*\\.js$" ]
#genapidoc.description = "generate api doc for REST resources"