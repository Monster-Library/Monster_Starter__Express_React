const express = require("express");

// the app
const app = express();

// required routes
const api = require("./routes/api");
// const client = require("./routes/client");
// required routes

// for just a production
// app.use(express.static(path.join(__dirname, "..", "public")));

/**
 * cors for handling CORS ERROR
 * CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
 */

var cors = require("cors");

app.use(
  cors({
    // the domain is allowed
    origin: "http://localhost:3000",
    // you can also add multible domains see more in the docs
  })
); // Use this after the variable declaration

// end cors for handling http requests

// for just a production
// app.use(express.static(path.join(__dirname, "..", "public")));

// Routes
// api router
app.use("/api", api);

// the client route
// app.use(client);
// Routes

// parse to json
app.use(express.json());

module.exports = app;