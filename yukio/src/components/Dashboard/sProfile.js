import React from 'react';

function Profile({ user, projectsCount, completedProjectsCount, onLogout }) {
  const initials = user.name
    .split(' ')
    .map((namePart) => namePart[0])
    .join('');

  return (
    <div className="p-4 border rounded-lg text-center">
      <div className="w-24 h-24 mx-auto rounded-full bg-blue-500 text-white font-bold text-4xl flex items-center justify-center">
        {initials}
      </div>
      <h2 className="text-2xl font-semibold mt-4">{user.name}</h2>
      <p className="text-gray-500 mt-2">
        {projectsCount} Projects | {completedProjectsCount} Completed
      </p>
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
