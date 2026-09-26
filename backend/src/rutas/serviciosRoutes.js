const express = require("express");
const {
  listarServicios,
  mostrarServicioPorId,
  crearNuevoServicio,
  modificarServicio,
} = require("../controladores/serviciosController");

const router = express.Router();

router.get("/", listarServicios);
router.get("/:id", mostrarServicioPorId);
router.post("/", crearNuevoServicio);
router.put("/:id", modificarServicio);

module.exports = router;
