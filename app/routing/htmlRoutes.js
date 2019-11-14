// DEPENDENCIES //
var path = require("path");

module.exports = (app) => {

    // HOME PAGE //
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
    // QUIZ PAGE //
    app.get('/survey', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
};