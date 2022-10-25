const db = require('./database/database');
const http= require('http');
const fs = require('fs');
const pool = require('./database/database');
const mime = {
  'html': 'text/html',
  'css': 'text/css',
  'jpg': 'image/jpg'
}

const servidor = http.createServer((req, res) => {
  const link = new URL('http://localhost:8888' + req.url)
  const {url , method} = req;
   console.log("URL:"+ url + "method:" + method);
  let camino = 'src' + link.pathname
  if (camino == 'src/')
    camino = 'src/index.html'
  fs.stat(camino, error => {
    if (!error) {
      fs.readFile(camino, (error, contenido) => {
        if (error) {
          res.writeHead(500, { 'Content-Type': 'text/plain' })
          res.write('Error interno')
          res.end()
        } else {
          const vec = camino.split('.')
          const extension = vec[vec.length - 1]
          const mimearchivo = mime[extension]
          res.writeHead(200, { 'Content-Type': mimearchivo })
          res.write(contenido)
          res.end()
        }
      })
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' })
      res.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>')
      res.end()
    };
  })
})

servidor.listen(8888)

console.log('Servidor web iniciado')


// const server = http.createServer((req,res) => {
//   const url = new URL('http://localhost:8888' + pedido.url)
//   let camino = 'src' + url.pathname
//   if (camino == 'static/')
//     camino = 'static/index.html'
//     fs.stat(camino, error => {
//       if (!error) {
//         fs.readFile(camino, (error, contenido) => {
//           if (error) {
//             respuesta.writeHead(500, { 'Content-Type': 'text/plain' })
//             respuesta.write('Error interno')
//             respuesta.end()
//           } else {
//             const vec = camino.split('.')
//             const extension = vec[vec.length - 1]
//             const mimearchivo = mime[extension]
//             res.writeHead(200, { 'Content-Type': mimearchivo })
//             res.write(data)
//             res.end()
//           }
 
//   });

//   server.listen(8888);
//     });

 //console.log("URL:"+ url + "method:" + method);
  //fs.readFile(__dirname + '/src/index.html',function(err, data){
  //  res.writeHead(200, {'Content-Type': 'text/html'});
  //  res.write(data)
   // res.end();

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