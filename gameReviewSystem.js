// To initialize the Express
const express = require("express");   /* Accessing express module */
const app = express();  /* app is a request handler function */

// To initialize for MongoDB
const path = require("path");

// Standard initialization for the port number and reading the apps
const bodyParser = require("body-parser");

const portNumber = 3000;
const httpSuccessStatus = 200;

// To Continue Initialize MongoDB
require("dotenv").config({
    path: path.resolve(__dirname, "credentials/.env"),
    quiet: true
});
const { MongoClient, ServerApiVersion } = require("mongodb");


// For the express
app.use(bodyParser.urlencoded({ extended: false }));

// To read ejs files from the templates
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "templates"));

const databaseName = "CMSC335DB";
const collectionName = "gameReviews";
const uri = process.env.MONGO_CONNECTION_STRING;
const client = new MongoClient(uri, { serverApi: ServerApiVersion.v1 });

// To render the page when first click on the link
app.get("/", (request, response) => {
    response.render("index");
});

app.get("/review", (request, response) => {
    
});

app.post("/processReview", (request, response) => {

});

app.get("/listOfReviews", (request, response) => {

});

app.post("/processList", async (request, response) => {

});

app.get("/searchGame", (request, response) => {

});

app.post("/processSearch", async (request, response) => {

});

app.get("/removeReviews", (request, response) => {
});

app.post("/processRemoval", async (request, response) => {

});

app.listen(portNumber);
console.log(`main URL http://localhost:${portNumber}/`);