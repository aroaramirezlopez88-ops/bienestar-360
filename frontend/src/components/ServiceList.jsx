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
        const respuesta = await fetch("http://localhost:3000/api/servicios");

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

  if (cargando) {
    return <p>Cargando servicios...</p>;
  }

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
      <p>Servicios cargados: {servicios.length}</p>
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

      <div>
        {serviciosOrdenados.map((servicio) => (
          <article key={servicio.id}>
            <h3>{servicio.nombre}</h3>
            <p>Categoría: {servicio.categoria}</p>
            <p>Precio: {servicio.precio} €</p>
            <p>Duración: {servicio.duracion_minutos} min</p>
            <a href={`/servicios/${servicio.id}`}>Ver detalle</a>
            <a
              href="https://wa.me/34680215466"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reservar por WhatsApp
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServiceList;
