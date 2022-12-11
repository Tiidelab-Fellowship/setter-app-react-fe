import "../../Stylesheets/SideBar.css";
import {
  FaCalendar,
  FaChartLine,
  FaPeopleArrows,
  FaFoursquare,
  FaPhone,
  FaSignal,
  FaSignOutAlt,
  FaChessBoard

} from "react-icons/fa";
import logo from "../../SetterApp-Assets/SetterApp-Logo.png";
import { Link, NavLink } from "react-router-dom";

export const SideBar = () => {
  const activeLink = "CurrentPage"
  const normalLink = ""
  return (
    <div className="sidebarContainer" style={{height : "auto"}}>
      <div className="logoContainer">
        <Link to = '/'>
        <p className="logoItself">
          <img src={logo} alt="SetterApp-Logo" />
          <span> SetterApp </span>
        </p>
        </Link> 
      </div>
      <div className="linkToEachPage">
        <div className="eachPage">
          <FaChessBoard />
          <NavLink className={({isActive})=>(isActive ? activeLink : normalLink) } to="/SocialDashboard">
            <span className="fontspace ">
              <FaChessBoard />
            </span>{" "}
           <span id="item">Dashboard</span> 
          </NavLink>
        </div>
        <div className="eachPage">
          <NavLink className={({isActive})=>(isActive ? activeLink : normalLink)} to="/PostSchedule">
            {" "}
            <span className="fontspace">
              <FaCalendar />
            </span>{" "}
            Post Schedule
          </NavLink>
        </div>
        <div className="eachPage">
          <NavLink className={({isActive})=>(isActive ? activeLink : normalLink) } to="/PostQueue">
            {" "}
            <span className="fontspace">
              <FaPeopleArrows />
            </span>{" "}
            Post Queue
          </NavLink>
        </div>
        <div className="eachPage">
          <NavLink className={({isActive})=>(isActive ? activeLink : normalLink) } to="/AnalyticsPage">
            <span className="fontspace">
              <FaChartLine />
            </span>{" "}
            Analytics
          </NavLink>
        </div>
        <div className="eachPage">
          <NavLink className={({isActive})=>(isActive ? activeLink : normalLink) } to="/ContactUs">
            <span className="fontspace">
              <FaPhone />
            </span>{" "}
            Contact Us
          </NavLink>
        </div>
      </div>
      <div className="bottomSideFooter">
        <Link to="/">
          <span className="fontspace">
            <FaSignOutAlt />
          </span>{" "}
          Logout
        </Link>
      </div>
    </div>
  );
};

export const SideBarTwo = () => {
  const activeLink = "CurrentPage"
  const normalLink = ""
  return (
    <div className="sidebarContainer" style={{padding : "3% 0 21% 2%"}}>
      <div className="logoContainer">
      <Link to ='/'>
        <p className="logoItself">
         <img src={logo} alt="SetterApp-Logo" />
         <span> SetterApp </span> 
        </p>
        </Link>
      </div>
      <div className="linkToEachPage">
        <div className="eachPage">
          <NavLink className={({isActive})=>(isActive ? activeLink : normalLink) }  to="/SocialDashboard">
            <span className="fontspace ">
              <FaFoursquare />
            </span>{" "}
            Dashboard
          </NavLink >
        </div>
        <div className="eachPage">
          <NavLink className={({isActive})=>(isActive ? activeLink : normalLink) }  to="/PostSchedule">
            {" "}
            <span className="fontspace">
              <FaCalendar />
            </span>{" "}
            Post Schedule
          </NavLink >
        </div>
        <div className="eachPage">
          <NavLink className={({isActive})=>(isActive ? activeLink : normalLink) }  to="/PostQueue">
            {" "}
            <span className="fontspace">
              <FaSignal />
            </span>{" "}
            Post Queue
          </NavLink >
        </div>
        <div className="eachPage">
          <NavLink className={({isActive})=>(isActive ? activeLink : normalLink) }  to="/AnalyticsPage">
            <span className="fontspace">
              <FaChartLine />
            </span>{" "}
            Analytics
          </NavLink >
        </div>
        <div className="eachPage">
          <NavLink className={({isActive})=>(isActive ? activeLink : normalLink) }  to="/ContactUs">
            <span className="fontspace">
              <FaPhone />
            </span>{" "}
            Contact Us
          </NavLink >
        </div>
      </div>
      <div className="bottomSideFooter">
        <Link to="/">
          <span className="fontspace">
            <FaSignOutAlt />
          </span>{" "}
          Logout
        </Link>
      </div>
    </div>
  );
};