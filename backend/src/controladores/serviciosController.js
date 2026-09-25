const {
  obtenerServicios,
  obtenerServicioPorId,
  crearServicio,
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

async function crearNuevoServicio(req, res, next) {
  try {
    const {
      categoria_id,
      nombre,
      descripcion,
      precio,
      duracion_minutos,
      imagen_url,
    } = req.body;

    if (
      categoria_id === undefined ||
      !nombre ||
      !descripcion ||
      precio === undefined ||
      duracion_minutos === undefined
    ) {
      return res.status(400).json({
        message: "Faltan campos obligatorios",
      });
    }

    const nuevoId = await crearServicio({
      categoria_id,
      nombre,
      descripcion,
      precio,
      duracion_minutos,
      imagen_url,
    });

    const nuevoServicio = await obtenerServicioPorId(nuevoId);

    res.status(201).json(nuevoServicio);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  listarServicios,
  mostrarServicioPorId,
  crearNuevoServicio,
};

