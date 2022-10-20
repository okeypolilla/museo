const pool = require('../database/database.js');

exports.getAllTodos = (req, res, next) => {
    pool.query("SELECT * FROM usuario", function (err, data, fields) {
     if(!err){
        res.json(data)
        console.log("okey getall");
        console.log(res.json(data));
     };
    });
   };

   exports.createTodo = (req, res, next) => {
    if (!req.body) return next(new AppError("No form data found", 404));
    const values = [req.body.name, "pending"];
    pool.query(
      "INSERT INTO `usuario` (`Nombre`, `Apellido`, `Email`, `Contraseña`, `telefono`) VALUES(?,?,?,?,?)",
      [values],
      function (err, data, fields) {
        if(!err){
            console.log("okey getall")
          };
      }
    );
   };

   exports.getTodo = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No todo id found", 404));
    }
    conn.query(
      "SELECT * FROM usuario WHERE Id_Usuario = ?",
      [req.params.id],
      function (err, data, fields) {
        if(!err){
            console.log("okey gettodo")
          };
      }
    );
   }; 

   exports.updateTodo = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No todo id found", 404));
    }
    conn.query(
      "UPDATE usuario SET status='completed' WHERE Id_Usuario=?",
      [req.params.id],
      function (err, data, fields) {
        if(!err){
            console.log("okey update")
          };
      }
    );
   };

   exports.deleteTodo = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No todo id found", 404));
    }
    conn.query(
      "DELETE FROM usuario WHERE Id_Usuario=?",
      [req.params.id],
      function (err, fields) {
        if(!err){
            console.log("okey delete")
          };
      }
    );
   }
