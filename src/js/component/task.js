import React from "react";

function Task({ todo }) {
	return (
		<div>
			<span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
				{todo.text}
			</span>
			{/* <div>
				<button
					className="btn btn-success"
					onClick={() => markTodo(index)}>
					✓
				</button>
				<button
					className="btn btn-danger"
					onClick={() => removeTodo(index)}>
					✕
				</button>
			</div> */}
		</div>
	);
}

export default Task;
