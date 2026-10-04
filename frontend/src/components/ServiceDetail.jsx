import { useEffect, useState } from "react";

function ServiceDetail({ id }) {
  const [servicio, setServicio] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function cargarServicio() {
      try {
        const respuesta = await fetch(
          `http://localhost:3000/api/servicios/${id}`,
        );

        if (!respuesta.ok) {
          throw new Error("Error al obtener el servicio");
        }

        const datos = await respuesta.json();

        setServicio(datos);
      } catch (error) {
        setError("No se pudo cargar el servicio");
      } finally {
        setCargando(false);
      }
    }

    cargarServicio();
  }, [id]);

  if (cargando) {
    return <p>Cargando servicio...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!servicio) {
    return <p>Servicio no disponible.</p>;
  }

  return (
    <section>
      <h2>{servicio.nombre}</h2>
      <p>{servicio.descripcion}</p>
      <p>Categoría: {servicio.categoria}</p>
      <p>Precio: {servicio.precio} €</p>
      <p>Duración: {servicio.duracion_minutos} min</p>
    </section>
  );
}

export default ServiceDetail;
