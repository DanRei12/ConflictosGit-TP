const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
router.get("/api/articulos", async function
(req, res, next) {
const token = req.headers.authorization.split(' ')[1];
jwt.verify(token, 'claveSecreta', function(err, decoded) {
    if (err) {
      // El token no es válido
    } else {
      // El token es válido, se pueden acceder los datos del usuario mediante decoded
      console.log(decoded.username);
    }
  });
  
 //Código del método
});
router.get("/api/articulos/:id", async function
(req, res, next) {
 //Código del método
});
module.exports = router;