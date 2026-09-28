const {
  obtenerCategorias,
} = require("../data/categoriasData");

async function listarCategorias(req, res, next) {
  try {
    const categorias = await obtenerCategorias();

    res.json(categorias);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  listarCategorias,
};
