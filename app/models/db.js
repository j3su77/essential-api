const mysql = require("mysql");
// const dbConfig = require("../config/db.config.js");

var connection = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,

  ssl: {
    rejectUnauthorized: true,
  },
});
// var connection = mysql.createPool({
//   host: process.HOST,
//   user: dbConfig.USER,
//   password: dbConfig.PASSWORD,
//   database: dbConfig.DB,

//   ssl: {
//     rejectUnauthorized: true,
//   },
// });

module.exports = connection;
