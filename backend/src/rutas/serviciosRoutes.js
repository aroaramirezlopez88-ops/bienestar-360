const express = require("express");
const {
  listarServicios,
  mostrarServicioPorId,
} = require("../controladores/serviciosController");

const router = express.Router();

router.get("/", listarServicios);
router.get("/:id", mostrarServicioPorId);

module.exports = router;
