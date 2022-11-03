import { Footer } from "../Components/Footer/Footer";
import { SideBarTwo } from "../Components/Sidebar/SideBar";
import { DBheader } from "../Components/DashboardHeader/dashboardHeader";
import { Queue, TopPost } from "../Components/Posts/PostPages";
import "../Stylesheets/PostPages.css"
import DemoApp from "../Components/FullCalendar/FullCalendarComponent";

export const PostScheduleContent = () => {
  return (
    <section className="PSPQDashboardContainer">
      <main className="bigestSideP">
        <div>
        <DemoApp />
        </div>
      </main>
      <aside className="besideBigestSide">
        <div className="asideTop">
          <Queue />
          <Queue />
        </div>
        <div className="asideBottom">
        <h2 className="TopPost">Top Post</h2>
          <TopPost />
          <TopPost />
        </div>
      </aside>
    </section>
  );
};

const PostSchedule = () => {
  return (
    <>
      <DBheader
        headline="Post Schedule 😘"
        headlineDetails="Schedule your post here and go to rest, We will do the rest."
        hidePickSocials
        smallName="Banwo O."
        occupation="Web Developer"
      />
      <PostScheduleContent />
      <SideBarTwo />
      <Footer />
    </>
  );
};
export default PostSchedule;
