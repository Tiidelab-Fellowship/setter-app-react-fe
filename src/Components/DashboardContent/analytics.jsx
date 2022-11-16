import React from 'react';
import '../../Stylesheets/analytics.css'
import arrowUp from '../../SetterApp-Assets/arrow-up.png';
import more from '../../SetterApp-Assets/more.png';
import cat from '../../SetterApp-Assets/cat.png';
import man from '../../SetterApp-Assets/man.png';
import abstract from '../../SetterApp-Assets/abstract.png';
import like from '../../SetterApp-Assets/like.png';
import share from '../../SetterApp-Assets/share.png';
import grow from '../../SetterApp-Assets/grow.png';
import moreBottom from '../../SetterApp-Assets/more-bottom.png';
import "../../Stylesheets/analytics.css";

import { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto"


import { LikesData } from '../AnalyticsChart/analyticsData';
import { BarChart } from '../Chart/BarChart';



export const AnalyticsContent = () => {
const [userLikes, setUserLikes] = useState({
  
  labels: LikesData.map((data)=> data.month),
  datasets: [{
    label: "number of likes",
    data : LikesData.map((data)=> data.numberOfLikes),
    backgroundColor: color => {
      let colors = color.index === 5 ? '#000000' : '#eeeeee'
      return colors;
    }, 
    borderWidth: 0.5,
    borderRadius: 20,
    barPercentage: 0.3,
  }]
 })

  return (
    <fragment>
  <div className="container">
    <div className="top-header">
      <div className="account-data">
        <div className="top-top">
          <img src={grow} alt=""/>
          <div className="top-title">Account Reached</div>
        </div>
        <div className="top-bottom">
          <div className="top-followers">404k</div>
          <div>
            <div className="bottom-data">
              <img src={arrowUp} alt="arrow up" />
              <p>0.85%</p>
            </div>
            <div className="bottom-period">This week</div>
          </div>
        </div>
      </div>
      <div className="account-data">
        <div className="top-top">
          <img src={grow} alt="grow" />
          <div className="top-title">Account Reached</div>
        </div>
        <div className="top-bottom">
          <div className="top-followers">404k</div>
          <div>
            <div className="bottom-data">
              <img src={arrowUp} alt="arrow up" />
              <p>0.85%</p>
            </div>
            <div className="bottom-period">This week</div>
          </div>
        </div>
      </div>
      <div className="account-data">
        <div className="top-top">
          <img src={grow} alt="grow" />
          <div className="top-title">Account Reached</div>
        </div>
        <div className="top-bottom">
          <div className="top-followers">404k</div>
          <div>
            <div className="bottom-data">
              <img src={arrowUp} alt="arrow up" />
              <p>0.85%</p>
            </div>
            <div className="bottom-period">This week</div>
          </div>
        </div>
      </div>
      <div className="account-data">
        <div className="top-top">
          <img src={grow} alt="grow" />
          <div className="top-title">Account Reached</div>
        </div>
        <div className="top-bottom">
          <div className="top-followers">404k</div>
          <div>
            <div className="bottom-data">
              <img src={arrowUp} alt="arrow up" />
              <p>0.85%</p>
            </div>
            <div className="bottom-period">This week</div>
          </div>
        </div>
      </div>
    </div>
    <div className="inner-body">
      <div className="followers-growth">
        <div className="user-growth">
          <div>Follower Growth</div>
          <BarChart chartData= {userLikes} /> 
        </div>
        <div className="user-country" />
      </div>
      <div className="scheduled-posts">
        <div className="schedule-header">
          <div className="schedule-title">Schedule Post</div>
          <div className="add-post"><a href>Add Post</a></div>
        </div>
        <div className="post-container">
          <img src={cat} alt="" />
          <div className="post-info">
            <div className="post-heading">For Fox Sake</div>
            <div className="post-details">
              <p>
                <span>Posted on</span><br />
                Instagram
              </p>
              <p>
                <span>Posting Date</span><br />
                13 March, 2020
              </p>
            </div>
          </div>
          <img src={more} alt="" />
        </div>
        <div className="post-container">
          <img src={cat} alt="" />
          <div className="post-info">
            <div className="post-heading">For Fox Sake</div>
            <div className="post-details">
              <p>
                <span>Posted on</span><br />
                Instagram
              </p>
              <p>
                <span>Posting Date</span><br />
                13 March, 2020
              </p>
            </div>
          </div>
          <img src={more} alt="" />
        </div>
        <div className="activities">
          <div className="activity-title">Activities</div>
          <div className="activity-box">
            <div className="activity-person">
              <img src={man} alt="" />
              <div className="person-action">
                <div className="name">Banwo Olorun</div>
                <div className="action">Commented on your photo</div>
              </div>
            </div>
            <div className="activity-content">
              <div className="content">
                Great work deserves appreciations. This is so amazing! 😍🎉
              </div>
              <img src={abstract} alt="" />
            </div>
            <div className="ending">
              <div className="time">1 h ago</div>
              <img src={like} alt="" />
              <img src={share} alt="" />
              <img src={moreBottom} alt="" />
            </div>
          </div>
          <div className="activity-box">
            <div className="activity-person">
              <img src="./images/man.png" alt="" />
              <div className="person-action">
                <div className="name">Banwo Olorun</div>
                <div className="action">Commented on your photo</div>
              </div>
            </div>
            <div className="activity-content">
              <div className="content">
                Great work deserves appreciations. This is so amazing! 😍🎉
              </div>
              <img src={abstract} alt="" />
            </div>
            <div className="ending">
              <div className="time">1 h ago</div>
              <img src={like} alt="" />
              <img src={share} alt="" />
              <img src={moreBottom} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</fragment>

  )
}