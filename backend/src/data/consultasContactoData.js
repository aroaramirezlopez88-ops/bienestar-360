const pool = require("./db");

async function crearConsultaContacto(consulta) {
  const {
    nombre,
    email,
    telefono,
    mensaje,
  } = consulta;

  const [result] = await pool.query(
    `
      INSERT INTO consultas_contacto (
        nombre,
        email,
        telefono,
        mensaje
      )
      VALUES (?, ?, ?, ?)
    `,
    [
      nombre,
      email,
      telefono || null,
      mensaje,
    ]
  );

  return result.insertId;
}

module.exports = {
  crearConsultaContacto,
};
