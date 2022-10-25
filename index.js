
// const http= require('http');
// const fs = require('fs');
// const pool = require('./database/database');

// const mime = {
//   'html': 'text/html',
//   'css': 'text/css',
//   'jpg': 'image/jpg',
//   'ico': 'image/x-icon',
//   'mp3': 'audio/mpeg3',
//   'mp4': 'video/mp4'
// }

var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
    console.log('request ', request.url);

    var filePath = '.' + request.url;
    if (filePath == './') {
        filePath = './src/index.html';
    }

    var extname = String(path.extname(filePath)).toLowerCase();
    var mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };

    var contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT') {
                fs.readFile('./404.html', function(error, content) {
                    response.writeHead(404, { 'Content-Type': 'text/html' });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });

}).listen(8888);
console.log('Server running at http://127.0.0.1:8125/');












// const servidor = http.createServer((req, res) => {
//   const url = new URL('http://localhost:8888' + req.url)
//  // const {url , method} = req;
//    //console.log("URL:"+ url + "method:" + method);
//   let camino = 'src' + url.pathname
//   if (camino == 'src/')
//     camino = './src/index.html'
//   fs.stat(camino, error => {
//     if (!error) {
//       fs.readFile(camino, (error, contenido) => {
//         if (error) {
//           res.writeHead(500, { 'Content-Type': 'text/plain' })
//           res.write('Error interno')
//           res.end()
//         } else {
//           const vec = camino.split('.')
//           const extension = vec[vec.length - 1]
//           const mimearchivo = mime[extension]
//           res.writeHead(200, { 'Content-Type': mimearchivo })
//           res.write(contenido)
//           res.end()
//         }
//       })
//     } else {
//       res.writeHead(404, { 'Content-Type': 'text/html' })
//       res.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>')
//       res.end()
//     };
//   })
// })

// servidor.listen(8888)

// console.log('Servidor web iniciado')

// const server = http.createServer((req,res) => {
//   const url = new URL('http://localhost:8888' + req.url)
//   let camino = 'src' + url.pathname
//   if (camino == 'src/')
//     camino = './src/index.html'
//     const vec = camino.split('.')
//    const extension = vec[vec.length - 1]
//     const mimearchivo = mime[extension]
//   console.log(url + ':url')
//   fs.readFile(camino,function(err, data){
//       res.writeHead(200, {'Content-Type': mimearchivo});
//       res.write(data)
//     res.end();

//   })
// });
//    server.listen(8888);
//    console.log('Servidor web iniciado')



//  const server = http.createServer((req,res) => {
//   const url = new URL('http://localhost:8888' + req.url)
//    let camino = 'src' + url.pathname
//   if (camino == 'src/')
//     camino = 'src/index.html'
//      fs.stat(camino, error => {
//       if (!error) {
//         fs.readFile(camino, (error, contenido) => {
//           if (error) {
//             res.writeHead(500, { 'Content-Type': 'text/plain' })
//             res.write('Error interno')
//             res.end()
//           } else {
//             const vec = camino.split('.')
//             const extension = vec[vec.length - 1]
//            const mimearchivo = mime[extension]
//              res.writeHead(200, { 'Content-Type': mimearchivo })
//             res.write(contenido)
//              res.end()
//           }
//          }) }
//  });


//    });
//    server.listen(8888);
//    console.log('Servidor web iniciado')

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