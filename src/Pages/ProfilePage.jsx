import { Footer } from "../Components/Footer/Footer"
// import { ProfileContent } from "../Components/DashboardContent/Profile";
import { SideBar } from "../Components/Sidebar/SideBar";
import { DBheader } from "../Components/DashboardHeader/dashboardHeader";
import { ProfileContent} from "../Components/DashboardContent/Profile"
import {ProfileModalBusiness, ProfileModalName} from "../Components/Modals/ProfileModal";
import { useState } from "react";
import axiosInstance from "../helpers/axiosConfig/axiosConfig";



const ProfilePage = async () =>{
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  // const id = JSON.parse(localStorage.getItem("userId"));
  // const userInfo = await axiosInstance.get(`/users/${id}`)
  // console.log(userInfo)
  // const { firstName, lastName} = userInfo.data
  return (
    <>
      <DBheader
        headline="My Profile"
        headlineDetails="Feel free to edit your profile and add accounts."
        hideButton
        hidePickSocials
        smallName="Banwo O."
        occupation="Web Developer"
      />
      <ProfileModalName modal2={modal2} setModal2={setModal2} />
      <ProfileModalBusiness  modal={modal} setModal={setModal} />
      <ProfileContent setModal={setModal} setModal2={setModal2}/>
     <SideBar />
     <Footer />
    </>
   );
}
export default ProfilePage