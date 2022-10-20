// Endpoints for external data
const { Router } = require('express');
const router = Router();
const pool = require('../database/database.js');


router.get('/user', async (req, res) => {
    pool.query('SELECT * FROM usuario', (err,rows,fields)=>{
    if(!err){
        res.json(rows)
    }else{
        console.log(err);
    }
 })
});

module.exports = router;