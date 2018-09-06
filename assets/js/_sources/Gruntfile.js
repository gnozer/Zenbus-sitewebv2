module.exports = function(grunt) {

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	concat: {
		options: {
		// define a string to put between each file in the concatenated output
		separator: ';'
		},
		dist: {
		// the files to concatenate
		src: ['lang/*.js','externs/*.js', '*.js', '!Gruntfile.js',"!vanilla_js/*.js"],
		// the location of the resulting JS file
		dest: '../index.min.js'
		}
	},
	uglify: {
		options: {
			compress: {
				drop_console: true
			},
			beautify: true
		},
		my_target: {
			files: {
				'/home/boris/Documents/Dev/github/Boris/Zenbus-Showcase/assets/js/index.min.js': ['lang/*.js','externs/*.js', '*.js', '!Gruntfile.js']
			}
		}
	},
	jshint: {
		files: ['*.js']
	},
	watch: {
		files: ['lang/*.js', 'externs/*.js', '*.js', '!vanilla_js/*.js'],
		//tasks: ['jshint', 'qunit']
		tasks: ['concat']
	}
});

grunt.loadNpmTasks('grunt-contrib-uglify-es');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-qunit');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-concat');

// this would be run by typing "grunt test" on the command line
grunt.registerTask('test', ['jshint', 'qunit']);

// when deploying to prod, this can be run just by typing "grunt prod" on the command line
grunt.registerTask('prod', ['watch']);

// when developing the default task can be run just by typing "grunt" on the command line
grunt.registerTask('default', ['watch']);

};