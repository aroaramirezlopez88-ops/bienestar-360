import { useEffect, useState } from "react";

function ServiceList() {
	const [servicios, setServicios] = useState([]);

	useEffect(() => {
		async function cargarServicios() {
			const respuesta = await fetch("http://localhost:3000/api/servicios");
			const datos = await respuesta.json();

			setServicios(datos);
		}

		cargarServicios();
	}, []);

	return (
		<section>
			<h2>Nuestros servicios</h2>
			<p>Servicios cargados: {servicios.length}</p>
		</section>
	);
}

export default ServiceList;
