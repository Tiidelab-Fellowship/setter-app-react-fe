import React from "react";
import { FaClock, FaComment, FaEye, FaHeart } from "react-icons/fa";
import avatar from "../../SetterApp-Assets/avatar.png";
import "../../Stylesheets/PostPages.css";

export const Queue = (post) => {
  const posts = post.post;
  
  return (
    <div className="postQueueContent">
      {posts.map((eachPost) => {
        const {id, title, body, start} = eachPost
        return (
          <div className="PQeachPost" key={id}>
            <div className="EPleft">
              <img className="postImage" src={avatar} alt="TiidelabMeetUp" />
            </div>
            <div className="EPright">
              <h2 className="postMainHeader">{title}</h2>
              <p className="postParagraph">{body}</p>
              <div className="bottomEachPost">
                <div className="leftBottomEachPost">
                  <p className="TLBEP">Scheduled For: </p>
                  <p className="BLBEP">
                    <FaClock /> {start}
                  </p>
                </div>
                <div className="BRBEP">
                  <button className="PQbuttonEdit">Edit</button>
                  <button className="PQbuttonShare">Share Now</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const TopPost = () => {
  return (
    <div className="bottomPostContent">
      <div className="BPCImage">
        <img src={avatar} alt="TiidelabMeetUp" />
      </div>
      <div className="BPCR">
        <h1 className="HBPCR">Tech Life with Mr Shams</h1>
        <div className="BBPCR">
          <div className="textIconForLikeViewAndComment">
            <FaHeart /> <span className="LVC">0</span>
          </div>
          <div className="textIconForLikeViewAndComment">
            <FaEye /> <span className="LVC">0</span>
          </div>
          <div className="textIconForLikeViewAndComment">
            <FaComment /> <span className="LVC">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FullCalendar = () => {
  return <div id="calendar"></div>;
};
