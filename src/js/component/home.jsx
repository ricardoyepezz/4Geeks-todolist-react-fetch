import React, { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Home = () => {
	// creo estados useState
	const [task, setTask] = useState([]);

	// utilizo hook useEffect para renderizar valores en GET------------------------------------------------

	useEffect(() => {
		getData();
	}, []);

	// funcion para traer tasks de api (GET)----------------------------------------------------------------

	function getData() {
		var requestOptions = {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		};

		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/ricardoyepez",
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				setTask(result);
			})
			.catch((error) => console.log("error", error));
	}

	// funcion para agregar tasks a api (PUT)----------------------------------------------------------------
	function addTask(e) {
		if (e.key === "Enter" && e.target.value !== "") {
			//si pulso enter al introducir texto en input agrega value a label y false a done
			const addNewTask = { label: e.target.value, done: false };
			//luego concatena nuevo array addNewTask en mi estado
			let newArray = task.concat(addNewTask);
			//ejecuta metodo PUT con nuevo array (agrega nuevo array a api)
			putData(newArray);
			//deja en blanco el input
			e.target.value = "";
		}
	}
	function putData(newArray) {
		var requestOptions = {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newArray),
		};

		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/ricardoyepez",
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => {})
			.catch((error) => console.log("error", error));
	}
	// funcion para eliminar tasks de api (PUT)----------------------------------------------------------------
	function delTask(index) {
		if (index > -1) {
			//recibe array de estado task, recorre cada elemento de ese array task y lo compara con el index actual
			//retorna array de task sin la tarea con index = item
			const filterData = task.filter(
				(itemActual) => itemActual !== task[index]
			);
			console.log("item", index);
			setTask(filterData);
			putData(filterData);
		}
	}

	return (
		<div className="container border border-dark text-center w-50 mt-5">
			<h1 className="fw-light">To-Do List</h1>
			<h3 className="fw-light">Tasks: {task.length}</h3>
			<div className="input-group mb-3">
				<input
					type="text"
					placeholder="add a task!"
					onKeyPress={(e) => {
						addTask(e);
					}}
				/>
			</div>

			{task.map((element, index) => {
				return (
					<div
						key={index}
						onClick={() => {
							delTask(index);
						}}>
						{element.label}{" "}
						<span>
							{" "}
							<FaTrashAlt />{" "}
						</span>{" "}
					</div>
				);
			})}
		</div>
	);
};
export default Home;
