import React from "react";
import { useNavigate } from "react-router-dom";

const Project = () => {
    const navigate=useNavigate()
     const handleprofileclick = () => {
        navigate("/Profile");
     }     

     const handletasksclick = () =>{
                navigate("/tasks");

     }
    return (
      <div class="wrapper">
        {/* <!--Top menu --> */}
        <div class="sidebar">
          {/* <!--profile image & text--> */}
          <div class="profile">
            <img
              src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg"
              alt="profile_picture"
            />
            <h3>Daniel Orwenjo</h3>
            <p>Software engineer</p>
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
                <a href="#">
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
           <div class="app-container">
        
        <div class="app-content">
            
            <div class="projects-section">
                <div class="projects-section-header">
                    <p>Projects</p>
                    <p class="time">December, 12</p>
                </div>
                <div class="projects-section-line">
                    <div class="projects-status">
                        <div class="item-status">
                            <span class="status-number">45</span>
                            <span class="status-type">In Progress</span>
                        </div>
                        <div class="item-status">
                            <span class="status-number">24</span>
                            <span class="status-type">Upcoming</span>
                        </div>
                        <div class="item-status">
                            <span class="status-number">62</span>
                            <span class="status-type">Total Projects</span>
                        </div>
                    </div>
                    <div class="view-actions">
                        <button class="view-btn list-view" title="List View">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-list">
                                <line x1="8" y1="6" x2="21" y2="6" />
                                <line x1="8" y1="12" x2="21" y2="12" />
                                <line x1="8" y1="18" x2="21" y2="18" />
                                <line x1="3" y1="6" x2="3.01" y2="6" />
                                <line x1="3" y1="12" x2="3.01" y2="12" />
                                <line x1="3" y1="18" x2="3.01" y2="18" />
                            </svg>
                        </button>
                        <button class="view-btn grid-view active" title="Grid View">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-grid">
                                <rect x="3" y="3" width="7" height="7" />
                                <rect x="14" y="3" width="7" height="7" />
                                <rect x="14" y="14" width="7" height="7" />
                                <rect x="3" y="14" width="7" height="7" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="project-boxes jsGridView">
                    <div class="project-box-wrapper">
                        <div class="project-box" >
                            <div class="project-box-header">
                                <span>December 10, 2020</span>
                                <div class="more-wrapper">
                                    <button class="project-btn-more">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-more-vertical">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="project-box-content-header">
                                <p class="box-content-header">Web Designing</p>
                                <p class="box-content-subheader">Prototyping</p>
                            </div>
                            <div class="box-progress-wrapper">
                                <p class="box-progress-header">Progress</p>
                                <div class="box-progress-bar">
                                    <span class="box-progress" ></span>
                                </div>
                                <p class="box-progress-percentage">60%</p>
                            </div>
                            <div class="project-box-footer">
                                <div class="participants">
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                                        alt="participant"/>
                                    <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                                        alt="participant"/>
                                    <button class="add-participant" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                                            stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="days-left" >
                                    2 Days Left
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="project-box-wrapper">
                        <div class="project-box" >
                            <div class="project-box-header">
                                <span>December 10, 2020</span>
                                <div class="more-wrapper">
                                    <button class="project-btn-more">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-more-vertical">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="project-box-content-header">
                                <p class="box-content-header">Testing</p>
                                <p class="box-content-subheader">Prototyping</p>
                            </div>
                            <div class="box-progress-wrapper">
                                <p class="box-progress-header">Progress</p>
                                <div class="box-progress-bar">
                                    <span class="box-progress" ></span>
                                </div>
                                <p class="box-progress-percentage">50%</p>
                            </div>
                            <div class="project-box-footer">
                                <div class="participants">
                                    <img src="https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80"
                                        alt="participant"/>
                                    <img src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80"
                                        alt="participant"/>
                                    <button class="add-participant" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                                            stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="days-left" >
                                    2 Days Left
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="project-box-wrapper">
                        <div class="project-box">
                            <div class="project-box-header">
                                <span>December 10, 2020</span>
                                <div class="more-wrapper">
                                    <button class="project-btn-more">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-more-vertical">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="project-box-content-header">
                                <p class="box-content-header">Svg Animations</p>
                                <p class="box-content-subheader">Prototyping</p>
                            </div>
                            <div class="box-progress-wrapper">
                                <p class="box-progress-header">Progress</p>
                                <div class="box-progress-bar">
                                    <span class="box-progress" ></span>
                                </div>
                                <p class="box-progress-percentage">80%</p>
                            </div>
                            <div class="project-box-footer">
                                <div class="participants">
                                    <img src="https://images.unsplash.com/photo-1587628604439-3b9a0aa7a163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                                        alt="participant"/>
                                    <img src="https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80"
                                        alt="participant"/>
                                    <button class="add-participant" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                                            stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="days-left" >
                                    2 Days Left
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="project-box-wrapper">
                        <div class="project-box" >
                            <div class="project-box-header">
                                <span>December 10, 2020</span>
                                <div class="more-wrapper">
                                    <button class="project-btn-more">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-more-vertical">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="project-box-content-header">
                                <p class="box-content-header">UI Development</p>
                                <p class="box-content-subheader">Prototyping</p>
                            </div>
                            <div class="box-progress-wrapper">
                                <p class="box-progress-header">Progress</p>
                                <div class="box-progress-bar">
                                    <span class="box-progress" ></span>
                                </div>
                                <p class="box-progress-percentage">20%</p>
                            </div>
                            <div class="project-box-footer">
                                <div class="participants">
                                    <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                                        alt="participant"/>
                                    <img src="https://images.unsplash.com/photo-1587628604439-3b9a0aa7a163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                                        alt="participant"/>
                                    <button class="add-participant" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                                            stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="days-left" >
                                    2 Days Left
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="project-box-wrapper">
                        <div class="project-box" >
                            <div class="project-box-header">
                                {/* <span>December 10, 2020</span> */}
                                
                                <div class="more-wrapper">
                                    <button class="project-btn-more">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-more-vertical">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="project-box-content-header">
                                <p class="box-content-header">Data Analysis</p>
                                <p class="box-content-subheader">Prototyping</p>
                            </div>
                            <div class="box-progress-wrapper">
                                <p class="box-progress-header">Progress</p>
                                <div class="box-progress-bar">
                                    <span class="box-progress" ></span>
                                </div>
                                <p class="box-progress-percentage">60%</p>
                            </div>
                            <div class="project-box-footer">
                                <div class="participants">
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                                        alt="participant"/>
                                    <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                                        alt="participant"/>
                                    <button class="add-participant" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                                            stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="days-left" >
                                    2 Days Left
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="project-box-wrapper">
                        <div class="project-box" >
                            <div class="project-box-header">
                                <span>December 10, 2020</span>
                                <div class="more-wrapper">
                                    <button class="project-btn-more">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-more-vertical">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="project-box-content-header">
                                <p class="box-content-header">Web Designing</p>
                                <p class="box-content-subheader">Prototyping</p>
                            </div>
                            <div class="box-progress-wrapper">
                                <p class="box-progress-header">Progress</p>
                                <div class="box-progress-bar">
                                    <span class="box-progress" ></span>
                                </div>
                                <p class="box-progress-percentage">40%</p>
                            </div>
                            <div class="project-box-footer">
                                <div class="participants">
                                    <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                                        alt="participant"/>
                                    <img src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80"
                                        alt="participant"/>
                                    <button class="add-participant" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                                            stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="days-left" >
                                    2 Days Left
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
        </div>
      </div>
    );
}
export default Project;