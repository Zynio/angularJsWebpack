// reuse webpack config
const webpack = require("./webpack.dev");

module.exports = config => {
    config.set({
        basePath: "",
        frameworks: ["jasmine"],
        files: ["src/**/*.spec.js"],

        preprocessors: {
            "src/**/*.spec.js": ["webpack"]
        },

        webpack,
        webpackMiddleware: {
            noInfo: true,
            stats: "errors-only"
        },

        reporters: ["progress"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ["PhantomJS"],
        singleRun: false,
        concurrency: Infinity
    });
};