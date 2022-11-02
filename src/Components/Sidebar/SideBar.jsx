import "../../Stylesheets/SideBar.css";
import {
  FaCalendar,
  FaChartLine,
  FaEnvelope,
  FaFoursquare,
  FaPhone,
  FaSignal,
  FaSignOutAlt,
  FaWrench,
} from "react-icons/fa";
import logo from "../../SetterApp-Assets/SetterApp-Logo.png";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="sidebarContainer" style={{height : "90vh"}}>
      <div className="logoContainer">
        <Link to = '/'>
        <p className="logoItself">
          <img src={logo} alt="SetterApp-Logo" />
          <span> SetterApp </span>
        </p>
        </Link> 
      </div>
      <div className="linkToEachPage">
        <div className="eachPage CurrentPage">
          <Link to="/SocialDashboard">
            <span className="fontspace ">
              <FaFoursquare />
            </span>{" "}
            Dashboard
          </Link>
        </div>
        <div className="eachPage">
          <Link to="/PostSchedule">
            {" "}
            <span className="fontspace">
              <FaCalendar />
            </span>{" "}
            Post Schedule
          </Link>
        </div>
        <div className="eachPage">
          <Link to="/PostQueue">
            {" "}
            <span className="fontspace">
              <FaSignal />
            </span>{" "}
            Post Queue
          </Link>
        </div>
        <div className="eachPage">
          <Link to="/Messages">
            <span className="fontspace">
              <FaEnvelope />
            </span>{" "}
            Messages
          </Link>
        </div>
        <div className="eachPage">
          <Link to="/AnalyticsPage">
            <span className="fontspace">
              <FaChartLine />
            </span>{" "}
            Analytics
          </Link>
        </div>
        <div className="eachPage">
          <Link to="/ContactUs">
            <span className="fontspace">
              <FaPhone />
            </span>{" "}
            Contact Us
          </Link>
        </div>
        <div className="eachPage">
          <Link to="/">
            <span className="fontspace">
              <FaWrench />
            </span>{" "}
            Settings
          </Link>
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
        <div className="eachPage CurrentPage">
          <Link to="/SocialDashboard">
            <span className="fontspace ">
              <FaFoursquare />
            </span>{" "}
            Dashboard
          </Link>
        </div>
        <div className="eachPage">
          <Link to="/PostSchedule">
            {" "}
            <span className="fontspace">
              <FaCalendar />
            </span>{" "}
            Post Schedule
          </Link>
        </div>
        <div className="eachPage">
          <Link to="/PostQueue">
            {" "}
            <span className="fontspace">
              <FaSignal />
            </span>{" "}
            Post Queue
          </Link>
        </div>
        <div className="eachPage">
          <Link to="/Messages">
            <span className="fontspace">
              <FaEnvelope />
            </span>{" "}
            Messages
          </Link>
        </div>
        <div className="eachPage">
          <Link to="/AnalyticsPage">
            <span className="fontspace">
              <FaChartLine />
            </span>{" "}
            Analytics
          </Link>
        </div>
        <div className="eachPage">
          <Link to="/ContactUs">
            <span className="fontspace">
              <FaPhone />
            </span>{" "}
            Contact Us
          </Link>
        </div>
        <div className="eachPage">
          <Link to="/">
            <span className="fontspace">
              <FaWrench />
            </span>{" "}
            Settings
          </Link>
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