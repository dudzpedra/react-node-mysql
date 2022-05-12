const mysql = require('mysql')
require('dotenv').config()

const db = mysql.createConnection({
  host: 'localhost',
  user: 'dudz',
  password: '@dudZ#2909',
  database: 'dio_mysql'
})

db.connect((e) => {
  if (e) throw e
  console.log('Connected to MySQL server');
})

module.exports = db