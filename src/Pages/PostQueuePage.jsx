import { Footer } from "../Components/Footer/Footer"
import { SideBar } from "../Components/Sidebar/SideBar";
import { DBheader } from "../Components/DashboardHeader/dashboardHeader";


const PostQueue = () =>{
  return (
    <>
    <DBheader
        headline="Posts Queue 📬"
        headlineDetails="See what post goes out next and do well to re-schedule if you want to."
        hidePickSocials
        smallName="Banwo O."
        occupation="Web Developer"
      />
     <SideBar />
     <Footer />
    </>
   );
}
export default PostQueue