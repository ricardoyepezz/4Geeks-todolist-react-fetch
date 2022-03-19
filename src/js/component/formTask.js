import React, { useState } from "react";

function FormTask({ addTask, setTask, task }) {
	const [value, setValue] = useState({ label: "", done: "" });

	const handleSubmit = (e) => {
		e.preventDefault();
		setTask([...task, value]);
		addTask();
	};

	return (
		<form
			onSubmit={(e) => {
				handleSubmit(e);
			}}>
			<div className="input-group mb-3">
				<input
					type="text"
					value={value.label}
					className="form-control"
					placeholder="Add a task!"
					onChange={(e) => {
						setValue({
							label: e.target.value,
							done: e.target.false,
						});
					}}
				/>
				<button className="btn btn-outline-secondary" type="submit">
					+
				</button>
			</div>
		</form>
	);
}

export default FormTask;
