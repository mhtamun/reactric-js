const knex = require("../knex");

export const getLatestInformation = () => {
  return knex
    .from("information")
    .select("*")
    .orderBy("id", "desc")
    .limit(1);
};
