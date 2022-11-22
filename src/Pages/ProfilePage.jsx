import { Footer } from "../Components/Footer/Footer"
// import { ProfileContent } from "../Components/DashboardContent/Profile";
import { SideBar } from "../Components/Sidebar/SideBar";
import { DBheader } from "../Components/DashboardHeader/dashboardHeader";
import { ProfileContent} from "../Components/DashboardContent/Profile"
import {ProfileModalBusiness, ProfileModalName} from "../Components/Modals/ProfileModal";
import { useState, useEffect } from "react";
import axiosInstance from "../helpers/axiosConfig/axiosConfig";


const ProfilePage = () =>{
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [user, setUser] = useState({})
  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("userId"));
    axiosInstance.get(`/users/${id}`).then((response)=>{
      setUser(response.data)
    });
  }, []);
  
  const { firstName } = user
  // const userInfo = await axiosInstance.get(`/users/${id}`)
  // console.log(userInfo)
  // const { firstName, lastName} = userInfo.data
  return (
    <>
      <DBheader
        headline="My Profile 👩👨"
        headlineDetails="Feel free to edit your profile and add accounts."
        hideButton
        hidePickSocials
        smallName={firstName}
        occupation="Web Developer"
      />
      <ProfileModalName modal2={modal2} setModal2={setModal2} />
      <ProfileModalBusiness  modal={modal} setModal={setModal} />
      <ProfileContent setModal={setModal} setModal2={setModal2} user={user}/>
     <SideBar />
     <Footer />
    </>
   );
}
export default ProfilePage