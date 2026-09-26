const express = require("express");
const {
  listarServicios,
  mostrarServicioPorId,
  crearNuevoServicio,
  modificarServicio,
  borrarServicio,
} = require("../controladores/serviciosController");

const router = express.Router();

router.get("/", listarServicios);
router.get("/:id", mostrarServicioPorId);
router.post("/", crearNuevoServicio);
router.put("/:id", modificarServicio);
router.delete("/:id", borrarServicio);

module.exports = router;
