import React, { useState } from 'react';

function Project({ project, tasks, onDeleteProject }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleDeleteClick = () => {
    // Send a DELETE request to your backend to delete the project
    // You should replace '/your_backend_project_endpoint' with the actual endpoint
    fetch(`/dashboard/projects/${project.id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Project deleted successfully') {
          // Call the onDeleteProject callback to remove the project from the list
          onDeleteProject(project.id);
        } else {
          console.error('Error deleting project:', data.error);
        }
      })
      .catch((error) => console.error('Error deleting project:', error));
  };

  return (
    <div className="border rounded p-4 mb-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Title</h2>
        <label className="cursor-pointer">
          <input type="checkbox"  readOnly />
          <span className="ml-2">Completed?</span>
        </label>
      </div>
      <p className="text-gray-500">Description</p>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        onClick={handleToggleDetails}
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && (
        <div className="mt-2">
          <h3 className="text-lg font-semibold mb-2">Tasks:</h3>
          <ul className="list-disc ml-6">
            {tasks.map((task) => (
              <li key={task.id}>
                {task.name} - {task.completed ? 'Completed' : 'Not Completed'}
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
        onClick={handleDeleteClick}
      >
        Delete Project
      </button>
    </div>
  );
}

export default Project;
