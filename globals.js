var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
    openBrowser: false,
    reportsDirectory: __dirname + '/reports',
    themeName: 'compact',
    relativeScreenshots: true,
    reportFilename: 'test_report.html',
});
module.exports = {
    reporter: reporter.fn
};