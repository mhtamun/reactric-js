const knex = require("knex");
const knexFile = require("./knexfile");

knex(knexFile);

const result = async query => {
  console.log("query", query);
  return knex
    .raw(query)
    .then(result => {
      return result;
    })
    .catch(err => {
      console.log(err);
      throw err;
    })
    .finally(() => {
      knex.destroy();
    });
};

module.exports = { result };
