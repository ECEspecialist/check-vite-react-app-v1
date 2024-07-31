import logoImg from '../../Image/logo_1.png'
import { RxDashboard } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { GrAnnounce } from "react-icons/gr";
import { PiStudentBold } from "react-icons/pi";
import { GrDocumentUser } from "react-icons/gr";
import { GrDocumentText } from "react-icons/gr";
import { MdLogout } from "react-icons/md";
import { useState } from 'react';
import useId from '../../Auth/Id';
import { useNavigate } from 'react-router-dom';

function SidebarAdmin(){
               const [dashboardActive, setDashboardActive]=useState("sidebar-button-active");
               const [employeeActive, setEmployeeActive]=useState("");
               const [announcementActive, setAnnouncementActive]=useState("");
               const [trainingActive, setTrainingActive]=useState("");
               const [documentActive, setDocumentActive]=useState("");
               const [leavesActive, setLeavesActive]=useState("");
             
               const navigate = useNavigate();
             
               const handleDashboardClick = ()=>{
                 setDashboardActive("sidebar-button-active");
                 setEmployeeActive("");
                 setAnnouncementActive("");
                 setTrainingActive("");
                 setDocumentActive("");
                 setLeavesActive("");
                 navigate("dashboard");
               }
               const handleEmployeeClick = ()=>{
                 setDashboardActive("");
                 setEmployeeActive("sidebar-button-active");
                 setAnnouncementActive("");
                 setTrainingActive("");
                 setDocumentActive("");
                 setLeavesActive("");
                 navigate("all-employee");
               }
               const handleAnnouncementClick = ()=>{
                 setDashboardActive("");
                 setEmployeeActive("");
                 setAnnouncementActive("sidebar-button-active");
                 setTrainingActive("");
                 setDocumentActive("");
                 setLeavesActive("");
               }
               const handleTrainingClick = ()=>{
                 setDashboardActive("");
                 setEmployeeActive("");
                 setAnnouncementActive("");
                 setTrainingActive("sidebar-button-active");
                 setDocumentActive("");
                 setLeavesActive("");
               }
               const handleDocumentClick = ()=>{
                 setDashboardActive("");
                 setEmployeeActive("");
                 setAnnouncementActive("");
                 setTrainingActive("");
                 setDocumentActive("sidebar-button-active");
                 setLeavesActive("");
               }
               const handleLeaveClick = ()=>{
                 setDashboardActive("");
                 setEmployeeActive("");
                 setAnnouncementActive("");
                 setTrainingActive("");
                 setDocumentActive("");
                 setLeavesActive("sidebar-button-active");
               }
               const setIsLogin=useId((state)=>state.setIsLogin);
               const setIsAdmin=useId((state)=>state.setIsAdmin);
               const handleLougOutClick=()=>{
                 setIsLogin(false);
                 setIsAdmin(false);
                 navigate("/");
               }
               return(
                              <div className="sidebar-container">
                              <div className='sidebar-container-top'>
                              <div className="logo-container sidebar-logo-container">
                              <img className='logo-img' src={logoImg} alt="logo" />
                              <span className='logo-text'>EAST TELECOM</span>
                              </div>
                              <button className={`button sidebar-button ${dashboardActive}`} onClick={handleDashboardClick}>
                              <div className='sidebar-button-wrap'>
                              <RxDashboard className='sidebar-icon'/>
                              <span>Dashboard</span>
                              </div>
                              </button>
                              <button className={`button sidebar-button ${employeeActive}`} onClick={handleEmployeeClick}>
                              <div className='sidebar-button-wrap'>
                              <IoIosPeople className='sidebar-icon'/>
                              <span>All employees</span>
                              </div>
                              </button>
                              <button className={`button sidebar-button ${announcementActive}`} onClick={handleAnnouncementClick}>
                              <div className='sidebar-button-wrap'>
                              <GrAnnounce className='sidebar-icon'/>
                              <span>Announcement</span>
                              </div>
                              </button>
                              <button className={`button sidebar-button ${trainingActive}`} onClick={handleTrainingClick}>
                              <div className='sidebar-button-wrap'>
                              <PiStudentBold className='sidebar-icon'/>
                              <span>Training</span>
                              </div>
                              </button>
                              <button className={`button sidebar-button ${documentActive}`} onClick={handleDocumentClick}>
                              <div className='sidebar-button-wrap'>
                              <GrDocumentText className='sidebar-icon'/>
                              <span>Documents</span>
                              </div>
                              </button>
                              <button className={`button sidebar-button ${leavesActive}`} onClick={handleLeaveClick}>
                              <div className='sidebar-button-wrap'>
                              <GrDocumentUser className='sidebar-icon'/>
                              <span>Leaves</span>
                              </div>
                              </button>
                              </div>
                              <button className="button sidebar-button sidebar-button-logout" onClick={handleLougOutClick}>
                              <div className='sidebar-button-wrap'>
                              <MdLogout className='sidebar-icon'/>
                              <span>Log out</span>
                              </div>
                              </button>
                              </div>
               )
}

export default SidebarAdmin