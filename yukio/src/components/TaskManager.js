

import React, { useState } from "react";

function TaskManager() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("top");
  const [deadline, setDeadline] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };


  const handleAddTask = () => {
    if (task.trim() === "" || deadline === "") {
      alert("Please select an upcoming date for the deadline.");
      return; // Don't add task if task or deadline is empty
    }

    const selectedDate = new Date(deadline);
    const currentDate = new Date();

    if (selectedDate <= currentDate) {
      alert("Please select an upcoming date for the deadline.");
      return; // Don't add task if deadline is not in the future
    }

    const newTask = {
      task,
      priority,
      deadline,
    };

    setTasks([...tasks, newTask]);
    setTask("");
    setPriority("top");
    setDeadline("");
  };

  const handleMarkDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = true;
    setTasks(updatedTasks);
  };

  return (
    <div className="taskbody">
      <header className="headerpg">
        <h1>Task Scheduler</h1>
      </header>
      <main>
        <div className="task-form">
          <input
            type="text"
            id="task"
            placeholder="Enter task..."
            value={task}
            onChange={handleTaskChange}
          />
          <select id="priority" value={priority} onChange={handlePriorityChange}>
            <option value="top">Top Priority</option>
            <option value="middle">Middle Priority</option>
            <option value="low">Less Priority</option>
          </select>
          <input
            type="date"
            id="deadline"
            value={deadline}
            onChange={handleDeadlineChange}
          />
          <button id="add-task" onClick={handleAddTask}>
            Add Task
          </button>
        </div>
        <div className="task-list">
          {tasks.map((task, index) => (
            <div className={`task ${task.done ? "done" : ""}`} key={index}>
              <p>{task.task}</p>
              <p>Priority: {task.priority}</p>
              <p>Deadline: {task.deadline}</p>
              {!task.done && (
                <button className="mark-done" onClick={() => handleMarkDone(index)}>
                  Mark Done
                </button>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default TaskManager;
