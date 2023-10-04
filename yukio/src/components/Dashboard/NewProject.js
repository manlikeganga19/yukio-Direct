import React, { useState } from 'react';

function AddProject(props) {
  const [project, setProject] = useState({ title: '', description: '' });
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleAddProject = () => {
    if (project.title.trim() !== '') {
      fetch('/dashboard/create_project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === 'Project added successfully') {
            props.history.push('/projects');
          } else {
            console.error('Error adding project:', data.error);
          }
        })
        .catch((error) => console.error('Error adding project:', error));
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Add a New Project</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="w-full px-3 py-2 rounded border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            name="title"
            id="title"
            value={project.title}
            onChange={handleProjectChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="w-full px-3 py-2 rounded border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            name="description"
            id="description"
            rows="4"
            value={project.description}
            onChange={handleProjectChange}
          ></textarea>
        </div>
      </form>
      <h2 className="text-lg font-semibold mb-2">Add Tasks</h2>
      <div className="mb-4">
        <input
          className="w-full px-3 py-2 rounded border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Task name"
          value={task}
          onChange={handleTaskChange}
        />
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Tasks:</h3>
        <ul className="list-disc ml-6">
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
      <button
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
        onClick={handleAddProject}
      >
        Add Project
      </button>
    </div>
  );
}

export default AddProject;
