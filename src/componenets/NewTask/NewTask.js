import React, { useState } from "react";
import "./NewTask.css";

const NewTask = (props) => {
  const [newTaskText, setNewTaskText] = useState("");

  const addTaskHandler = (event) => {
    event.preventDefault();

    if (newTaskText === "") return;

    const newTask = {
      id: Math.random().toString(),
      text: newTaskText,
    };

    props.onAddTask(newTask);

    setNewTaskText("");
  };

  return (
    <form onSubmit={addTaskHandler}>
      <input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      />
      <button>Add Task</button>
    </form>
  );
};

export default NewTask;
