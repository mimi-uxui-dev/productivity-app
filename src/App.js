import React, { useState } from "react";
import TasksList from "./componenets/TaksList/TasksList";
import "./App.css";
import NewTask from "./componenets/NewTask/NewTask";

const App = () => {
  const [taskList, setTaskList] = useState([
    { id: "tg1", text: "Finish the course" },
    { id: "tg2", text: "Learn more" },
    { id: "tg3", text: "Help others" },
  ]);

  const addNewTaskHandler = (newTask) =>
    setTaskList((prevTaskList) => prevTaskList.concat(newTask));

  return (
    <div>
      <h2>Tasks</h2>
      <NewTask onAddTask={addNewTaskHandler} />
      <TasksList tasks={taskList} />
    </div>
  );
};

export default App;
