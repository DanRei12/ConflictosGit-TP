//Clase 12
const express = require('express');
const app = express();

const articulosRouter = require("./routes/articulos");
const usuariosRouter = require("./routes/usuarios");
app.use(usuariosRouter);
app.use(articulosRouter);

<<<<<<< HEAD
console.log("Ejecutando archivo app");
=======
console.log("hola, se va a generar conflicto")
>>>>>>> 8e0844e98409cbe8f23bddde091adaa857ec8d90

