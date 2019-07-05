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

export default connection;
