import React from 'react';

function Dashboard() {
  return (
    <div className="flex h-screen">
      
      <nav className="bg-black text-white w-1/6 p-4">
        
        <ul>
          <li className="mb-4">Projects</li>
          <li className="mb-4">Tasks</li>
          <li className="mb-4">Profile</li>
          <li>Logout</li>
        </ul>
      </nav>

      
      <div className="w-5/6 p-4 bg-white">
        
      </div>
    </div>
  );
}

export default Dashboard;
