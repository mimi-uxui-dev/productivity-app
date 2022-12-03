import React from "react"
import "./TaskList.css"

const TasksList = (props) => {
  const taskGoals = props.tasks

  return (
    <ul>
      {taskGoals.map((task) => (
        <li key={task.id}>{task.text}</li>
      ))}
    </ul>
  )
}

export default TasksList