const express = require("express");
const {
  crearNuevaConsulta,
} = require("../controladores/consultasContactoController");

const router = express.Router();

router.post("/", crearNuevaConsulta);

module.exports = router;
