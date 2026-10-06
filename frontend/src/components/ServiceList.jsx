import { useEffect, useState } from "react";

function ServiceList() {
  const [servicios, setServicios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
  const [ordenPrecio, setOrdenPrecio] = useState("sin-orden");

  useEffect(() => {
    async function cargarServicios() {
      try {
        const respuesta = await fetch(
          `${import.meta.env.PUBLIC_API_URL}/api/servicios`,
        );

        if (!respuesta.ok) {
          throw new Error("Error al obtener los servicios");
        }

        const datos = await respuesta.json();

        setServicios(datos);
      } catch (error) {
        setError("No se pudieron cargar los servicios");
      } finally {
        setCargando(false);
      }
    }

    cargarServicios();
  }, []);

  if (cargando) return <p className="estado-carga">Cargando servicios...</p>;

  if (error) {
    return <p>{error}</p>;
  }

  if (servicios.length === 0) {
    return <p>No hay servicios disponibles.</p>;
  }
  const serviciosFiltrados = servicios.filter((servicio) => {
    return (
      categoriaSeleccionada === "Todas" ||
      servicio.categoria === categoriaSeleccionada
    );
  });

  const serviciosOrdenados = [...serviciosFiltrados];

  if (ordenPrecio === "precio-asc") {
    serviciosOrdenados.sort((a, b) => Number(a.precio) - Number(b.precio));
  }

  if (ordenPrecio === "precio-desc") {
    serviciosOrdenados.sort((a, b) => Number(b.precio) - Number(a.precio));
  }

  return (
    <section>
      <h2>Nuestros servicios</h2>
      <p>Servicios disponibles: {serviciosOrdenados.length}</p>
      <div className="servicios-controles">
        <div className="control-grupo">
          <label htmlFor="categoria">Filtrar por categoría:</label>

          <select
            id="categoria"
            value={categoriaSeleccionada}
            onChange={(event) => setCategoriaSeleccionada(event.target.value)}
          >
            <option value="Todas">Todas</option>
            <option value="Manicura">Manicura</option>
            <option value="Pedicura">Pedicura</option>
            <option value="Depilación">Depilación</option>
            <option value="Tratamientos Faciales">Tratamientos Faciales</option>
            <option value="Masajes y Osteopatía">Masajes y Osteopatía</option>
          </select>
        </div>

        <div className="control-grupo">
          <label htmlFor="orden-precio">Ordenar por precio:</label>

          <select
            id="orden-precio"
            value={ordenPrecio}
            onChange={(event) => setOrdenPrecio(event.target.value)}
          >
            <option value="sin-orden">Sin ordenar</option>
            <option value="precio-asc">Precio: menor a mayor</option>
            <option value="precio-desc">Precio: mayor a menor</option>
          </select>
        </div>
      </div>

      {serviciosOrdenados.length === 0 && (
        <p>No hay servicios disponibles para esta categoría.</p>
      )}

      <div className="servicios-grid">
        {serviciosOrdenados.map((servicio) => (
          <article className="servicio-card" key={servicio.id}>
            <h3>{servicio.nombre}</h3>
            <p>Categoría: {servicio.categoria}</p>
            <p>Precio: {servicio.precio} €</p>
            <p>Duración: {servicio.duracion_minutos} min</p>
            <div className="servicio-acciones">
              <a href={`/servicios/${servicio.id}`}>Ver detalle</a>
              <a
                href="https://wa.me/34680215466"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar por WhatsApp
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServiceList;
