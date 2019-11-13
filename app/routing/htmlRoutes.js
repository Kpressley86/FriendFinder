// DEPENDENCIES //
var path = require("path");

module.exports = (app) => {

    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // DEFAULT TO HOME //
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};