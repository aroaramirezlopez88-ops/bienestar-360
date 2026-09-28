const pool = require("./db");

async function obtenerCategorias() {
  const [rows] = await pool.query(`
    SELECT
      id,
      nombre,
      descripcion
    FROM categorias
    WHERE activo = 1
    ORDER BY id
  `);

  return rows;
}

module.exports = {
  obtenerCategorias,
};
