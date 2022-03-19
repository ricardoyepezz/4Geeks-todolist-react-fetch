import React, { useState, useEffect } from "react";
import FormTask from "./formTask";
import Task from "./task";

const Home = () => {
	const [task, setTask] = useState([]);
	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/ricardoyepez")
			.then((response) => response.json())
			.then((result) => {
				setTask(result);
			})
			.catch((error) => console.log("error", error));
	}, []);

	function addTask() {
		var requestOptions = {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(task),
		};
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/ricardoyepez",
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => console.log(result))
			.catch((error) => console.log("error", error));
	}

	return (
		<div className="container border border-dark text-center w-50 mt-5">
			<h1 className="fw-light">To-Do List</h1>
			<h3 className="fw-light">Tasks:</h3>
			<div className="text-center">
				<FormTask addTask={addTask} setTask={setTask} task={task} />
				{task?.map((e, index) => {
					<Task key={index} index={index} todo={e} />;
					/* return <li key={index}>{e.label}</li>; */
				})}
			</div>
		</div>
	);
};

export default Home;
