import { Footer } from "../Components/Footer/Footer"
import { SideBar } from "../Components/Sidebar/SideBar";
import { DBheader } from "../Components/DashboardHeader/dashboardHeader";



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
     <SideBar />
     <Footer />
    </>
   );
}
export default AnalyticsPage

