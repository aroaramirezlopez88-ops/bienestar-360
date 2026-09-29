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

async function obtenerCategoriaPorId(id) {
  const [rows] = await pool.query(
    `
      SELECT
        id,
        nombre,
        descripcion
      FROM categorias
      WHERE id = ?
        AND activo = 1
    `,
    [id]
  );

  return rows[0];
}

module.exports = {
  obtenerCategorias,
  obtenerCategoriaPorId,
};
