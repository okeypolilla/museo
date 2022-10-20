const mysql = require('mysql')

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
      console.log('Conexion correcta.');
   }
});
//connection.end();  //para finalizar la coneccion de la base de datos
 
const pool = connection;
module.exports = pool;