import React, { useState } from 'react';

const Profile = () => {
  const [completed, setCompleted] = useState(false);

  const handleCheckboxChange = () => {
    setCompleted(!completed);
  };

  return (
    <div className="container mx-auto px-4 flex flex-wrap space-y-4 md:space-y-0 md:space-x-4">
      
      <div className="flex-1 box-border w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4">
        <div className="bg-white border border-gray-300 rounded-lg p-4 hover:shadow-md">
          <h1 className="text-lg font-semibold mb-2">Project Name</h1>
          <p className="text-gray-600">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          
          
          <label className="flex items-center mt-4">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-500"
              checked={completed}
              onChange={handleCheckboxChange}
            />
            <span className="ml-2 text-gray-700">Completed</span>
          </label>
        </div>
      </div>

      
      <div className="flex-1 box-border w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4">
        <div className="bg-white border border-gray-300 rounded-lg p-4 hover:shadow-md">
          <h1 className="text-lg font-semibold mb-2">Project Name</h1>
          <p className="text-gray-600">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          
         
          <label className="flex items-center mt-4">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-500"
              checked={completed}
              onChange={handleCheckboxChange}
            />
            <span className="ml-2 text-gray-700">Completed</span>
          </label>
        </div>
      </div>

      <div className="flex-1 box-border w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4">
        <div className="bg-white border border-gray-300 rounded-lg p-4 hover:shadow-md">
          Add Button for adding project
        </div>
      </div>

      
    </div>
  );
};

export default Profile;
