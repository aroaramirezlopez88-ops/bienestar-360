const {
  obtenerServicios,
  obtenerServicioPorId,
  crearServicio,
  actualizarServicio,
  eliminarServicio,
} = require("../data/serviciosData");

const {
  obtenerCategoriaPorId,
} = require("../data/categoriasData");

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

    const categoria = await obtenerCategoriaPorId(categoria_id);

    if (!categoria) {
      return res.status(400).json({
        message: "Categoria no valida",
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

async function modificarServicio(req, res, next) {
  try {
    const { id } = req.params;

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

    const categoria = await obtenerCategoriaPorId(categoria_id);

    if (!categoria) {
      return res.status(400).json({
        message: "Categoria no valida",
      });
    }

    const filasActualizadas = await actualizarServicio(id, {
      categoria_id,
      nombre,
      descripcion,
      precio,
      duracion_minutos,
      imagen_url,
    });

    if (filasActualizadas === 0) {
      return res.status(404).json({
        message: "Servicio no encontrado",
      });
    }

    const servicioActualizado = await obtenerServicioPorId(id);

    res.json(servicioActualizado);
  } catch (error) {
    next(error);
  }
}

async function borrarServicio(req, res, next) {
  try {
    const { id } = req.params;

    const filasEliminadas = await eliminarServicio(id);

    if (filasEliminadas === 0) {
      return res.status(404).json({
        message: "Servicio no encontrado",
      });
    }

    res.json({
      message: "Servicio eliminado correctamente",
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  listarServicios,
  mostrarServicioPorId,
  crearNuevoServicio,
  modificarServicio,
  borrarServicio,
};
