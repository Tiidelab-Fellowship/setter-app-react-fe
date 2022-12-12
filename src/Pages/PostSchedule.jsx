import { SideBarTwo } from "../Components/Sidebar/SideBar";
import { DBheader } from "../Components/DashboardHeader/dashboardHeader";
import "../Stylesheets/PostPages.css"
import {DemoApp} from "../Components/FullCalendar/FullCalendarComponent";
import { useEffect, useState } from "react";
import { PostModal } from "../Components/Modals/PostModal";
import axiosInstance from "../helpers/axiosConfig/axiosConfig";
import { Loader } from "../Components/Loader/Loader";



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
    </section>
    </>
  );
};

const PostSchedule = () => {
  const [user, setUser] = useState({})
  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("userId"));
    axiosInstance.get(`/users/${id}`).then((response)=>{
      setUser(response.data)
      setPost(response.data.posts)
      setLoading(false)
    });
  }, []);
  
  const { firstName, profilePicture } = user
  const [modal, setModal] = useState(false);
  return (
    <>
      <DBheader
        headline="Post Schedule"
        headlineDetails="Schedule your post here and go to rest, We will do the rest."
        hidePickSocials
        smallName={loading ? <Loader /> :firstName}
       
        modal={modal}
        setModal={setModal}
        avatar={profilePicture}
      />
      <PostScheduleContent modal={modal} post={post}
        setModal={setModal}/>
      <SideBarTwo />
    </>
  );
};
export default PostSchedule;
