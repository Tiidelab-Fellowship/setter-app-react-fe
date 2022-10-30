import { Footer } from "../Components/Footer/Footer"
import { SideBar } from "../Components/Sidebar/SideBar";
import { DBheader } from "../Components/DashboardHeader/dashboardHeader";


const Messages = () =>{
  return (
    <>
    <DBheader
        headline="Messages 😘"
        headlineDetails="View and reply all messages from your various social media platforms here."
        hideButton
        smallName="Banwo O."
        occupation="Web Developer"
      />
     <SideBar />
     <Footer />
    </>
   );
}
export default Messages