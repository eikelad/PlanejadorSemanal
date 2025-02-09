import React from "react";
import "../styles/global.css";

const TaskItem = ({ task, completed, onToggle }) => {
  return (
    <div className={`task ${completed ? "completed" : ""}`}>
      <span>{task}</span>
      <input type="checkbox" checked={completed} onChange={onToggle} />
    </div>
  );
};

export default TaskItem;
