import React, { useState } from "react";

import FormularioTareas from "./FormularioTareas.jsx";

//create your first component
const Home = () => {
	const [tareas, setListaTareas] = useState([]);

	const agregarTarea = (nombreTarea) => {
		const auxTarea = tareas.concat(nombreTarea);
		setListaTareas(auxTarea);
	};
	const eliminarTarea = (index) => {
		const auxTarea = tareas.filter((tarea, auxIndex) => {
			if (index !== auxIndex) {
				return tarea;
			}
		});
		setListaTareas(auxTarea);
	};

	return (
		<div className="container">
			<h1>Lista de Tareas</h1>
			<FormularioTareas tarea={agregarTarea} />
			{tareas.map((tarea, index) => {
				return (
					<>
						<h5>
						
							{tarea}
							<button
								id="eliminar"
								onClick={() => {
									eliminarTarea(index);
								}}>
								Eliminar
							</button>
						</h5>
					</>
				);
			})}
		</div>
	);
};
export default Home;
