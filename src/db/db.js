// src/db/db.js
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Loter2334*',
  database: 'bodegon'
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database.");
});

module.exports = connection;
