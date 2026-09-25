const {
  obtenerServicios,
  obtenerServicioPorId,
} = require("../data/serviciosData");

async function listarServicios(req, res, next) {
  try {
    const servicios = await obtenerServicios();

    res.json(servicios);
  } catch (error) {
    next(error);
  }
}

async function mostrarServicioPorId(req, res, next) {
  try {
    const { id } = req.params;

    const servicio = await obtenerServicioPorId(id);

    if (!servicio) {
      return res.status(404).json({
        message: "Servicio no encontrado",
      });
    }

    res.json(servicio);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  listarServicios,
  mostrarServicioPorId,
};
