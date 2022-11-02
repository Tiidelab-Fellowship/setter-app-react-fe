import React from "react";
import { FaClock, FaComment, FaEye, FaHeart } from "react-icons/fa";
import TIIDELab from "../../SetterApp-Assets/TiidelaB-meetUp.png";
import "../../Stylesheets/PostPages.css"

export const Queue = () => {
  return (
    <div className="postQueueContent">
      <div className="PQeachPost">
        <div className="EPleft">
          <img src={TIIDELab} alt="TiidelabMeetUp" />
        </div>
        <div className="EPright">
          <h2 className="postMainHeader">Tech Life with Mr Shams</h2>
          <p className="postParagraph">
            Oya Clear Road for Mr Shams! The Big Brother of TIIDELab is getting
            a mansion in Lagos. Our real estate agents are dedicated to helping
            him find houses, apartments, condos and commercial properties.
          </p>
          <div className="bottomEachPost">
            <div className="leftBottomEachPost">
              <p className="TLBEP">Scheduled For:</p>
              <p className="BLBEP"><FaClock /> 10:12, Today</p>
            </div>
            <div className="BRBEP">
              <button className="PQbuttonEdit">Edit</button>
              <button className="PQbuttonShare">Share Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TopPost = () => {
  return (
    <div className="bottomPostContent">
      <div className="BPCImage">
        <img src={TIIDELab} alt="TiidelabMeetUp" />
      </div>
      <div className="BPCR">
        <h1 className="HBPCR">Tech Life with Mr Shams</h1>
        <div className="BBPCR">
          <div className="textIconForLikeViewAndComment">
            <FaHeart /> <span className="LVC">40</span>
          </div>
          <div className="textIconForLikeViewAndComment">
            <FaEye /> <span className="LVC">25</span>
          </div>
          <div className="textIconForLikeViewAndComment">
            <FaComment /> <span className="LVC">30</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FullCalendar = () => {
  return <div id="calendar"></div>;
};
