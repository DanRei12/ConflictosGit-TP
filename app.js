//Clase 12
const express = require('express');
const app = express();

const articulosRouter = require("./routes/articulos");
const usuariosRouter = require("./routes/usuarios");
app.use(usuariosRouter);
app.use(articulosRouter);