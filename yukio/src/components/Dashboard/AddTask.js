import React, { useState } from 'react';

function AddTask({ projects, onTaskAdded }) {
  const [selectedProject, setSelectedProject] = useState('');
  const [taskName, setTaskName] = useState('');

  const handleProjectChange = (e) => {
    setSelectedProject(e.target.value);
  };

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleAddTask = () => {
    if (selectedProject && taskName) {
      fetch('/dashboard/create_task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ project_id: selectedProject, name: taskName }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === 'Task added successfully') {
            onTaskAdded(data.task);
            setSelectedProject('');
            setTaskName('');
          } else {
            console.error('Error adding task:', data.error);
          }
        })
        .catch((error) => console.error('Error adding task:', error));
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Add Task</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="project">
          Select a Project
        </label>
        <select
          className="w-full px-3 py-2 rounded border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          name="project"
          id="project"
          value={selectedProject}
          onChange={handleProjectChange}
        >
          <option value="">Select a project</option>
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.title}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="taskName">
          Task Name
        </label>
        <input
          className="w-full px-3 py-2 rounded border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
          name="taskName"
          id="taskName"
          value={taskName}
          onChange={handleTaskNameChange}
        />
      </div>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
