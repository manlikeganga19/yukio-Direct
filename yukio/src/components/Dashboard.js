import React from 'react';
import { navData } from '../data';
import Footer from './Footer';


const Dashboard = () => {
    return (
     
        <section className='section py-[0px] flex h-screen w-full top-0 bottom-0' data-aos="fade-left" data-aos-offset="400">
            <nav className='bg-black text-white w-60 p-4 '>
                <ul className=''>
                    {navData.map((item, index) => {
                        return (
                            <li className='lg:flex-col' key={index}>
                                <a href={item.href}>{item.Project} {item.user}</a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </section>
      
       
    );
};
export default Dashboard;