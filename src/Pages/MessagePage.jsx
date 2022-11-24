import { Footer } from "../Components/Footer/Footer"
import { SideBarTwo } from "../Components/Sidebar/SideBar";
import { DBheader } from "../Components/DashboardHeader/dashboardHeader";
// import { MessageContent } from "../Components/DashboardContent/messages";

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
      {/* <MessageContent  /> */}
      <SideBarTwo />
     <Footer />
    </>
   );
}
export default Messages