const express = require("express");
const router = express.Router();
//const controllers = require("../controladores/usuario.js");

router.get('/', (req, res) => {    
    res.sendFile('./src/public/index.html', {root: __dirname })
   
})
//app.use(express.static(__dirname + '/src/public'))

//rutas usuario 

//router.route("/gettodo").get('../controladores/users.js');
//router.route("/gettodo").get(controllers.getAllTodos)
//router.route("/createTodo").post(controllers.createTodo);
//router.route("/get").get(controllers.getTodo);
//router.route("/put").put(controllers.updateTodo)
//router.route("/delete").delete(controllers.deleteTodo);
module.exports = router;