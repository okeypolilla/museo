const express = require('express'); //
const app = express();
const morgan = require('morgan'); //

const pool = require('./database/database.js');

app.set('port', 8888);


//middlewares
app.use(morgan('dev')); 
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes 
//app.use(require("./rutas/index.js"));
app.use(require('./controladores/users.js'));
app.use(express.static(__dirname + '/src/public'))


//iniciar 
app.listen(app.get('port'),()=>{  
 console.log('Listening on port ',app.get('port'));
});