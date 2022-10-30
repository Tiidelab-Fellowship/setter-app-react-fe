import { Footer } from "../Components/Footer/Footer"
import { SideBar } from "../Components/Sidebar/SideBar";
import { DBheader } from "../Components/DashboardHeader/dashboardHeader";

const PostSchedule = () =>{
  return (
    <>
       <DBheader
        headline="Post Schedule 😘"
        headlineDetails="Schedule your post here and go to rest, We will do the rest."
        hidePickSocials
        smallName="Banwo O."
        occupation="Web Developer"
      />
     <SideBar />
     <Footer />
    </>
   );
}
export default PostSchedule