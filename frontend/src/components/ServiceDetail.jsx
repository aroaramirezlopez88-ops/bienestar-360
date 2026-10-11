import { useEffect, useState } from "react";
const imagenesPorCategoria = {
  Manicura: "/images/manicura.jpg",
  Pedicura: "/images/pedicura.jpg",
  Depilación: "/images/depilacion.jpg",
  "Tratamientos Faciales": "/images/higiene.jpg",
  "Masajes y Osteopatía": "/images/masaje.jpg",
};

function ServiceDetail({ id }) {
  const [servicio, setServicio] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function cargarServicio() {
      try {
        const respuesta = await fetch(
          `${import.meta.env.PUBLIC_API_URL}/api/servicios/${id}`,
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
    <section className="servicio-detalle">
      <img
        className="detalle-imagen"
        src={imagenesPorCategoria[servicio.categoria]}
        alt={`Servicio de ${servicio.categoria}`}
      />
      <h2>{servicio.nombre}</h2>
      <p>{servicio.descripcion}</p>
      <p>Categoría: {servicio.categoria}</p>
      <p>Precio: {servicio.precio} €</p>
      <p>Duración: {servicio.duracion_minutos} min</p>
      <div className="detalle-acciones">
        <a
          href="https://wa.me/34680215466"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reservar por WhatsApp
        </a>
      </div>
    </section>
  );
}

export default ServiceDetail;
