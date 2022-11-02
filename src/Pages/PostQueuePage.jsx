import { Footer } from "../Components/Footer/Footer";
import { SideBar } from "../Components/Sidebar/SideBar";
import { DBheader } from "../Components/DashboardHeader/dashboardHeader";
import { Queue, TopPost } from "../Components/Posts/PostPages";
import "../Stylesheets/PostPages.css"

export const PostQueueContent = () => {
  return (
    <section className="PSPQDashboardContainer">
      <main className="bigestSide">
        <Queue />
      </main>
      <aside className="besideBigestSide">
        <div className="asideTop"></div>
        <div className="asideBottom">
          <h2 className="TopPost">Top Post</h2>
          <TopPost />
        </div>
      </aside>
    </section>
  );
};
const PostQueue = () => {
  return (
    <>
      <DBheader
        headline="Posts Queue 📬"
        headlineDetails="See what post goes out next and do well to re-schedule if you want to."
        hidePickSocials
        smallName="Banwo O."
        occupation="Web Developer"
      />
      <PostQueueContent />
      <SideBar />
      <Footer />
    </>
  );
};
export default PostQueue;
