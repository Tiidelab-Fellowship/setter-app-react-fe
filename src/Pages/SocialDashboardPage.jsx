import { SocialDashboardContent } from "../Components/DashboardContent/SocialDashboard";
import { DBheader } from "../Components/DashboardHeader/dashboardHeader";
import { Footer } from "../Components/Footer/Footer";
import { SideBarTwo } from "../Components/Sidebar/SideBar";
import "../Stylesheets/dashboardHeader.css";

const SocialDashboard = () => {
  return (
    <>
      <DBheader
        headline="Welcome, Banwo 🎉"
        headlineDetails="Here is an overview of your Social Media Accounts."
        hideButton
        hidePickSocials
        smallName="Banwo O."
        occupation="Web Developer"
      />
      <SocialDashboardContent />
      <SideBarTwo />
      <Footer />
    </>
  );
};
export default SocialDashboard;
