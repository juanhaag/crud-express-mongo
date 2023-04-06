const express = require("express");
const router = express.Router();
const Tarea = require('../models/Tarea')

const tareas=[];

router.post("/agregar",(req,res)=>{
    tareas.push(new Tarea(req.body.contenido,req.body.check,req.body.user));
    res.send("Tarea pusheada");
    console.log(tareas);
})

router.get("/:user",(req,res)=>{
    const id = req.params.user;
    console.log(id);
    res.send(tareas.filter(e => e.user == id));
})
router.get("/", (req, res) => {
  res.send("Tareas");
});

module.exports = router;
