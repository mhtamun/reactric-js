// module.exports = knex = require("knex")({
//   client: "mysql",
//   connection: {
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "reactric"
//   }
// });

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "reactric"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

const result = (query) => {
  console.log("query: ", query);
  // return connection.query(query, function(error, results, fields) {
  //   if (error) {
  //     console.log("error: ", JSON.stringify(error));
  //     return error;
  //   }
  //   console.log("results: ", JSON.stringify(results));
  //   console.log("results: ", JSON.stringify(fields));
  //   return results;
  // });
}; 

connection.end();

module.exports = result;
