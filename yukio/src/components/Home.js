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
      <section className="min-h-screen bg-white" data-aos="fade-down">
        <header className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold mb-4">Yukio PMA</h1>
          <p className="text-center text-gray-600 mb-8">
            A Powerful Project Management App for Your Needs
          </p>
          <a href="/register" className="text-white hover:underline btn">
            Try it now
          </a>
        </header>
        <main className="flex items-center justify-center mt-16">
          <img
            src={Meeting} // Replace with your image source
            alt="Meeting"
            className="w-1/2"
          />
          <div className="ml-8 lg:flex-col ">
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="list-disc pl-4">
              <li className="mb-2">Task Management</li>
              <li className="mb-2">Team Collaboration</li>
              <li className="mb-2">Project Tracking</li>
              <li className="mb-2">Document Sharing</li>
              <li className="mb-2">Real-time Notifications</li>
            </ul>
          </div>
        </main>
        <Footer />
      </section>
    </>
  );
};

export default Home;
