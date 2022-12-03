import React from "react";
import TasksList from "./componenets/TaksList/TasksList";
import "./App.css";
import NewTask from "./componenets/NewTask/NewTask";

const App = () => {
  const taskGoals = [
    { id: "tg1", text: "Finish the course" },
    { id: "tg2", text: "Learn more" },
    { id: "tg3", text: "Help others" },
  ];

  return (
    <div>
      <h2>Course Goals</h2>
      <NewTask />
      <TasksList tasks={taskGoals} />
    </div>
  );
};

export default App;
