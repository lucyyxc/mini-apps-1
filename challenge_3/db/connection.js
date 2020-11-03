var mysql = require('mysql');

var connection = mysql.createConnection({
  user     : 'student',
  password : 'student',
  database : 'shop'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('connection successful!')
})

module.exports.connection = connection;