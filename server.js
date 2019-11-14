// DEPENDENCIES //
var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");

// EXPRESS APP SET UP //
var app = express();
var PORT = process.env.PORT || 3030;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTES //
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// LISTENER // 
app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
});