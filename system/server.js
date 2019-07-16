const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";

const bodyParser = require("body-parser");
const db = require("./database");

// Create the Express-Next App
const app = next({ dev });
const handle = app.getRequestHandler();

//Start the app
app
  .prepare()
  .then(() => {
    const server = express();

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.use(bodyParser.json()); // support json encoded bodies
    server.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
    server.post("/api/data", (request, response) => {
      const { query } = request.body;
      console.log(`Query: `, query);
      db.query(query, function(error, result, fields) {
        if (error) {
          console.error(`Error: `, error);
          response.send(error);
        } else {
          console.log(`Response: `, JSON.stringify(result));
          response.send(result);
        }
      });
    });

    // Start Express server and serve the
    server.listen(8080, err => {
      if (err) throw err;
      console.log("http://localhost:8080");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
