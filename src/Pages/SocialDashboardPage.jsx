import { SocialDashboardContent } from "../Components/DashboardContent/SocialDashboard";
import { DBheader } from "../Components/DashboardHeader/dashboardHeader";
import { SideBarTwo } from "../Components/Sidebar/SideBar";
import "../Stylesheets/dashboardHeader.css";
import axiosInstance from "../helpers/axiosConfig/axiosConfig";
import { useEffect, useState } from "react";

const SocialDashboard = () => {
  const [user, setUser] = useState({})
  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("userId"));
    axiosInstance.get(`/users/${id}`).then((response)=>{
      setUser(response.data)
    });
  }, []);
  
  const { firstName } = user
  return (
    <>
      <DBheader
        headline={`Welcome, ${firstName}🎉`}
        headlineDetails="Here is an overview of your Social Media Accounts."
        hideButton
        smallName= {firstName}
        // occupation="Web Developer"
      />
      <SocialDashboardContent />
      <SideBarTwo />
    </>
  );
};
export default SocialDashboard;
