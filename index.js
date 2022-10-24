const http= require('http');
const fs = require('fs')
const { isBuffer } = require('util');

const server = http.createServer((req,res) => {
  const {url,method} = req;

  //logger
  console.log('URL: ${url} - Method: ${method}');
  fs.readFileSync(__dirname + '/src/public',function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data)
    res.end();
  });


})

server.listen(8888);
//const express = require('express'); //
//const app = express();
//const morgan = require('morgan'); //

//const pool = require('./database/database.js');

//app.set('port', 8888);


//middlewares
//app.use(morgan('dev')); 
//app.use(express.json());
//app.use(express.urlencoded({extended: false}));

//routes 
//app.use('view engine','ejs');
//app.use(require("./rutas/index.js"));
  //Usuario
//app.use(require('./controladores/users.js'));
//app.use(express.static(__dirname + '/src/public'))



//iniciar 
//app.listen(app.get('port'),()=>{  
 //console.log('Listening on port ',app.get('port'));
//});