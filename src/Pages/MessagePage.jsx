import { Footer } from "../Components/Footer/Footer"
import { SideBarTwo } from "../Components/Sidebar/SideBar";
import { DBheader } from "../Components/DashboardHeader/dashboardHeader";
import { MessageContent } from "../Components/DashboardContent/messages";
import { useEffect, useState } from "react";
import axiosInstance from "../helpers/axiosConfig/axiosConfig";

const Messages = () =>{
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
        headline="Messages 😘"
        headlineDetails="View and reply all messages from your various social media platforms here."
        hideButton
        smallName={firstName}
        occupation="Web Developer"
      />
      <MessageContent  />
      <SideBarTwo />
     <Footer />
    </>
   );
}
export default Messages