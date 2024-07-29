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
import { FaChevronDown } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
const AdminDashboard = () => {
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
  }
  const handleEmployeeClick = ()=>{
    setDashboardActive("");
    setEmployeeActive("sidebar-button-active");
    setAnnouncementActive("");
    setTrainingActive("");
    setDocumentActive("");
    setLeavesActive("");
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
  const [headerShowAction, setHeaderShowAction] = useState("header-show-action header-show-action-invisible");
  const [chechShowActionStatus, setCheckActionStatus]=useState(false);
  const [headerLanguageOptions,setHeaderLanguageOptions] = useState("header-language-options header-language-options-invisible");
  const [headerNotificationOption,setHeaderNotificationOption] = useState("header-notification-option header-notification-option-invisible");
  const handleLanguageClick = ()=>{
    if(!chechShowActionStatus){
      setHeaderShowAction("header-show-action");
      setCheckActionStatus(true);
      setHeaderLanguageOptions("header-language-options");
      setHeaderNotificationOption("header-notification-option header-notification-option-invisible")
    }
    else{
      setHeaderNotificationOption("header-notification-option header-notification-option-invisible")
      setHeaderShowAction("header-show-action header-show-action-invisible");
      setCheckActionStatus(false);
      setHeaderLanguageOptions("header-language-options header-language-options-invisible");
    }
    
  }
  const handleNotificationClick = ()=>{
    if(!chechShowActionStatus){
      setHeaderShowAction("header-show-action");
      setCheckActionStatus(true);
      setHeaderLanguageOptions("header-language-options header-language-options-invisible");
      setHeaderNotificationOption("header-notification-option")
    }
    else{
      setHeaderShowAction("header-show-action header-show-action-invisible");
      setCheckActionStatus(false);
      setHeaderLanguageOptions("header-language-options header-language-options-invisible");
      setHeaderNotificationOption("header-notification-option header-notification-option-invisible")
    }
    
  }
  const [headerLanguageChangeEnglish, setHeaderLanguageChangeEnglish]=useState("header-english-option header-language-option-active");
  const [headerLanguageChangeRussian, setHeaderLanguageChangeRussian]=useState("header-english-option");
  const [headerLanguageChangeUzbek, setHeaderLanguageChangeUzbek]=useState("header-english-option");
  const [headerLanguageChangeContent, setHeaderLanguageChangeContent]=useState("English");
  const handleHeaderLanguageChangeRussian=()=>{
    setHeaderLanguageChangeContent("Russian");
    setHeaderLanguageChangeEnglish("header-english-option");
    setHeaderLanguageChangeRussian("header-english-option header-language-option-active")
    setHeaderLanguageChangeUzbek("header-english-option");
  }
  const handleHeaderLanguageChangeUzbek=()=>{
    setHeaderLanguageChangeContent("Uzbek");
    setHeaderLanguageChangeEnglish("header-english-option");
    setHeaderLanguageChangeRussian("header-english-option")
    setHeaderLanguageChangeUzbek("header-english-option header-language-option-active");
  }
  const handleHeaderLanguageChangeEnglish=()=>{
    setHeaderLanguageChangeContent("English");
    setHeaderLanguageChangeEnglish("header-english-option header-language-option-active");
    setHeaderLanguageChangeRussian("header-english-option")
    setHeaderLanguageChangeUzbek("header-english-option");
  }





  return (
    <div className="dashboard-container">
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




      {/* Main container start from here  */}

      <div className="main-container">
        <header className="main-container-header">
          <div className="main-container-language-icon-wrap">
            <FaChevronDown className='header-language-icon' onClick={handleLanguageClick}/>
            <span className="language-icon-text">
              {headerLanguageChangeContent}
            </span>
          </div>
          <IoMdNotificationsOutline className='header-notification-icon' onClick={handleNotificationClick}/>
          <CgProfile className='header-profile-icon'/>
          <div className={headerShowAction}>
            <ul className={headerLanguageOptions}>
              <li className={headerLanguageChangeEnglish} onClick={handleHeaderLanguageChangeEnglish}>English</li>
              <li className={headerLanguageChangeRussian} onClick={handleHeaderLanguageChangeRussian}>Russian</li>
              <li className={headerLanguageChangeUzbek} onClick={handleHeaderLanguageChangeUzbek}>Uzbek</li>
            </ul>
            <span className={headerNotificationOption}>You have got a new message!</span>
          </div>
        </header>
        <h3 className="title">Admin Dashboard</h3>
      </div>
      
    </div>
  );
}
export default AdminDashboard;