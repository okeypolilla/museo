var mysql = require('mysql');

var connection = mysql.createConnection({
   host: 'sql10.freemysqlhosting.net',
   user: 'sql10528009',
   password: 'P2mqgKPswt',
   database: 'sql10528009',
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