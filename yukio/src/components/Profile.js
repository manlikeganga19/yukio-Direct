import React from "react";
import { useNavigate } from 'react-router-dom';


const Profile = ({projectsCount, completedProjectsCount, }) => {
    const navigate=useNavigate()
      const handleprojectclick = () => {
        navigate("/Projects")
      }
     

     const handletasksclick = () =>{
                navigate("/tasks");

     }
     const handleLogout = () => {
      fetch('/logout', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          if (res.ok) {
            navigate("/login"); 
          } else {
            console.error('Logout failed');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
  return (
    <div class="wrapper">
      {/* <!--Top menu --> */}
      <div class="sidebar">
        {/* <!--profile image & text--> */}
        <div class="profile">
          <img
            src=""
            alt="profile_picture"
          />
          <h3></h3>
          <p></p>
          <ul>
            <li>
              <a href="/" class="active">
                <span class="icon">
                  <i class="fas fa-home"></i>
                </span>
                <span class="item">Home</span>
              </a>
            </li>
            <li>
              {/* <Link to="./"> */}
              <a href="">
                <span class="icon">
                  <i class="fas fa-desktop"></i>
                </span>
                <span class="item">Profile</span>
              </a>
              {/* </Link> */}
            </li>
            <li>
              <a href="" onClick={handletasksclick}>
                <span class="icon">
                  <i class="fas fa-user-friends"></i>
                </span>
                <span class="item">Tasks</span>
              </a>
            </li>
            <li>
              <a href="" onClick={handleprojectclick}>
                <span class="icon">
                  <i class="fas fa-tachometer-alt"></i>
                </span>
                <span class="item">Project</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon-a">
                  <i class="fas fa-tachometer-alt"></i>
                </span>
                <span class="item">Logout</span>
              </a>
            </li>
          </ul>
        </div>
        {/* <!--menu item--> */}
      </div>
      <div class="red">
      <div className="p-4 border rounded-lg text-center">
      <div className="w-24 h-24 mx-auto rounded-full bg-blue-500 text-white font-bold text-4xl flex items-center justify-center">
        T
      </div>
      <h2 className="text-2xl font-semibold mt-4">Name</h2>
      <p className="text-gray-500 mt-2">
        {projectsCount} Projects | {completedProjectsCount} Completed
      </p>
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
        oncClick={handleLogout}
      >
        Logout
      </button>
    </div>
      </div>
    </div>
  );
};
export default Profile;
