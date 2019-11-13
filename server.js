// DEPENDANCIES //
var express = require("express");
var path = require("path");

// EXPRESS APP SET UP//
var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ============================================================= //