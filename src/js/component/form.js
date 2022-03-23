import React, { useState } from "react";

function Form({ addTask }) {
	const [value, setValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;
		addTask(value);
		setValue("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="input-group mb-3">
				<input
					type="text"
					value={value}
					className="form-control"
					placeholder="Add a task!"
					onChange={(e) => {
						addTask(e);
					}}
				/>
				<button className="btn btn-outline-secondary" type="submit">
					+
				</button>
			</div>
		</form>
	);
}

export default Form;
