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
		fetch("https://assets.breatheco.de/apis/fake/todos/user/ricardoyepez")
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				setTask(result);
			})
			.catch((error) => console.log("error", error));
	}

	// funcion para agregar tasks a api (PUT)----------------------------------------------------------------
	const addTask = (e) => {
		//si pulso enter al introducir texto en input agrega value a label y false a done
		//const addNewTask = { label: e.target.value, done: false };
		//luego concatena nuevo array addNewTask en mi estado
		//let newArray = task.concat(addNewTask);
		//ejecuta metodo PUT con nuevo array (agrega nuevo array a api)
		if (e.key === "Enter" && e.target.value !== "") {
			e.preventDefault();
			setTask([...task, { label: e.target.value, done: false }]);
			let newArray = [...task, { label: e.target.value, done: false }];
			putData(newArray);
			//deja en blanco el input
			//e.target.value = "";
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setTask([...task, { label: e.target.value, done: false }]);
		let newArray = [...task, { label: e.target.value, done: false }];
		putData(newArray);
	};

	const putData = (newArray) => {
		let requestOptions = {
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
	};
	// funcion para eliminar tasks de api (PUT)----------------------------------------------------------------
	function delTask(index) {
		if (index > -1) {
			//recibe array de estado task, recorre cada elemento de ese array task y lo compara con el index actual
			//retorna array de task sin la tarea con index = item
			const filterData = task.filter(
				(itemActual) => itemActual !== task[index]
			);
			setTask(filterData);
			putData(filterData);
		}
	}

	return (
		<div className="container border border-dark text-center w-50 mt-5">
			<h1 className="fw-light">To-Do List</h1>
			<h3 className="fw-light">Tasks: {task.length}</h3>
			<form>
				<div className="input-group mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="Add a task!"
						onKeyPress={(e) => {
							addTask(e);
						}}
					/>
					<button
						onClick={(e) => {
							handleSubmit(e);
						}}
						className="btn btn-outline-secondary"
						type="button">
						+
					</button>
				</div>
			</form>
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
