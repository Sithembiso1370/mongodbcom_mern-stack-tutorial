// Require the express module to make mongodb and node easier
const express = require("express");
// Create an instance of the app using the express module above 
const app = express();
// Require cors module to enable cross origin resource sharing
const cors = require("cors");

// Require dotenv to enale loading of environment variables
require("dotenv").config({ path: "./config.env" });

// Create a port variable holder 
const port = process.env.PORT || 5000;

// Instruct the app instance to use cross origin sharing capabilities of cors
app.use(cors());
// Instruct the app instance to use express modules of express framework
app.use(express.json());

app.use(require("./routes/record"));

// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function (err) {
      if (err) console.error(err);
   
    });
    console.log(`Server is running on port: ${port}`);
  });