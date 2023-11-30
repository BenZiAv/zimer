//
const express = require("express");
const path = require("path");

const db = require("./backend/mongoConect");
const {routesInit,originCorsAccess} = require("./");


let app = express();
app.use(express.json());



app.use(express.static(path.json(__dirname,"public")));
originCorsAccess(app);
routesInit(app);