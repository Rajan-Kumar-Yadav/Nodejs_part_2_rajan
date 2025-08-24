const mysql = require('mysql2');

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Rajan@123",
  database: "airbnb",
})

module.exports = pool.promise();