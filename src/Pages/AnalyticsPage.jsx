import { SideBarTwo } from "../Components/Sidebar/SideBar";
import { DBheader } from "../Components/DashboardHeader/dashboardHeader";
import { AnalyticsContent } from "../Components/DashboardContent/analytics";
import axiosInstance from "../helpers/axiosConfig/axiosConfig";
import { useState, useEffect } from "react";
import { Loader } from "../Components/Loader/Loader";



const AnalyticsPage = () =>{
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("userId"));
    axiosInstance.get(`/users/${id}`).then((response)=>{
      setUser(response.data)
      setLoading(false)
    });
  }, []);
  console.log(user)
  const { firstName, profilePicture } = user
  return (
    <>
    <DBheader
        headline="Analytics"
        headlineDetails="Here is an overall view of how your is fairing on all Social Platforms."
        hideButton
        smallName={loading ? <Loader /> :firstName}
        avatar={profilePicture}
      />
      <AnalyticsContent />
     <SideBarTwo />
    </>
   );
}
export default AnalyticsPage


