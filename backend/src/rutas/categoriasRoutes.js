const express = require("express");
const {
  listarCategorias,
} = require("../controladores/categoriasController");

const router = express.Router();

router.get("/", listarCategorias);

module.exports = router;
