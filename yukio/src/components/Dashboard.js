import React from 'react';
import { navData } from '../data';
import Footer from './Footer';


const Dashboard = () => {
    return (
     
        <div class="wrapper" >
        {/* <!--Top menu --> */}
        <div class="sidebar" >
            {/* <!--profile image & text--> */}
            <div class="profile" >
                <img src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg"
                    alt="profile_picture"/>
                <h3>Daniel Orwenjo</h3>
                <p>Software engineer</p>
                <ul>
                    <li>
                        <a href="/" class="active">
                            <span class="icon"><i class="fas fa-home"></i></span>
                            <span class="item">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="icon"><i class="fas fa-desktop"></i></span>
                            <span class="item">My Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="icon"><i class="fas fa-user-friends"></i></span>
                            <span class="item">People</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="icon"><i class="fas fa-tachometer-alt"></i></span>
                            <span class="item">Perfomance</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="icon"><i class="fas fa-database"></i></span>
                            <span class="item">Development</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="icon"><i class="fas fa-chart-line"></i></span>
                            <span class="item">Reports</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="icon"><i class="fas fa-user-shield"></i></span>
                            <span class="item">Admin</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="icon"><i class="fas fa-cog"></i></span>
                            <span class="item">Settings</span>
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