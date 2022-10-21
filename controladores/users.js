// Endpoints for external data
const express = require("express");
const router = express.Router();
const pool = require('../database/database.js');


router.get('/user', async (req, res) => {
    pool.query('SELECT * FROM usuario', (err,rows)=>{
    if(!err){
        res.json(rows)
    }else{
        console.log(err);
    }
 })
});

router.get('/user/:id', async (req, res) => {
     const { id } = req.params
    pool.query("SELECT * FROM usuario WHERE Id_Usuario = ?", [id], (err,rows)=>{
          if(!err){
            res.json(rows)
            };
       
    });
});

router.get('/add', async (req, res) => {
    const { values } = req.params
    pool.query("INSERT INTO `usuario` (`Nombre`, `Apellido`, `Email`, `Contraseña`, `telefono`) VALUES(?,?,?,?,?)",[values],
    (err,rows)=>{
        if(!err){
            console.log("okey getall")
          };
      }
    );
});
module.exports = router;