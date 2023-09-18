const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'estagio'
  });
  
  module.exports = connection