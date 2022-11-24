import { SideBarTwo } from "../Components/Sidebar/SideBar";
import { DBheader } from "../Components/DashboardHeader/dashboardHeader";
import { Queue, TopPost } from "../Components/Posts/PostPages";
import "../Stylesheets/PostPages.css"
import  { DemoAppTwo } from "../Components/FullCalendar/FullCalendarComponent";
import { PostModal } from "../Components/Modals/PostModal";
import React, {useEffect, useState} from "react";
import axiosInstance from "../helpers/axiosConfig/axiosConfig";

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
  const [user, setUser] = useState({})
  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("userId"));
    axiosInstance.get(`/users/${id}`).then((response)=>{
      setUser(response.data)
    });
  }, []);
  
  const { firstName } = user
  return (
    <>
      <DBheader
        headline="Posts Queue 📬"
        headlineDetails="See what post goes out next and do well to re-schedule if you want to."
        hidePickSocials
        smallName={firstName}
        occupation="Web Developer"
        modal={modal}
        setModal={setModal}
      />
      <PostQueueContent modal={modal}
        setModal={setModal}/>
      <SideBarTwo />
    </>
  );
};
export default PostQueue;
