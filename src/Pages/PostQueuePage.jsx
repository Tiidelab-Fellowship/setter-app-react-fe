import { Footer } from "../Components/Footer/Footer";
import { SideBarTwo } from "../Components/Sidebar/SideBar";
import { DBheader } from "../Components/DashboardHeader/dashboardHeader";
import { Queue, TopPost } from "../Components/Posts/PostPages";
import "../Stylesheets/PostPages.css"
import  { DemoAppTwo } from "../Components/FullCalendar/FullCalendarComponent";
import { PostModal } from "../Components/Modals/PostModal";
import React, {useState} from "react";

export const PostQueueContent = ({modal,setModal}) => {
  return (
    <React.Fragment>
    <PostModal modal={modal}
        setModal={setModal}/>
    <section className="PSPQDashboardContainer">
      <main className="bigestSide">
        <Queue />
        <Queue />
      </main>
      <aside className="besideBigestSide">
        <div className="asideTopP">
          <div>
            <DemoAppTwo />
          </div>
        </div>
        <div className="asideBottom">
          <h2 className="TopPost">Top Post</h2>
          <TopPost />
          <TopPost />
        </div>
      </aside>
    </section>
    </React.Fragment>
  );
};
const PostQueue = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <DBheader
        headline="Posts Queue 📬"
        headlineDetails="See what post goes out next and do well to re-schedule if you want to."
        hidePickSocials
        smallName="Banwo O."
        occupation="Web Developer"
        modal={modal}
        setModal={setModal}
      />
      <PostQueueContent modal={modal}
        setModal={setModal}/>
      <SideBarTwo />
      <Footer />
    </>
  );
};
export default PostQueue;
