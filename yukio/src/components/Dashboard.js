import React from 'react';
import ProfilePage from "../pages/ProfilePage";
import{Link} from "react-router-dom";
import { navData } from '../data';
import Footer from './Footer';
import TasksPage from '../pages/TasksPage';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
     const navigate=useNavigate()

     const handleprofileclick=() => {

        navigate("/profile")
     }

     const handletaskclick = () =>{
        navigate("/tasks");

     }
     const handleprojectclick = () => {
        navigate("/projects");
     }
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
                <a href="" onClick={handleprofileclick}>
                  <span class="icon" >
                    <i class="fas fa-desktop"></i>
                  </span>
                  <span class="item" >
                    Profile
                  </span>
                </a>
                {/* </Link> */}
              </li>
              <li>
                <a href="" onClick={handletaskclick}>
                  <span class="icon">
                    <i class="fas fa-user-friends"></i>
                  </span>
                  <span class="item" >
                    Tasks
                  </span>
                </a>
              </li>
              <li>
                <a href="#" onClick={handleprojectclick}>
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
       
      </div>
    );
};
export default Dashboard;