import React from "react";
import Meeting from "../assests/549.jpg";
import Footer from "./Footer";
import Header from "../components/Header";
// import { Link } from 'react-router-dom';

const Home = () => {
  return (
    // <Header/>
    <>
      <Header />
      <section
        className="section wrap"
        data-aos="fade-down"
        data-aos-offset="400"
      >
        <header className="flex flex-col items-center justify-center pt-[80px]">
          <h1 className="section-title">YUKIO PROJECT MANAGER</h1>
          <p className="text-center text-gray-600 mb-8">
            A Powerful Project Management App for Your Needs
          </p>
          <a href="/register" className="text-white hover:underline btn">
            Try it now
          </a>
        </header>
      </section>
      <section className="section flex items-center justify-center mt-16 bg-white">
        <div className="flex ">
          <img
            src={Meeting} // Replace with your image source
            alt="Meeting"
            className="w-[500px]"
            data-aos="fade-right"
            data-offset="400"
          />

          <div className="ml-80 lg:flex-col pt-[30vh]">
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="list-disc pl-4">
              <li className="mb-2">Task Management</li>
              <li className="mb-2">Team Collaboration</li>
              <li className="mb-2">Project Tracking</li>
              <li className="mb-2">Document Sharing</li>
              <li className="mb-2">Real-time Notifications</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
