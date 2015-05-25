
module.exports = function (config) {
	'use strict';
	config.set({

		frameworks: ['jasmine'],

		plugins: [
			'karma-jasmine',
			'karma-phantomjs-launcher',
			'karma-coverage'
		],
		
		files: [
			'bower_components/rangy/rangy-core.js',
			'bower_components/rangy/rangy-selectionsaverestore.js',
			'bower_components/angular/angular.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'src/textAngular-sanitize.js',
			'src/textAngularSetup.js',
			'src/textAngular.js',
			'bower_components/jquery/jquery.js',
			'test/**/*.spec.js'
		],

		// list of files to exclude
		exclude: [

		],

		preprocessors: {
			'src/textAngular.js': ['coverage'],
			'src/textAngularSetup.js': ['coverage']
		},

		// test results reporter to use
		// possible values: 'dots', 'progress', 'junit'
		reporters: ['progress', 'coverage'],
		coverageReporter: {
			reporters: [
				{type: 'json', dir: 'coverage/'},
				{type: 'lcov', dir: 'coverage/'}
			]
		},

		// web server port
		port: 9876,


		// cli runner port
		runnerPort: 9100,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,


		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: ['PhantomJS'],


		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 60000,


		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: true
	});
};