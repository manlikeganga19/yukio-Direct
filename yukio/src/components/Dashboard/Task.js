import React, { useState } from 'react';

function Task({ project, tasks, onProjectDone }) {
  const [showTasks, setShowTasks] = useState(false);
  const [projectDone, setProjectDone] = useState(false);

  const handleToggleTasks = () => {
    setShowTasks(!showTasks);
  };

  const handleProjectDoneChange = () => {
    setProjectDone(!projectDone);

    fetch(`/update_project/${project.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ done: !projectDone }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Project updated successfully') {
          onProjectDone(data.project.id, data.project.done);
        } else {
          console.error('Error updating project:', data.error);
        }
      })
      .catch((error) => console.error('Error updating project:', error));
  };

  return (
    <div className="border rounded p-4 mb-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Title</h2>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={projectDone}
            onChange={handleProjectDoneChange}
          />
          <span>Project Done</span>
        </label>
      </div>
      <p className="text-gray-500">Description</p>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        onClick={handleToggleTasks}
      >
        {showTasks ? 'Hide Tasks' : 'Show Tasks'}
      </button>
      {showTasks && (
        <ul className="mt-2 list-disc ml-6">
          {/* {tasks.map((task) => (
            <li key={task.id}>{task.name}</li>
          ))} */}
        </ul>
      )}
    </div>
  );
}

export default Task;
