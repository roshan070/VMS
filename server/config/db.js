const mysql = require("mysql")
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "vdb",
})

module.exports = db;