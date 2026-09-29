const {
  crearConsultaContacto,
} = require("../data/consultasContactoData");

async function crearNuevaConsulta(req, res, next) {
  try {
    const {
      nombre,
      email,
      telefono,
      mensaje,
    } = req.body;

    if (
      !nombre ||
      !email ||
      !mensaje
    ) {
      return res.status(400).json({
        message: "Faltan campos obligatorios",
      });
    }

    const nuevoId = await crearConsultaContacto({
      nombre,
      email,
      telefono,
      mensaje,
    });

    res.status(201).json({
      id: nuevoId,
      message: "Consulta enviada correctamente",
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  crearNuevaConsulta,
};
