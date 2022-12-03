import React from "react";
import "./NewTask.css";

const NewTask = () => {
  const addTaskHandler = (event) => {
    event.preventDefault();
    const newGoal = {
      id: Math.random().toString(),
      text: "My new cute goal!",
    };

    console.log(newGoal);
  };

  return (
    <form onSubmit={addTaskHandler}>
      <input type="text" />
      <button>Add Task</button>
    </form>
  );
};

export default NewTask;
