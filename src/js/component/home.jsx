import React, { useState, useEffect } from "react";

//create your first component
/*fetch("https://hp-api.herokuapp.com/api/characters")
.then((response) => response.json())
.then((result) => {
	setHp(result);
})
.catch((error) => console.log("error", error));
}, []); */

const Home = () => {
	const [task, setTask] = useState();
	useEffect(() => {
		var requestOptions = {
			method: "GET",
			redirect: "follow",
		};

		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/ricardoyepez",
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => {
				setTask(result);
			})
			.catch((error) => console.log("error", error));
	}, []);
	return (
		<div className="container border border-dark text-center w-50 mt-5">
			<h1 className="fw-light">To-Do List</h1>
			<h3 className="fw-light">Tasks:</h3>
			<div className="text-center">
				{task?.map((e, index) => {
					return <li key={index}>{e.label}</li>;
				})}
			</div>
		</div>
	);
};

export default Home;
