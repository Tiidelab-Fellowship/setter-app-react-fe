import { SideBarTwo } from "../Components/Sidebar/SideBar";
import { DBheader } from "../Components/DashboardHeader/dashboardHeader";
import { Queue } from "../Components/Posts/PostPages";
import "../Stylesheets/PostPages.css"
import { PostModal } from "../Components/Modals/PostModal";
import React, {useEffect, useState} from "react";
import axiosInstance from "../helpers/axiosConfig/axiosConfig";
import { Loader } from "../Components/Loader/Loader";

export const PostQueueContent = ({modal,setModal, post}) => {
  console.log(post)
  return (
    <React.Fragment>
    <PostModal modal={modal}
        setModal={setModal}/>
    <section className="PSPQDashboardContainer">
      <main className="bigestSide">
       <Queue post={post}/>
      </main>
    </section>
    </React.Fragment>
  );
};
const PostQueue = () => {
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState({})
  const [post, setpost] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("userId"));
    axiosInstance.get(`/users/${id}`).then((response)=>{
      setUser(response.data)
      setpost(response.data.posts)
      setLoading(false)
    });
  }, []);
  console.log(post)
  const { firstName, profilePicture } = user
  return (
    <>
      <DBheader
        headline="Posts Queue"
        headlineDetails="See what post goes out next and do well to re-schedule if you want to."
        hidePickSocials
        smallName={loading ? <Loader /> :firstName}
        avatar={profilePicture}
        modal={modal}
        setModal={setModal}
      />
      <PostQueueContent modal={modal}
        setModal={setModal} post={post}/>
      <SideBarTwo />
    </>
  );
};
export default PostQueue;
