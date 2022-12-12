import { SideBarTwo } from "../Components/Sidebar/SideBar";
import { DBheader } from "../Components/DashboardHeader/dashboardHeader";
import { ProfileContent} from "../Components/DashboardContent/Profile"
import {ProfileModalBusiness, ProfileModalName} from "../Components/Modals/ProfileModal";
import { useState, useEffect } from "react";
import axiosInstance from "../helpers/axiosConfig/axiosConfig";
import { Loader } from "../Components/Loader/Loader";


const ProfilePage = () =>{
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [user, setUser] = useState({})
  const [businessInfo, setBussinessInfo] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const id = JSON.parse(localStorage.getItem("userId"));
    axiosInstance.get(`/users/${id}`).then((response)=>{
      setUser(response.data)
      setLoading(false)
      if (response.data.businessInfo === null){
        setBussinessInfo({name:"Not Registered",size:"Not Registered", businessCategoryName: "Not Registered"}) 
      } else{
      setBussinessInfo(response.data.businessInfo)}
      
    });
  }, []);
  
  const { firstName, profilePicture } = user
  return (
    <>
      <DBheader
        headline="My Profile"
        headlineDetails="Feel free to edit your profile and add accounts."
        hideButton
        hidePickSocials
        smallName={loading ? <Loader/> : firstName}
        avatar={profilePicture}
      />
      <ProfileModalName modal2={modal2} setModal2={setModal2} />
      <ProfileModalBusiness  modal={modal} setModal={setModal} />
      <ProfileContent setModal={setModal} setModal2={setModal2} user={user} businessInfo={businessInfo} loading={loading}/>
     <SideBarTwo />
    </>
   );
}
export default ProfilePage