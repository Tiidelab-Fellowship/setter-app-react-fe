import { SocialDashboardContent } from "../Components/DashboardContent/SocialDashboard";
import { DBheader } from "../Components/DashboardHeader/dashboardHeader";
import { SideBarTwo } from "../Components/Sidebar/SideBar";
import "../Stylesheets/dashboardHeader.css";
import axiosInstance from "../helpers/axiosConfig/axiosConfig";
import { useEffect, useState } from "react";
import { Loader } from "../Components/Loader/Loader";

const SocialDashboard = () => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("userId"));
    axiosInstance.get(`/users/${id}`).then((response)=>{
      setLoading(false)
      setUser(response.data)
    });
  }, []);
  
  const { firstName, profilePicture } = user
  return (
    <>
      <DBheader
        headline={loading ? <Loader /> :`Welcome, ${firstName}`}
        headlineDetails="Here is an overview of your Social Media Accounts."
        hideButton
        smallName= {loading ? <Loader/> : firstName}
        avatar={profilePicture}
      />
      <SocialDashboardContent />
      <SideBarTwo />
    </>
  );
};
export default SocialDashboard;
