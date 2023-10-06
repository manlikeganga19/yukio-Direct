import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
// import Header from "./components/Header"; 
// import NavMobile from "./components/NavMobile";
import Dashboard from "./components/Dashboard"; 
import Home from "./components/Home";
import ProfilePage from "./pages/ProfilePage";
import ProjectPage from "./pages/ProjectsPage";
import TasksPage from "./pages/TasksPage";

const App = () => {
  // const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 100,
    });
  });
  return (
    <div className="">
     
      {/* <Header  /> */}
      {/* <div
        className={`${
          navMobile ? "right-0" : "-right-full"
        } fixed z-10 top-0 h-full transition-all duration-200`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div> */}

      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/Projects" element={<ProjectPage/>}/>
        </Routes>
    
    </div>
  );
};

export default App;
