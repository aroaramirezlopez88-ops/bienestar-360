const express = require("express");
const {
  listarServicios,
  mostrarServicioPorId,
  crearNuevoServicio,
  modificarServicio,
  borrarServicio,
} = require("../controladores/serviciosController");
const verificarApiKey = require("../middlewares/verificarApiKey");

const router = express.Router();

router.get("/", listarServicios);
router.get("/:id", mostrarServicioPorId);
router.post("/", verificarApiKey, crearNuevoServicio);
router.put("/:id", verificarApiKey, modificarServicio);
router.delete("/:id", verificarApiKey, borrarServicio);

module.exports = router;
