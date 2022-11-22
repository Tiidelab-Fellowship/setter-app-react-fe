import { Footer } from "../Components/Footer/Footer"
import { SideBarTwo } from "../Components/Sidebar/SideBar";
import { DBheader } from "../Components/DashboardHeader/dashboardHeader";
import { AnalyticsContent } from "../Components/DashboardContent/analytics";
import axiosInstance from "../helpers/axiosConfig/axiosConfig";
import { useState, useEffect } from "react";


const AnalyticsPage = () =>{
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
        headline="Analytics 🔥"
        headlineDetails="Here is an overall view of how your is fairing on all Social Platforms."
        hideButton
        smallName={firstName}
        occupation="Web Developer"
      />
      <AnalyticsContent />
     <SideBarTwo />
     <Footer />
    </>
   );
}
export default AnalyticsPage


