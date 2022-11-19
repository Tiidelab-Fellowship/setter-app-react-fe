import { Footer } from "../Components/Footer/Footer"
import { SideBarTwo } from "../Components/Sidebar/SideBar";
import { DBheader } from "../Components/DashboardHeader/dashboardHeader";
import { AnalyticsContent } from "../Components/DashboardContent/analytics";


const AnalyticsPage = () =>{
  return (
    <>
    <DBheader
        headline="Analytics 🔥"
        headlineDetails="Here is an overall view of how your is fairing on all Social Platforms."
        hideButton
        smallName="Banwo O."
        occupation="Web Developer"
      />
      <AnalyticsContent />
     <SideBarTwo />
     <Footer />
    </>
   );
}
export default AnalyticsPage


