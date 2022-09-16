const mysql = require('mysql')
const {database}= require('./keys')
const pool = mysql.createConnection({database});

pool.connect((err, connection)=>{
  if(err){
      if (err.code=== 'PROTOCOL_CONNECTION_LOST'){
          console.error('Database lost')
      }
      if(err.code === 'ECONNREFUSED'){
          console.error('Database connection was refused')
      }
  }
      if(connection) connection.release()
      console.log('DB is connected')
        return;
  })

 
module.exports = pool;