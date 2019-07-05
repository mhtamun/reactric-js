// const knex = require("../knex");

// export const getLatestInformation = () => {
//   return knex
//     .from("information")
//     .select("*")
//     .orderBy("id", "desc")
//     .limit(1);
// };

import connection from "../knex";

export const getData = connection.query("SELECT 1 + 1 AS solution", function(error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});

connection.end();
