const { obtenerServicios } = require("../data/serviciosData");

async function listarServicios(req, res, next) {
  try {
    const servicios = await obtenerServicios();

    res.json(servicios);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  listarServicios,
};