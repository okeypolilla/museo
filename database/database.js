var mysql = require('mysql');

var connection = mysql.createConnection({
   host: 'sql9.freemysqlhosting.net',
   user: 'sql9531490',
   password: 'QK8JHsJg3M',
   database: 'sql9531490',
   port: 3306
});
connection.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta. DB');
   }
});

const pool = connection;
module.exports = pool;