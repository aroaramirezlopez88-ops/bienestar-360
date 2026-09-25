const pool = require("./db");

async function obtenerServicios() {
  const [rows] = await pool.query(`
    SELECT
      s.id,
      s.nombre,
      s.descripcion,
      s.precio,
      s.duracion_minutos,
      s.imagen_url,
      c.id AS categoria_id,
      c.nombre AS categoria
    FROM servicios s
    INNER JOIN categorias c
      ON s.categoria_id = c.id
    WHERE s.activo = 1
      AND c.activo = 1
    ORDER BY c.id, s.id
  `);

  return rows;
}

async function obtenerServicioPorId(id) {
  const [rows] = await pool.query(
    `
      SELECT
        s.id,
        s.nombre,
        s.descripcion,
        s.precio,
        s.duracion_minutos,
        s.imagen_url,
        c.id AS categoria_id,
        c.nombre AS categoria
      FROM servicios s
      INNER JOIN categorias c
        ON s.categoria_id = c.id
      WHERE s.id = ?
        AND s.activo = 1
        AND c.activo = 1
    `,
    [id]
  );

  return rows[0];
}

async function crearServicio(servicio) {
  const {
    categoria_id,
    nombre,
    descripcion,
    precio,
    duracion_minutos,
    imagen_url,
  } = servicio;

  const [result] = await pool.query(
    `
      INSERT INTO servicios (
        categoria_id,
        nombre,
        descripcion,
        precio,
        duracion_minutos,
        imagen_url
      )
      VALUES (?, ?, ?, ?, ?, ?)
    `,
    [
      categoria_id,
      nombre,
      descripcion,
      precio,
      duracion_minutos,
      imagen_url || null,
    ]
  );

  return result.insertId;
}

module.exports = {
  obtenerServicios,
  obtenerServicioPorId,
  crearServicio,
};

