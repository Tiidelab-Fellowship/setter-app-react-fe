import { Footer } from "../Components/Footer/Footer"
// import { ProfileContent } from "../Components/DashboardContent/Profile";
import { SideBar } from "../Components/Sidebar/SideBar";
import { DBheader } from "../Components/DashboardHeader/dashboardHeader";



const ProfilePage = () =>{
  return (
    <>
      <DBheader
        headline="My Profile 👩👨"
        headlineDetails="Feel free to edit your profile and add accounts."
        hideButton
        hidePickSocials
        smallName="Banwo O."
        occupation="Web Developer"
      />
     <SideBar />
     <Footer />
    </>
   );
}
export default ProfilePage