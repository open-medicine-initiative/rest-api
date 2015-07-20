var babelOptions = require('./babel.config');

module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'chai', 'jspm'],
        files: ['node_modules/babel/node_modules/babel-core/browser-polyfill.js'],
        preprocessors: {
            'src/**/*.js': ['babel']
        },
        browsers: [
            'PhantomJS',
            'Chrome',
            'PhantomJS-NoWebSecurity'

        ],

        // example of custom launcher
        customLaunchers: {
            'PhantomJS-NoWebSecurity': {
                base: 'PhantomJS',
                options: {
                    windowName: 'openmediaid',
                    settings: {
                        webSecurityEnabled: false
                    },
                },
                flags: ['--load-images=true'],
                debug: true
            }
        },

        phantomjsLauncher: {
            // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
            exitOnResourceError: true
        },

        babelPreprocessor: {
            options: babelOptions
        },

        jspm: {
            config: 'jspm.config.js',
            serveFiles: ['src/**/!(*.spec).js'],
            loadFiles: ['src/**/*.spec.js']
        },
        proxies: {
            '/jspm_packages': '/base/jspm_packages'
        }
    });
};