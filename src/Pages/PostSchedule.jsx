import { SideBarTwo } from "../Components/Sidebar/SideBar";
import { DBheader } from "../Components/DashboardHeader/dashboardHeader";
import { Queue, TopPost } from "../Components/Posts/PostPages";
import "../Stylesheets/PostPages.css"
import {DemoApp} from "../Components/FullCalendar/FullCalendarComponent";
import { useEffect, useState } from "react";
import { PostModal } from "../Components/Modals/PostModal";
import axiosInstance from "../helpers/axiosConfig/axiosConfig";



export const PostScheduleContent = ({modal, setModal, post}) => {
 
  return (
    <>
    <PostModal modal={modal} setModal={setModal}/>
    <section className="PSPQDashboardContainer">
      <main className="bigestSideP">
        <div>
        <DemoApp post={post}/>
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
  const [user, setUser] = useState({})
  const [post, setPost] = useState([])
  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("userId"));
    axiosInstance.get(`/users/${id}`).then((response)=>{
      setUser(response.data)
      setPost(response.data.posts)
    });
  }, []);
  
  const { firstName } = user
  const [modal, setModal] = useState(false);
  return (
    <>
      <DBheader
        headline="Post Schedule"
        headlineDetails="Schedule your post here and go to rest, We will do the rest."
        hidePickSocials
        smallName={firstName}
        occupation=""
        modal={modal}
        setModal={setModal}
      />
      <PostScheduleContent modal={modal} post={post}
        setModal={setModal}/>
      <SideBarTwo />
    </>
  );
};
export default PostSchedule;
