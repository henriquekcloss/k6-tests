const dataFaker = require("../dataFaker.js");

const createUser = () =>
  JSON.stringify({
    name: dataFaker.name(),
    age: dataFaker.age(),
    email: dataFaker.email(),
  });

module.exports = { createUser };
