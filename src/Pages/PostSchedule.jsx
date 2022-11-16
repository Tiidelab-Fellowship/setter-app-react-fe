import { Footer } from "../Components/Footer/Footer";
import { SideBarTwo } from "../Components/Sidebar/SideBar";
import { DBheader } from "../Components/DashboardHeader/dashboardHeader";
import { Queue, TopPost } from "../Components/Posts/PostPages";
import "../Stylesheets/PostPages.css"
import DemoApp from "../Components/FullCalendar/FullCalendarComponent";
import { useState } from "react";
import { PostModal } from "../Components/Modals/PostModal";


export const PostScheduleContent = ({modal, setModal}) => {
  return (
    <>
    <PostModal modal={modal} setModal={setModal}/>
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
    </>
  );
};

const PostSchedule = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <DBheader
        headline="Post Schedule 😘"
        headlineDetails="Schedule your post here and go to rest, We will do the rest."
        hidePickSocials
        smallName="Banwo O."
        occupation="Web Developer"
        modal={modal}
        setModal={setModal}
      />
      <PostScheduleContent modal={modal}
        setModal={setModal}/>
      <SideBarTwo />
      <Footer />
    </>
  );
};
export default PostSchedule;
