// DEPENDENCIES //
var express = require("express");
var path = require("path");

// EXPRESS APP SET UP //
var app = express();
var PORT = process.env.PORT || 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(express.json());

// ROUTES //
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// LISTENER // 
app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
});