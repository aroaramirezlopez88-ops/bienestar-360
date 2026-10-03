import { useEffect, useState } from "react";

function ServiceList() {
	const [servicios, setServicios] = useState([]);
	const [cargando, setCargando] = useState(true);
	const [error, setError] = useState("");

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

	return (
		<section>
			<h2>Nuestros servicios</h2>
			<p>Servicios cargados: {servicios.length}</p>
		</section>
	);
}

export default ServiceList;
