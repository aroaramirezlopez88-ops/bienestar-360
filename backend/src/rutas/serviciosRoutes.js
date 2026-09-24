const express = require("express");
const { listarServicios } = require("../controladores/serviciosController");

const router = express.Router();

router.get("/", listarServicios);

module.exports = router;
