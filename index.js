const express = require('express'); //
const app = express();
const morgan = require('morgan'); //
const cors = require("cors");
const router = require("./rutas/index.js");
const pool = require('./database/database.js');

app.set('port', 4000);


//middlewares
app.use(morgan('dev')); 


//routes 
app.use(express.static(__dirname + '/src/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

//iniciar 
app.listen(app.get('port'),()=>{  
 console.log('Listening on port ',app.get('port'));
});