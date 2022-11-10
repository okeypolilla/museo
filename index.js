
 const http= require('http');
 const fs = require('fs');
 //const pool = require('./database/database');

 const mime = {
  'html': 'text/html',
  'css': 'text/css',
  'jpg': 'image/jpg',
  'ico': 'image/x-icon',
   'mp3': 'audio/mpeg3',
   'mp4': 'video/mp4'
 }

 const servidor = http.createServer((req, res) => {
   const url = new URL('http://localhost:8888' + req.url)
   const { method} = req;
    console.log("URL:"+ url + "method:" + method);
   let camino = 'src' + url.pathname
   if (camino == 'src/')
     camino = './src/index.html'
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

